import React from 'react'
import firebase,{auth} from '../../firebase'
import '../styles/heroHeader.css';
function HeroHeader() {
    const signOut=()=>{
        firebase.auth.signOut();
      }
    
    return (
             <div className="hero-navbar">
             <nav>
          <ul>
            <li>
              <a href="#hero-home">Home</a>
            </li>
            <li>
              <a href="#hero-help">Help</a>
            </li>
            <li>
              <a href="#hero-profile">Profile</a>
            </li>
            <li>
              <a href="https://aadhar-verify.herokuapp.com/">Verify</a>
            </li>
            <li>
              <a href="/user" className="swap">
                User
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

export default HeroHeader

