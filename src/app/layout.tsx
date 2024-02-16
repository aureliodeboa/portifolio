import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Aurelio Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <main className=' relateive overflow-hidden'></main>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
