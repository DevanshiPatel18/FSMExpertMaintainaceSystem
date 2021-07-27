import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
const app = firebase.initializeApp({
  apiKey: "AIzaSyC-fNoghuFyJ0ggauqIlB-eqW-05pV7RIk",
  authDomain: "expert-maintenance-system.firebaseapp.com",
  databaseURL: "https://expert-maintenance-system-default-rtdb.firebaseio.com",
  projectId: "expert-maintenance-system",
  storageBucket: "expert-maintenance-system.appspot.com",
  messagingSenderId: "655330542358",
  appId: "1:655330542358:web:65b34aa94faa64e6a68637"
})



export const auth = app.auth()
export default app;
/*
import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
const app = firebase.initializeApp({
  apiKey: "AIzaSyAuUHIhpFNEzqp-e3pOPq901ImasERTNdw",
  authDomain: "fsmdashboardtest.firebaseapp.com",
  databaseURL: "https://fsmdashboardtest.firebaseio.com",
  projectId: "fsmdashboardtest",
  storageBucket: "fsmdashboardtest.appspot.com",
  messagingSenderId: "686384032480",
  appId: "1:686384032480:web:ee283b18254f5cc5defe85",
  measurementId: "G-M5ML7BED0Q"
})
export const auth = app.auth()

export default firebase;
// export { FirebaseContext };
*/