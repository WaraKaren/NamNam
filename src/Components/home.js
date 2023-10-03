// import {
//   signInWithRedirect,
//   // getRedirectResult,
//   GoogleAuthProvider,
// } from 'firebase/auth';
// import { auth } from '../firebaseconfig';

// file home.js
import { entrarPrueba } from './utils.js';

function home(navigateTo) {
  const section = document.createElement('section');
  section.className = 'containerHome';
  const divOne = document.createElement('div');
  divOne.className = 'divOneHome';
  const logoHome = document.createElement('img');
  logoHome.className = 'logoHome';
  logoHome.src = 'imagenes/logo.png';
  const title = document.createElement('h2');
  // const user = getUserName();
  title.textContent = 'Bienvenida a Ñam Ñam';
  title.id = 'userName';
  const titleTwo = document.createElement('h3');
  titleTwo.textContent = 'Únete a nuestra comunidad gastronómica y encuentra inspiración en cada bocado. ¿Listas para comenzar a compartir tus secretos en la cocina?';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'bttnLoginHome';
  buttonLogin.textContent = 'Inicia sesión';
  const buttonGoogle = document.createElement('img');
  buttonGoogle.className = 'buttonGoogle';
  buttonGoogle.id = 'buttonGoogle';
  buttonGoogle.src = 'imagenes/btn_google_signin_light_normal_web@2x.png';
  buttonGoogle.alt = 'imagen botón Google';
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'bttnRegisterHome';
  buttonRegister.textContent = 'Regístrate';

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonGoogle.addEventListener('click', () => {
    navigateTo('/google');
    entrarPrueba().then((res) => {
      window.console.log(res);
      navigateTo('/welcome');
    }).catch((err) => { window.console.log(err.message); });
    navigateTo('/welcome');
  });

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  section.append(divOne);
  divOne.append(logoHome, title, titleTwo, buttonLogin, buttonRegister, buttonGoogle);
  return section;
}

export default home;
