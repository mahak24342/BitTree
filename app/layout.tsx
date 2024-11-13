import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/app/components/Nav'
//import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })

//const pathname=usePathname();



export const metadata: Metadata = {
  title: 'GitTree ',
  description: 'Your Link Sharing App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Nav/> 
        {children}</body>
    </html>
  )
}
