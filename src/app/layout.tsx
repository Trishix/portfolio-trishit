import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trishit Swarnakar | Full Stack Developer & Agentic AI Developer',
  description: 'Full Stack Developer & Agentic AI Developer portfolio showcasing projects, skills, and experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  )
}
