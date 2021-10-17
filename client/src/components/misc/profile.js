import React, { useEffect, useState } from 'react'
import './profile.css'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import firebase,{auth} from '../../firebase'
import ky from 'ky'

function Profile() {
  const user = firebase.auth.currentUser;
  const uid = user.uid
  const name = user.displayName
  const photo = user.photoURL
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  useEffect(() => {
    async function getContacts() {
      try {
        const json = await ky
          .get(`${process.env.REACT_APP_BACKEND_URL}/user/${uid}`)
          .json()

        // if (json && json.isVerified) {
        if (json) {
          setInput1(json.contacts[0])
          setInput2(json.contacts[1])
          localStorage.setItem(
            'contacts',
            JSON.stringify([json.contacts[0], json.contacts[1]])
          )
        }
      } catch (err) {
        console.log(err)
      }
    }
    getContacts()
  }, [uid])

  const setContacts = async (e) => {
    e.preventDefault()
    const contacts = [input1, input2]
    try {
      const json = await ky
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/${uid}`)
        .json()
      if (json && json.uid) {
        await ky
          .patch(`${process.env.REACT_APP_BACKEND_URL}/user/${uid}`, {
            json: { contacts },
          })
          .json()
      } else {
        await ky
          .post(`${process.env.REACT_APP_BACKEND_URL}/user`, {
            json: { contacts, uid },
          })
          .json()
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div id="hero-profile" className="about">
      <h1 className="about-title">ABOUT</h1>
      <div className="about-content">
        <div className="name">
          <p> Hi, {name} </p>
          <form>
            <div>
              <FormControl>
                <InputLabel>Contact 1</InputLabel>
                <Input
                  className="input-value"
                  value={input1}
                  onChange={(event) => setInput1(event.target.value)}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel>Contact 2</InputLabel>
                <Input
                  className="input-value"
                  value={input2}
                  onChange={(event) => setInput2(event.target.value)}
                />
              </FormControl>
            </div>
            <Button
              className="submit-btn"
              disabled={!input1 || !input2}
              onClick={setContacts}
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </form>
        </div>

        <div className="photo">
          <img src={photo} alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Profile
