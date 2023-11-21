import { Inter } from 'next/font/google'
import './globals.css'

import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gravel and Pavé',
  description: 'cycling gravel, and pavé',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen'>
          <div className='sm:max-w-md md:max-w-2xl lg:max-w-3xl lg:px-10 xl:max-w-5xl xl:px-10 2xl:max-w-7xl px-20 max-w-screen-2xl ml-auto mr-auto'>
          <Navbar />
          {children}
          <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
