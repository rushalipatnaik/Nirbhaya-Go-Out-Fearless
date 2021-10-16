import React from 'react'
import '../styles/landingPage.css'
import About from './about'
import Feature from './feature'
import Footer from './footer'
import Header from './header'
import Home from './home'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from '@firebase/auth'

function LandingPage() {
  function signIn(e) {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="landingPage">
      <Header signIn={signIn} />
      <Home />
      <About />
      <Feature />
      <Footer />
    </div>
  )
}

export default LandingPage
