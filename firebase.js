import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBW9zssZOBZvJlTpNmdLUjlfcjTAWIMdsM',
  authDomain: 'rn-todo-prac-7cf77.firebaseapp.com',
  projectId: 'rn-todo-prac-7cf77',
  storageBucket: 'rn-todo-prac-7cf77.appspot.com',
  messagingSenderId: '47160925799',
  appId: '1:47160925799:web:9f4e6b25d0b57d38433ec2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
