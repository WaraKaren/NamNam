// Importamos los componentes y configuraciones necesarios
import home from './Components/home.js';
import login from './Components/login.js';
import error from './Components/error.js';
import register from './Components/register.js';
import welcome from './Components/welcome.js';
import feed from './Components/feed.js';

// Definimos las rutas de la aplicación junto con los componentes asociados
const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/register', component: register },
  { path: '/welcome', component: welcome },
  { path: '/feed', component: feed },
];
// Define la ruta predeterminada y obtén el elemento 'root' del documento HTML.
const defaultRoute = '/';
const root = document.getElementById('root');

// Función para navegar a una ruta específica
export function navigateTo(hash) {
// Busca la ruta correspondiente en el arreglo 'routes'.
  const route = routes.find((routeFound) => routeFound.path === hash);
  // Si la ruta existe y tiene un componente asociado.
  if (route && route.component) {
    // Cambiamos la URL en el navegador sin recargar la página
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    // Si ya hay un elemento en 'root', quítalo.
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    // Renderizamos el componente de la ruta seleccionada en el "root"
    root.appendChild(route.component(navigateTo));
  } else {
    // Si la ruta no se encuentra, redirigimos a la página de error
    navigateTo('/error');
  }
}
// Manejador de eventos para cuando se presiona el botón de retroceso en el navegador
window.onpopstate = () => {
  // Navegamos a la ruta correspondiente
  navigateTo(window.location.pathname);
};
// Navegamos a la ruta actual o la ruta predeterminada al cargar la página
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
