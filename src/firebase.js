import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAqs_xUpNHrHOYvIZb3rIPPYQQmwXMj2G4',
  authDomain: 'pokemart-26263.firebaseapp.com',
  projectId: 'pokemart-26263',
  storageBucket: 'pokemart-26263.appspot.com',
  messagingSenderId: '98741840247',
  appId: '1:98741840247:web:b92c0caee47449c3749972',
  measurementId: 'G-ZZ52GJLDMV',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
