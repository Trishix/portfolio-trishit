import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Trishit Swarnakar | Full-Stack & AI Developer',
  description: 'Trishit Swarnakar builds full-stack products, AI agents, and useful digital experiences.',
  icons: {
    icon: [
      { url: '/brand-icon.svg', type: 'image/svg+xml' },
      { url: '/brand-icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/brand-icon.png',
    apple: '/brand-icon.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Trishit Swarnakar | Full-Stack & AI Developer',
    description: 'Full-stack products, AI agents, open-source work, and experience by Trishit Swarnakar.',
    images: [
      {
        url: '/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Trishit Swarnakar, Full-Stack and AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trishit Swarnakar | Full-Stack & AI Developer',
    description: 'Full-stack products, AI agents, open-source work, and experience by Trishit Swarnakar.',
    images: ['/portfolio-preview.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#981827' },
    { media: '(prefers-color-scheme: dark)', color: '#06070a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
