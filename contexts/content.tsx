import { createContext, useCallback, ReactNode, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource"
import { AccountContext } from "./account"
import { WalletContext } from "./wallet";

const client = generateClient<Schema>();

export const ContentContext = createContext<any>({})

type Props = {
    children: ReactNode;
};

const Provider = ({ children }: Props) => {

    const { getCoinDetails } = useContext(WalletContext)
    // const { profile } = useContext(AccountContext)

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            series: []
        }
    )

    const { series } = values

    useEffect(() => {
        loadAllSeries()
    }, [])

    // useEffect(() => {
    //     if (profile && profile.id) {
    //         loadSeries(profile.id)
    //     } else {
    //         dispatch({
    //             series: []
    //         })
    //     }
    // }, [profile])

    // const loadSeries = async (userId: any) => {

    //     const { data } = await client.models.Content.list({
    //         filter: {
    //             userId: {
    //                 eq: userId
    //             }
    //         }
    //     })

    //     dispatch({
    //         series: data
    //     })

    // }

    const loadAllSeries = async () => {
        const { data } = await client.models.Content.list()

        let series: any = []

        for (let eachContent of data) {

            let coinData

            if (eachContent.tokenContract) {

                try {
                    coinData = await getCoinDetails(eachContent.tokenContract)
                } catch (e) {

                }
            }

            series.push({
                ...eachContent,
                coinData
            })

        }

        dispatch({
            series
        })
    }

    // const listCoins = async () => {
    //     const { data } = await client.models.Content.list()

    //     for (let eachContent of data) {
    //         if (eachContent.tokenContract) {
    //             const coinDetails = await getCoinDetails( eachContent.tokenContract )

    //         }
    //     }

    //     return []
    // }

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
            series
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