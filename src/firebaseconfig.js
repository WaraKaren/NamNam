// Importamos las funciones necesarias desde Firebase para Firestore y Autenticación
import { initializeApp } from 'firebase/app';
// Importamos las funciones necesarias desde Firebase
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  // setDoc,
  // query,
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
// Configuración de Firebase
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
/// Obtener la instancia de autenticación de Firebase
export const auth = getAuth(app);

/// Obtener la instancia de Firestore de Firebase
export const db = getFirestore(app);
// export const db = firebase.firestore();

// Función para guardar datos en la colección 'post'
export const saveData = (title, description) => {
  addDoc(collection(db, 'post'), { title, description });
};

// Función para obtener datos de la colección 'post'
export const getData = () => getDocs(collection(db, 'post'));
// Función para observar cambios en la colección 'post' y llamar a un callback
export const onGetPost = (callback) => onSnapshot(collection(db, 'post'), callback);
// Función para eliminar un documento en la colección 'post' por su ID
export const deletePost = (id) => deleteDoc(doc(db, 'post', id));
// Función para obtener un documento en la colección 'post' por su ID
export const editPost = (id) => getDoc(doc(db, 'post', id));

// export const getData = (functionCallback) => {
//   const consulta = query(collection(db, 'post'));
//   onSnapshot(consulta, functionCallback);
// };
