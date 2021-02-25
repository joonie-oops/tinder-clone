// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDtcY-HJJP0mLGYru5qjbolvujfo_8P4EY',
  authDomain: 'tinder-clone-732d6.firebaseapp.com',
  projectId: 'tinder-clone-732d6',
  storageBucket: 'tinder-clone-732d6.appspot.com',
  messagingSenderId: '110991989519',
  appId: '1:110991989519:web:54f2f1e12cd6b21628bc7a',
  measurementId: 'G-E093VV4WMN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
