import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GreenHorizon Landscapes | Sustainable Landscaping in Austin',
  description: 'Transform your outdoor space with sustainable xeriscaping, smart irrigation, and native plant gardens. Water-wise landscaping that increases property value. Book your free consultation today.',
  keywords: ['sustainable landscaping', 'xeriscaping', 'smart irrigation', 'native plants', 'Austin landscaping', 'eco-friendly landscaping', 'water-wise gardens'],
  authors: [{ name: 'GreenHorizon Landscapes' }],
  creator: 'GreenHorizon Landscapes',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://greenhorizonlandscapes.com',
    siteName: 'GreenHorizon Landscapes',
    title: 'GreenHorizon Landscapes | Sustainable Landscaping in Austin',
    description: 'Transform your outdoor space with sustainable xeriscaping, smart irrigation, and native plant gardens. Book your free consultation today.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GreenHorizon Landscapes | Sustainable Landscaping',
    description: 'Transform your outdoor space with sustainable xeriscaping, smart irrigation, and native plant gardens.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#637a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
