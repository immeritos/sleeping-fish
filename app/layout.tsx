import type { Metadata } from 'next'
import { Inter, Outfit, Fraunces } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation/navigation'
import siteMetadata from '@/data/siteMetadata'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit',
  display: 'swap'
})
const fraunces = Fraunces({ 
  subsets: ['latin'], 
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK']  // 启用柔和度轴和倾斜轴
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: 'Sleeping Fish | HOME',
  description: 'A personal website with blog and photography',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'light') {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} ${fraunces.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}