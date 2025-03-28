'use client';

import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Authenticator, useTheme, View, Heading, Image, Text, Button, ThemeProvider, Theme } from '@aws-amplify/ui-react';

import { Divide, Menu, X } from "react-feather"
import { PropsWithChildren } from 'react';

import Loading from '@/components/Loading';

import { usePathname } from 'next/navigation'
import Link from "next/link"

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const components = {
    Header() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                {/* <Link href="/" className="inline-flex">
                    <div className="relative px-4 py-2 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-md flex items-center shadow-lg shadow-purple-900/20">
                        <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>

                        <h1 className="font-bold text-white text-lg relative z-10">Tamago Labs</h1>
                    </div>
                </Link> */}
            </View>
        );
    },
    Footer() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                {/* <Text color={tokens.colors.black}>
                    Secured by AWS Cognito
                </Text> */}
            </View>
        );
    },
};

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

    const { tokens } = useTheme()

    const theme: Theme = {
        name: 'Auth Theme',
        tokens: {
            components: {
                authenticator: {
                    router: {
                        boxShadow: `0 0 16px ${tokens.colors.overlay['10']}`,
                        borderWidth: '0'
                    }
                },
                tabs: {
                    item: {
                        backgroundColor: "#E0E0E0",
                        borderColor: "#E0E0E0"
                    },
                },
            },
        },
    }

    return (
        <ThemeProvider theme={theme} >
            <View className="min-h-screen relative ">
                <Authenticator components={components}>
                    {children}
                </Authenticator>
            </View>
        </ThemeProvider>
    );
}

