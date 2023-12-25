import {  Fira_Code } from 'next/font/google'
import './globals.css'

const firacode = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  
  openGraph: {
    title: 'Keep It Secret',
    description: 'Create and share secret message with your friends!',
    keywords:["Secret", "Keep it secret", "Secret Message"],
    url: 'https://keep-it-secret.vercel.app',
    siteName: 'Keep it secret',
    images: [
      {
        url: '/bg-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firacode.className}>{children}</body>
    </html>
  )
}
