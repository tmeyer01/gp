
import CardList from '@/app/components/cardList/CardList'
import CatergoryList from '@/app/components/catergoryList/CatergoryList'
import Featured from '@/app/components/featured/Featured'
import Menu from '@/app/components/menu/Menu'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (

    <div>
    <Featured/>
    <CatergoryList/>
      <div>
      <CardList/>
      <Menu/>
      </div>
    </div>
  )
}
