/* eslint-disable max-len */
/* eslint-disable no-console */
// Importamos las funciones necesarias desde Firebase
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // GoogleAuthProvider,
  // signInWithRedirect,
  // getRedirectResult,
  // onAuthStateChanged,
} from 'firebase/auth';
// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBoksBP2QG9EJ8irLNvEFyYmGjRi142OSE',
  authDomain: 'social-network-namnam.firebaseapp.com',
  projectId: 'social-network-namnam',
  storageBucket: 'social-network-namnam.appspot.com',
  messagingSenderId: '307339733356',
  appId: '1:307339733356:web:e06952230f8be8399d2b49',
};
// Inicializamos la aplicación Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
