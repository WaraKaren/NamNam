// Este es el punto de entrada de tu aplicacion
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebaseconfig.js';

// import { myFunction } from './lib/index.js';

// import {
//   getRedirectResult,
// } from 'firebase/auth';
import home from './Components/home.js';
import login from './Components/login.js';
import error from './Components/error.js';
import register from './Components/register.js';
import welcome from './Components/welcome.js';

// import { auth } from './firebaseconfig.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/register', component: register },
  { path: '/welcome', component: welcome },
];

const defaultRoute = '/';
const root = document.getElementById('root');

export function navigateTo(hash) {
  // primera carga si vengo de redireccióm
  // const userCred = await getRedirectResult(auth);
  // console.log("usercred", userCred)
  // if (userCred) {
  //   navigateTo('/welcome');
  // }

  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     // const uid = user.uid;
//     navigateTo('/welcome');
//     // ...
//   } else {
//     // User is signed out
//     navigateTo('/');
//   }
// });
