import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCkDCqGlkeukNDH14uRt5bPnC3nUxL0bZk',
  authDomain: 'there-are-323ae.firebaseapp.com',
  projectId: 'there-are-323ae',
  storageBucket: 'there-are-323ae.appspot.com',
  messagingSenderId: '337725371789',
  appId: '1:337725371789:web:8460c7eaa0e6b6e343f9c4',
};

const app = initializeApp(firebaseConfig);
const authService = getAuth(app);
const db = getFirestore(app);

export { app, authService, db };
