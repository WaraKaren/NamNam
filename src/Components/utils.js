// eslint-disable-next-line max-len
// Importar las funciones y objetos necesarios de Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  // getRedirectResult,
} from 'firebase/auth';
// Importar el objeto 'auth' desde un archivo 'firebaseconfig'
import { auth } from '../firebaseconfig';
// Función para registrar un usuario con correo y contraseña
export const createUserWithEmail = (email, password, navigateTo) => new Promise(() => {

  // Llamar a la función createUserWithEmailAndPassword con el objeto 'auth', email y contraseña
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registro exitoso, mostrar mensaje en la consola y redirigir al usuario
      window.console.log('USERCredential', userCredential);
      localStorage.setItem('user', true);

      // const user = userCredential.user;
      // console.log('USER', user)
      navigateTo('/welcome');
    })
    .catch((error) => {
      // Si ocurre un error, mostrar un mensaje de error al usuario en un modal emergente
      const sectionModal = document.createElement('section');
      sectionModal.id = 'sectionModal';
      const modal = document.createElement('dialog');
      modal.className = 'modal';
      const botonModal = document.createElement('button');
      botonModal.id = 'botonModal';
      botonModal.textContent = 'X';

      // Obtener el código y mensaje de error
      // const errorCode = error.code;
      // => 1XX = Informativo
      // 2XX = exitosa
      // 3XX = exitosa pero redirect
      // 4XX = error de cliente
      // 5XX = error del servidor
      const errorMessage = error.message;
      window.console.log(errorMessage);
      // Usar un switch para determinar el mensaje de error apropiado que aparece en la consola
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
        case 'Firebase: Error (auth/wrong-password).':
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
          // Si el error no coincide con ninguno de los casos anteriores, mostrar el código de error
          modal.innerHTML = 'Error al registrarse';
      }
      // modalError.styled = 'block';
      // modaleError.
      // Agregar el botón para cerrar el modal
      modal.appendChild(botonModal);
      sectionModal.appendChild(modal);
      botonModal.addEventListener('click', () => {
        modal.close();
      });
      // Agregar el modal al cuerpo del documento y mostrarlo
      document.body.appendChild(sectionModal);
      modal.showModal();
    });
});
// Función para iniciar sesión con correo y contraseña
export const signInWithEmail = (email, password, navigateTo) => new Promise(() => {
  // Llamar a la función signInWithEmailAndPassword con el objeto 'auth', email y contraseña
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Inicio de sesión exitoso, mostrar mensaje en la consola y redirigir al usuario
      window.console.log('USERCredential', userCredential);
      navigateTo('/feed');
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
      // const errorCode = error.code;
      const errorMessage = error.message;
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
        case 'Firebase: Error (auth/wrong-password).':
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
          modal.innerHTML = 'Error al iniciar sesión';
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

// Función para iniciar sesión con Google utilizando Firebase
export const entrarPrueba = (navigateTo) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((res) => {
    window.console.log(res);
    localStorage.setItem('user', true);
    navigateTo('/feed');
    // localStorage.setItem(key = con que nombre lo voy a guardar, value = que voy a guardar)
    // localStorage.getItem(key = que quiero traer)
    // localStorage.clear()
  }).catch((err) => {
    window.console.log(err.message);
    navigateTo('/register');
  });
};

// Función para cerrar la sesión del usuario
export const exitFn = () => signOut(auth);
