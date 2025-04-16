import { createContext, useCallback, ReactNode, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource"
import { AccountContext } from "./account"

const client = generateClient<Schema>();

export const ContentContext = createContext<any>({})

type Props = {
    children: ReactNode;
};

const Provider = ({ children }: Props) => {

    const { profile } = useContext(AccountContext)

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            series: []
        }
    )

    const { series } = values

    useEffect(() => {
        if (profile && profile.id) {
            loadSeries(profile.id)
        } else {
            dispatch({
                series: []
            })
        }
    }, [profile])

    const loadSeries = async (userId: any) => {
 
        const { data } = await client.models.Content.list({
            filter: {
                userId: {
                    eq: userId
                }
            }
        })

        dispatch({
            series: data
        })

    }

    const loadAllSeries = async () => {
        const { data } = await client.models.Content.list()
        return data
    }
 
    // const updateProfile = useCallback(async ({ id, displayName }: any) => {

    //     await client.models.User.update({
    //         id,
    //         displayName
    //     })

    //     const entry = await client.models.User.get({
    //         id
    //     })

    //     dispatch({
    //         profile: entry.data
    //     })

    // },[])

    const contentContext: any = useMemo(
        () => ({
            series,
            loadAllSeries
        }),
        [
            series
        ]
    )

    return (
        <ContentContext.Provider value={contentContext}>
            {children}
        </ContentContext.Provider>
    )
}

export default Provider