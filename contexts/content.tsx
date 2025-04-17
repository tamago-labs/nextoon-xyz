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

            const { data } = await eachContent.episodes()
 
            series.push({
                ...eachContent,
                episodes: data,
                coinData
            })

        }

        dispatch({
            series
        })
    }

    const updatePrice = async (contentId: any, tokenPrice: any) => {
        await client.models.Content.update({
            id: contentId,
            tokenPrice
        })
    }

    const addEpisode = async ({contentId, episodeTitle, episodeDescription, isTokenGated, minimumToken, pages }: any) => {
        await client.models.Episode.create({
            contentId,
            title: episodeTitle,
            description: episodeDescription,
            isActive: true,
            isTokenGated,
            minimumToken,
            pages
        })
    }   
    

    const contentContext: any = useMemo(
        () => ({
            series,
            updatePrice,
            addEpisode
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