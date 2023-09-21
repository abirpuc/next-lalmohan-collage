
import TopNav from './component/shared/TopNav/TopNav'
import TopBanner from './component/shared/topBanner/TopBanner'
import './globals.css'
import { Inter } from 'next/font/google'

import Image from 'next/image'
import { getData } from './api/getData'
import bg from '../../public/background-img.png'
import LatestNotice from './(home)/componets/LatestNotice'
import NaVBar from './component/shared/Navbar/NaVBar'
import Footer from './component/shared/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lalmohan collage',
  description: 'lalmohan collage web site',
}

export default async function RootLayout({ children }) {
  const data = await getData()
const backgroundData = JSON.parse(data.web_presets)
const backgroundImage = backgroundData.background_img;
  return (
    <html lang="en">
      <body className="" style={{backgroundImage:`url(${bg.src})`}}>
        <div>
         <TopNav/>
         <TopBanner/>
         <LatestNotice/>
         <NaVBar/>
        </div>
        <main>
        {children}
        </main>
       <Footer/>
      </body>
    </html>
  )
}
