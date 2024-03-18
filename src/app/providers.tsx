// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextAuthProvider>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </NextAuthProvider>
    )
}

export default function NextAuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    return <SessionProvider> {children} </SessionProvider>
}