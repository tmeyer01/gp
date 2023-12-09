import './globals.css'
import { Inter } from 'next/font/google'
import { Alex_Brush, Anton, Montserrat } from 'next/font/google'

// import Footer from '@/app/components/footer/Footer'
// import Navbar from '@/app/components/navbar/Navbar'

// context provider
import NavContextProvider from '@/app/context/NavContext';
import Header from '@/app/components/sections/Header/Header';

const alexBrush = Alex_Brush({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alexBrush'
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton'
})

export const metadata = {
  title: 'Gravel and Pavé',
  description: 'cycling gravel, and pavé',
}

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>

    <html lang="en">
      <body className={`${alexBrush.variable} ${montserrat.variable} ${anton.variable} overflow-x-hidden relative `}>
        <div className='min-h-screen'>
          <div className='flex justify-center'>
            <Header />
              <div className='sm:max-w-md md:max-w-2xl lg:max-w-3xl  xl:max-w-5xl  2xl:max-w-7xl max-w-screen-2xl w-full bg-lime-500  lg:px-10 xl:px-10 ml-auto mr-auto '>
                {children}
              </div>
          </div>
        </div>
      </body>
    </html>
    </NavContextProvider>
  )
}
