import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBlU0twwWJ7wcOxRAKbCf0x2jLEG4-pfrQ',
  authDomain: 'crypto-tracker-3ba53.firebaseapp.com',
  projectId: 'crypto-tracker-3ba53',
  storageBucket: 'crypto-tracker-3ba53.appspot.com',
  messagingSenderId: '269669977304',
  appId: '1:269669977304:web:c1cff845e644d567a35bad',
  measurementId: 'G-3T2EKZRSRN'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
