// Importamos una función desde ./utils.js
import { exitFn } from './utils.js';
// Definimos una función llamada 'welcome' que toma un argumento 'navigateTo'
const welcome = (navigateTo) => {
  // Creamos una sección en el DOM y le asignamos una clase CSS
  const section = document.createElement('section');
  section.className = 'containerWelcome';
  const divOne = document.createElement('div');
  divOne.className = 'divOneWelcome';
  const logo = document.createElement('img');
  logo.className = 'logoWelcome';
  logo.src = 'imagenes/logo.png';
  const mensajeWelcome = document.createElement('h1');
  mensajeWelcome.className = 'mensajeWelcome';
  mensajeWelcome.textContent = '¡Usuaria registrada exitosamente!';
  const titleWelcome = document.createElement('h2');
  titleWelcome.textContent = 'Bienvenida a Ñam Ñam';
  titleWelcome.className = 'titleWelcome';
  const textBienvenida = document.createElement('p');
  textBienvenida.className = 'textoBienvenida';
  textBienvenida.textContent = 'Tu destino culinario en línea para compartir, descubrir y deleitarte con las mejores recetas caseras. Comparte tus creaciones culinarias en posts deliciosamente detallados y añade la dificultad para cocineras de todos los niveles.';
  const buttonHome = document.createElement('button');
  buttonHome.className = 'buttonHomeWelcome';
  buttonHome.textContent = 'Siguiente';
  const buttonExit = document.createElement('button');
  buttonExit.className = 'bttnExitHome';
  buttonExit.textContent = 'Cerrar sesión';
  // Agregamos un evento de clic al botón 'Cerrar sesión' para salir y navegar a la ruta raíz
  buttonExit.addEventListener('click', () => {
    exitFn().then(() => {
      navigateTo('/');
    });
  });
  // Agregamos un evento de clic al botón 'Siguiente' para navegar a la ruta raíz
  buttonHome.addEventListener('click', () => navigateTo('/'));
// Agrega los elementos al DOM en la estructura deseada
  section.append(divOne);
  divOne.append(
    logo,
    mensajeWelcome,
    titleWelcome,
    textBienvenida,
    buttonHome,
    buttonExit,
  );
  // Devolvemos la sección como resultado de la función 'welcome'
  return section;
};
// Exportamos la función 'welcome' como el componente de bienvenida predeterminado
export default welcome;
