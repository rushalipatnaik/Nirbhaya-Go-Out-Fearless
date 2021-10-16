import React from 'react'
import Footer from '../landingPage/footer'
import Profile from '../misc/profile'
import HeroHeader from './heroHeader'
import HeroHome from './heroHome'

function HeroDash() {
  return (
    <div>
      <HeroHeader />
      <HeroHome />
      <Profile/>
      <Footer />
    </div>
  )
}

export default HeroDash
