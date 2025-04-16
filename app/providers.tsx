'use client';

import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Divide, Menu, X } from "react-feather"
import { PropsWithChildren } from 'react';

import Loading from '@/components/Loading';

import { usePathname } from 'next/navigation'
import Link from "next/link"

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import outputs from "@/amplify_outputs.json";

import WalletProvider from "../contexts/wallet"
import AccountProvider from "../contexts/account"
import ContentProvider from "../contexts/content"

Amplify.configure(outputs);

export function Providers({ children }: any) {

    const [web3Onboard, setWeb3Onboard] = useState<any>(null)
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    // useEffect(() => {
    //     !showLoader && setWeb3Onboard(initWeb3Onboard)
    // }, [showLoader])

    // useEffect(() => {

    //     const screenLoader = document.getElementsByClassName('screen_loader');
    //     if (screenLoader?.length) {
    //         setTimeout(() => {
    //             setShowLoader(false);
    //         }, 200);
    //     }

    // });

    return (
        <>
            {/* {showLoader ?
                <Loading />
                :
                <WalletProvider>
                    <AccountProvider>
                        <ContentProvider>
                            {children}
                        </ContentProvider>
                    </AccountProvider>
                </WalletProvider>
            } */}
            <WalletProvider>
                    <AccountProvider>
                        <ContentProvider>
                            {children}
                        </ContentProvider>
                    </AccountProvider>
                </WalletProvider>
        </>
    );
}

