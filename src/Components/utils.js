// eslint-disable-next-line max-len
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  // getRedirectResult,
} from 'firebase/auth';
import { auth } from '../firebaseconfig';

export const createUserWithEmail = (email, password, navigateTo) => new Promise(() => {
  // Ejecutor (el código productor, "cantante")
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // => respuesta positiva
      window.console.log('USERCredential', userCredential);
      // const user = userCredential.user;
      // console.log('USER', user);
      navigateTo('/welcome');
    })
    .catch((error) => {
      const sectionModal = document.createElement('section');
      sectionModal.id = 'sectionModal';
      const modal = document.createElement('dialog');
      modal.className = 'modal';
      const botonModal = document.createElement('button');
      botonModal.id = 'botonModal';
      botonModal.textContent = 'X';

      // => respuesta negativa
      const errorCode = error.code;
      // => 1XX = Informativo
      // 2XX = exitosa
      // 3XX = exitosa pero redirect
      // 4XX = error de cliente
      // 5XX = error del servidor
      const errorMessage = error.message;
      window.console.log(errorCode, errorMessage);
      // nos muestra el error que tiene el usuario en la consola
      switch (errorMessage) {
        case 'Firebase: Error (auth/email-already-in-use).':
          modal.innerHTML = 'Este correo ya está en uso';
          break;
        case 'Firebase: Error (auth/passwords-not-match).':
          modal.innerHTML = 'Las contraseñas no coinciden';
          break;
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
          modal.innerHTML = 'La contraseña debe contener mínimo 6 caracteres';
          break;
        case 'Firebase: Error (auth/invalid-email).':
          modal.innerHTML = 'Correo inválido';
          break;
        case 'Firebase: Error (auth/user-not-found).':
          modal.innerHTML = 'Usuaria(o) no encontrada(o)';
          break;
        case 'Firebase: error (auth/wrong-password).':
          modal.innerHTML = 'Contraseña incorrecta';
          break;
        case 'Firebase: Error (auth/too-many-requests).':
          modal.innerHTML = 'Demasiadas solicitudes. Inténtalo más tarde';
          break;
        case 'Firebase: Error (auth/cancelled-popup-request)':
          modal.innerHTML = 'La petición fue cancelada';
          break;
          // case 'Firebase: Error (auth/popup-blocked).':
          //   alert('the popup was blocked');
          //   break;
        default:
          modal.innerHTML = errorCode;
      }
      // modalError.styled = 'block';
      // modaleError.
      modal.appendChild(botonModal);
      sectionModal.appendChild(modal);
      botonModal.addEventListener('click', () => {
        modal.close();
      });

      document.body.appendChild(sectionModal);
      modal.showModal();
    });
});

export const signInWithEmail = (email, password, navigateTo) => new Promise(() => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.console.log('USERCredential', userCredential);
      navigateTo('/welcome');
      // const user = userCredential.user;
    })
    .catch((error) => {
      const sectionModal = document.createElement('section');
      sectionModal.id = 'sectionModal';
      const modal = document.createElement('dialog');
      modal.className = 'modal';
      const botonModal = document.createElement('button');
      botonModal.id = 'botonModal';
      botonModal.textContent = 'X';
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'Firebase: Error (auth/invalid-email).':
          modal.innerHTML = 'Correo inválido';
          break;
        case 'Firebase: Error (auth/user-not-found).':
          modal.innerHTML = 'Usuaria(o) no encontrada(o)';
          break;
        case 'Firebase: error (auth/wrong-password).':
          modal.innerHTML = 'Contraseña incorrecta';
          break;
        case 'Firebase: Error (auth/too-many-requests).':
          modal.innerHTML = 'Demasiadas solicitudes. Inténtalo más tarde';
          break;
        case 'Firebase: Error (auth/cancelled-popup-request)':
          modal.innerHTML = 'La petición fue cancelada';
          break;
        default:
          modal.innerHTML = errorCode;
      }
      modal.appendChild(botonModal);
      sectionModal.appendChild(modal);
      botonModal.addEventListener('click', () => {
        modal.close();
      });

      document.body.appendChild(sectionModal);
      modal.showModal();
    });
});

export const entrarPrueba = () => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

export const exitFn = () => signOut(auth);
