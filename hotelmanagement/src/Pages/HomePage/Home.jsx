import React from 'react'
import { TopNavBar } from '../Components/TopNavBar'
import { Header } from '../Components/Header'
import { Featured } from '../Components/featured/Featured'
import { Propertylist } from '../Components/Propertylist/Propertylist'
import "./home.css"
import { FeaturedProperties } from '../Components/featuredProperties/FeaturedProperties'
import { MailLiast } from '../Components/MailList/MailLiast'
import { Footer } from '../Components/footer/Footer'

export const Home = () => {
  return (
    <div>
        <TopNavBar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <h1 className='homeTitle'>Browser By Property Type</h1>
          <Propertylist />
          <h1 className='homeTitle'>Homes Guest Love</h1>
          <FeaturedProperties/>
          <MailLiast/>
          <Footer/>
        </div>
    </div>
  )
}

