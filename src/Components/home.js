// import {
//   signInWithRedirect,
//   // getRedirectResult,
//   GoogleAuthProvider,
// } from 'firebase/auth';
// import { auth } from '../firebaseconfig';

// file home.js

// const getUserName = () => {
//   const username = (auth?.currentUser?.displayName) || "";
//   return `Bienvenida ${username}`;
// };
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
  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'buttonGoogle';
  buttonGoogle.id = 'buttonGoogle';
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'bttnRegisterHome';
  buttonRegister.textContent = 'Regístrate';

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  // buttonGoogle.addEventListener('click', async (e) => {
  //   e.preventDefault();
  // Before
  // ==============

  // signInWithRedirect(auth, provider)
  //   .then(() => {
  //     getRedirectResult(auth)
  //       .then((result) => { console.log(result.user); });
  //   });
  // entrarPrueba().then((res) => {
  //   debugger

  //   console.log(res);
  //   navigateTo('/welcome');
  // }).catch((err) => { console.log(err.message); });
  // navigateTo('/welcome')

  // try {
  //   debugger;
  //   const provider = new GoogleAuthProvider();
  //   console.log(await getUserName())
  //   await signInWithRedirect(auth, provider);

  // } catch (error) {
  //     console.log("error", error)
  //     navigateTo('/error');

  // }
  // });

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  section.append(divOne);
  divOne.append(logoHome, title, titleTwo, buttonLogin, buttonRegister, buttonGoogle);
  return section;
}

export default home;
