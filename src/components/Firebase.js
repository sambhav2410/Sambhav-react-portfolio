import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAHFgERM9pBPPddzIXut67rudnA2oOT0UA',
  authDomain: 'portfolio-contactform-118a0.firebaseapp.com',
  projectId: 'portfolio-contactform-118a0',
  storageBucket: 'portfolio-contactform-118a0.appspot.com',
  messagingSenderId: '549150496903',
  appId: '1:549150496903:web:1c7dbef473eca7fd008022',
  measurementId: 'G-B6YM3PFX0P',
});

const db = firebaseApp.firestore();

export { db };
