import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/landingPage/landingPage'
import UserDash from './components/userDashboard/userDash'
import HeroDash from './components/heroDashboard/heroDash'
import firebase from './firebase';
import { useState } from 'react'
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth'

function App() {
  const [isSignedIn,setIsSignedIn] = useState(false);

  onAuthStateChanged(auth,(user)=>{
     if(user){
       return setIsSignedIn(true);
     }else{
      return setIsSignedIn(false);
     }
  });
  if(isSignedIn){
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={UserDash} />
          <Route path="/user" exact component={UserDash} />
          <Route path="/hero" exact component={HeroDash} />
        </Router>
      </div>
    )
  }else{
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={LandingPage} />
        </Router>
      </div>
    )
  }
 
}

export default App
