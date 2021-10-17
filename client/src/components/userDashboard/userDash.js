import React, { useState } from 'react'
import '../styles/userDash.css'
import GoogleMapReact from 'google-map-react'
import ky from 'ky'
import Footer from '../landingPage/footer'
import UserHeader from './userHeader'
import '../styles/userDash.css'
import Profile from '../misc/profile'
import firebase from '../../firebase'
import { collection, addDoc } from '@firebase/firestore'

const AnyReactComponent = () => (
  <div>
    <img src="./marker.png" alt="" width={50} height={50} />
  </div>
)

function UserDash() {
  const [myLoc, setMyLoc] = useState()
  const [message, setMessage] = useState('')
  const user = firebase.auth.currentUser
  const name = user.displayName
  const db = firebase.db

  async function sendMessage() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    await ky
      .post(`${process.env.REACT_APP_BACKEND_URL}/sendMessage`, {
        json: { message, contacts },
      })
      .json()

    try {
      await addDoc(collection(db, 'users'), {
        myLoc,
        name,
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
  function initMap(position) {
    const loc = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
    setMyLoc(loc)
    setMessage(
      `NIRBHAYA-FEARLESS-PVT-LTD
       YOUR FRIEND ${name} SAYS,
       Please Help Me, I am at location: https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`
    )
  }
  function errorHandler(err) {
    if (err.code === 1) {
      alert('Error: Access is denied!')
    } else if (err.code === 2) {
      alert('Error: Position is unavailable!')
    }
  }
  if (navigator.geolocation) {
    const options = { timeout: 60000 }
    navigator.geolocation.getCurrentPosition(initMap, errorHandler, options)
  } else {
    alert('Sorry, browser does not support geolocation!')
  }
  return (
    <div className="user-dash">
      <UserHeader />
      <div id="user-home" className="user-home">
        <button className="need-help-btn" onClick={sendMessage}>
          Need Help!!!
        </button>
      </div>
      <div
        id="user-map"
        className="user-map"
        style={{ height: '100vh', width: '100%' }}
      >
        {' '}
        {myLoc && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDSU-8MXJ558cQrTjG1xwkBsTqV2dyXOs8',
            }}
            defaultCenter={myLoc}
            defaultZoom={18}
          >
            <AnyReactComponent
              lat={myLoc.lat}
              lng={myLoc.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        )}
      </div>
      <Profile />
      <Footer />
    </div>
  )
}

export default UserDash
