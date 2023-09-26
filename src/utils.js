// eslint-disable-next-line max-len
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseconfig';

export const createUserWithEmail = (email, password, navigateTo) => new Promise(() => {
// Ejecutor (el código productor, "cantante")
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { // => respuesta positiva
      window.console.log('USERCredential', userCredential);
      // const user = userCredential.user;
      // console.log('USER', user);
      navigateTo('/welcome');
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
          console.log('default');
      }
    // modalError.styled = 'block';
    // modaleError.
    });
});
