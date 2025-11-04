import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'
import siteMetadata from '@/data/siteMetadata'
import CursorOverlay from '@/components/cursor-overlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: 'Daymoon',
  description: 'A personal website with blog and photography',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <CursorOverlay />
        </ThemeProvider>
      </body>
    </html>
  )
}