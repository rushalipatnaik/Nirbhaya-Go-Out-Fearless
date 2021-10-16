import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCnNQqXvgPzva1k1ZPhpduY-LnYz1gpjzk',
  authDomain: 'nirbhaya-bd7b3.firebaseapp.com',
  projectId: 'nirbhaya-bd7b3',
  storageBucket: 'nirbhaya-bd7b3.appspot.com',
  messagingSenderId: '256692292420',
  appId: '1:256692292420:web:4d12f6249de3f5775a6511',
  measurementId: 'G-HL418CR55Y',
}

const app = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider()

export const auth = getAuth()

export default {
  auth,
  app,
}
