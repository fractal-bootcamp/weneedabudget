import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import SignUpOrIn from './sign-up/page'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WMAB',
  description: 'An App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            <SignUpOrIn />
          </SignedOut>
          <SignedIn>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}
