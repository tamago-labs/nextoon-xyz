import { createContext, useCallback, ReactNode, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource"

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

    const loadProfile = useCallback(async (userId: string) => {

        let entry

        const user = await client.models.User.list({
            filter: {
                username: {
                    eq: userId
                }
            }
        })

        if (user.data.length === 0) {
            const newUser = {
                username: userId,
                displayName: userId
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


    const accountContext: any = useMemo(
        () => ({
            loadProfile,
            profile
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