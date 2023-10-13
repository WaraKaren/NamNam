// import {
//   signInWithRedirect,
//   // getRedirectResult,
//   GoogleAuthProvider,
// } from 'firebase/auth';
// import { auth } from '../firebaseconfig';

// file home.js
// Importamos una función desde otro archivo llamado 'utils.js'
import { signInWithGoogle } from './utils.js';
// Definimos una función llamada 'home' que toma un argumento 'navigateTo'
function home(navigateTo) {
  // Creamos una sección en el DOM y le asignamos una clase CSS
  const section = document.createElement('section');
  section.className = 'containerHome';
  // Creamos un div en el DOM y le asignamos una clase CSS
  const divOne = document.createElement('div');
  divOne.className = 'divOneHome';
  // Creamos una imagen en el DOM, le asignamos una clase CSS y definimos su fuente
  const logoHome = document.createElement('img');
  logoHome.className = 'logoHome';
  logoHome.src = 'imagenes/logo.png';
  // Creamos un encabezado <h2> en el DOM y le asignamos un texto
  const title = document.createElement('h2');
  // const user = getUserName();
  title.textContent = 'Bienvenida a Ñam Ñam';
  title.id = 'userName';
  const titleTwo = document.createElement('h3');
  titleTwo.textContent = 'Únete a nuestra comunidad gastronómica y encuentra inspiración en cada bocado. ¿Listas para comenzar a compartir tus secretos en la cocina?';
  // Creamos un botón en el DOM, le asignamos una clase CSS y un texto
  const bttonLogin = document.createElement('button');
  bttonLogin.className = 'bttonToLogin';
  bttonLogin.textContent = 'Inicia sesión';
  // Creamos una imagen en el DOM, le asignamos una clase CSS, un ID, definimos su fuente y alt
  const buttonGoogle = document.createElement('img');
  buttonGoogle.className = 'buttonGoogle';
  buttonGoogle.id = 'buttonGoogle';
  buttonGoogle.src = 'imagenes/btn_google_signin_light_normal_web@2x.png';
  buttonGoogle.alt = 'imagen botón Google';
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'bttnRegisterHome';
  buttonRegister.textContent = 'Regístrate';

  // Configuramos un evento de clic en el botón "Inicia sesión" para navegar a '/login'
  bttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  // Configuramos un evento de clic en el botón de Google para navegar a '/google'
  // Llamamos a la función 'entrarPrueba' y navegamos a '/welcome' después de una acción asincrónica
  buttonGoogle.addEventListener('click', () => {
    signInWithGoogle(navigateTo);
  });
  // Configuramos un evento de clic en el botón "Regístrate" para navegar a '/register'
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
  // Estructuramos los elementos en una jerarquía y los agregamos al elemento <section>
  section.append(divOne);
  divOne.append(
    logoHome,
    title,
    titleTwo,
    bttonLogin,
    buttonRegister,
    buttonGoogle,
  );
  // Devolvemos el elemento <section> como resultado de la función 'home'
  return section;
}
// Exportamos la función 'home' como el componente de la página de inicio predeterminado
export default home;
