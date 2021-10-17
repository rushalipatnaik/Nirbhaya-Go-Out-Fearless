import React, { useEffect, useState } from 'react'
import Footer from '../landingPage/footer'
import Profile from '../misc/profile'
import HeroHeader from './heroHeader'
import HeroHome from './heroHome'
import HeroHelp from './helpHero'
import { collection, getDocs } from '@firebase/firestore'
import firebase from '../../firebase'

function HeroDash() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(firebase.db, 'users'))
      let arr = []
      querySnapshot.forEach((doc) => {
        arr.push(doc.data())
      })
      setData(arr)
    }
    getData()
  }, [])
  return (
    <div>
      <HeroHeader />
      <HeroHome />
      <HeroHelp data={data} />
      {/* <Profile/> */}
      <Footer />
    </div>
  )
}

export default HeroDash
