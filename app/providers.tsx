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

import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'

// const INFURA_KEY = ''

const baseSepoliaTestnet = {
    id: 84532,
    token: 'ETH',
    label: 'Sepolia',
    rpcUrl: 'https://sepolia.base.org'
}

const chains = [baseSepoliaTestnet]
const wallets = [injectedModule()]

const web3Onboard = init({
    wallets,
    chains,
    appMetadata: {
        name: 'Web3-Onboard Demo',
        icon: '<svg>App Icon</svg>',
        description: 'A demo of Web3-Onboard.'
    }
})

// import outputs from "@/amplify_outputs.json";

// Amplify.configure(outputs);

export function Providers({ children }: any) {

    const [showLoader, setShowLoader] = useState(true);

    const pathname = usePathname()

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

    });



    return (
        <>
            {showLoader ?
                <Loading />
                :
                <Web3OnboardProvider web3Onboard={web3Onboard}>
                    {children}
                </Web3OnboardProvider>
            }

        </>
    );
}

