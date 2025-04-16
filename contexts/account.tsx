import { createContext, useCallback, ReactNode, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource"
import { shortAddress } from "@/helpers";

const client = generateClient<Schema>();

export const AccountContext = createContext<any>({})

type Props = {
    children: ReactNode;
};

const Provider = ({ children }: Props) => {

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            profile: undefined
        }
    )

    const { profile } = values

    const loadProfile = useCallback(async (userAddress: string) => {

        let entry

        const user = await client.models.User.list({
            filter: {
                username: {
                    eq: userAddress
                }
            }
        })

        if (user.data.length === 0) {
            const newUser = {
                username: userAddress,
                displayName: userAddress
            }
            await client.models.User.create({
                ...newUser
            })
            entry = newUser
        } else {
            entry = user.data[0]
        }

        dispatch({
            profile: entry
        })

    }, [])

    const getCreatorDisplayName = useCallback(async (userId: string) => {
 
        const { data } = await client.models.User.get({
            id: userId
        })
 
        if (data) {
            return data.displayName || shortAddress(data.username)
        } else {
            return undefined
        }

    }, [])

    const updateProfile = useCallback(async ({ id, displayName }: any) => {

        await client.models.User.update({
            id,
            displayName
        })

        const entry = await client.models.User.get({
            id
        })

        dispatch({
            profile: entry.data
        })

    }, [])


    const accountContext: any = useMemo(
        () => ({
            loadProfile,
            profile,
            getCreatorDisplayName,
            updateProfile
        }),
        [
            profile
        ]
    )

    return (
        <AccountContext.Provider value={accountContext}>
            {children}
        </AccountContext.Provider>
    )
}

export default Provider