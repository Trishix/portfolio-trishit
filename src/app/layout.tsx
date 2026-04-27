import type { Metadata } from 'next'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Trishit Swarnakar | Full Stack & AI Developer',
  description: 'Portfolio of Trishit Swarnakar with full-stack and AI projects, open-source work, and experience.',
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Trishit Swarnakar | Full Stack & AI Developer',
    description: 'Portfolio with full-stack and AI projects, open-source contributions, and experience.',
    images: [
      {
        url: '/logo.png',
        alt: 'Trishit logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trishit Swarnakar | Full Stack & AI Developer',
    description: 'Portfolio with full-stack and AI projects, open-source contributions, and experience.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  )
}
