import React from 'react'
import firebase,{auth} from '../../firebase'
import '../styles/userHeader.css';
function UserHeader() {
    const signOut=()=>{
        firebase.auth.signOut();
      }
    
    return (
             <div className="user-navbar">
             <nav>
          <ul>
            <li>
              <a href="#user-home">Home</a>
            </li>
            <li>
              <a href="#user-map">Map</a>
            </li>
            <li>
              <a href="#user-profile">Profile</a>
            </li>
            <li>
              <a href="https://aadhar-verify.herokuapp.com/">Verify</a>
            </li>
            <li>
              <a href="/hero" className="swap">
                Hero
              </a>
            </li>
            <li>
            <a href="/" className="swap" onClick={signOut}>Signout</a>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default UserHeader
