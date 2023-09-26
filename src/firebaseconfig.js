/* eslint-disable no-console */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // onAuthStateChanged,
} from 'firebase/auth';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBoksBP2QG9EJ8irLNvEFyYmGjRi142OSE',
  authDomain: 'social-network-namnam.firebaseapp.com',
  projectId: 'social-network-namnam',
  storageBucket: 'social-network-namnam.appspot.com',
  messagingSenderId: '307339733356',
  appId: '1:307339733356:web:e06952230f8be8399d2b49',
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// eslint-disable-next-line max-len

export const createUserWithEmail = (email, password) => new Promise((resolve, reject) => {
  // Ejecutor (el código productor, "cantante")
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { // => respuesta positiva
      console.log('USERCredential', userCredential);
      const user = userCredential.user;
      // console.log('USER', user);
      resolve('Registro exitoso');
    })
    .catch((error) => { // => respuesta negativa
      const errorCode = error.code;
      // => 1XX = Informativo
      // 2XX = exitosa
      // 3XX = exitosa pero redirect
      // 4XX = error de cliente
      // 5XX = error del servidor
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // nos muestra el error que tiene el usuario en la consola
      reject(errorMessage);
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          alert('Este correo ya está en uso');
          break;
        case 'Firebase: Error (auth/passwords-not-match).':
          alert('The passwords don\'t match');
          break;
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
          alert('La contraseña debe contener mínimo 6 caracteres');
          break;
        case 'Firebase: Error (auth/invalid-email).':
          alert('Correo inválido');
          break;
        case 'Firebase: Error (auth/user-not-found).':
          alert('User not found');
          break;
        case 'Firebase: error (auth/wrong-password).':
          alert('Wrong password');
          break;
        case 'Firebase: Error (auth/too-many-requests).':
          alert('Too many requests. Try again later');
          break;
        case 'Firebase: Error (auth/cancelled-popup-request)':
          alert('The request was canceld');
          break;
        // case 'Firebase: Error (auth/popup-blocked).':
        //   alert('the popup was blocked');
        //   break;
        default:
          // console.log('default');
      }
      // modalError.styled = 'block';
      // modaleError.
    });
});

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...navigateTo('/')
//   }
// });
