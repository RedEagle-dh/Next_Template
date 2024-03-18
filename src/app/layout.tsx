import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navigation from './Navigation'
import { LoadingProvider } from '../lib/context/LoadingContext';
import LoadingScreen from '../lib/components/LoadingPage';

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
    title: 'Student Administration',
    description: 'Student Administration',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <LoadingProvider>
                        <LoadingScreen />
                        <Navigation />
                        {children}
                    </LoadingProvider>
                </Providers>
            </body>

        </html>
    )
}
