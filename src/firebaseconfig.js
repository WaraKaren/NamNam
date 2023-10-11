// Importamos las funciones necesarias desde Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc, 
  getDoc,
} from 'firebase/firestore';

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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// export const db = firebase.firestore();
export const saveData = (title, description) => {
  addDoc(collection(db, 'post'), { title, description });
};

export const getData = () => getDocs(collection(db, 'post'));
export const onGetPost = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'post', id));

export const editPost = (id) => getDoc(doc(db, 'post', id));

// export const getData = (functionCallback) => {
//   const consulta = query(collection(db, 'post'));
//   onSnapshot(consulta, functionCallback);
// };
