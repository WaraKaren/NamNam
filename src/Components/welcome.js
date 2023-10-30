// Importamos una función desde ./utils.js
// import { exitFn } from './utils.js';
import logoR from '../imagenes/logo.png';
//importaciond e img para vite

// Definimos una función llamada 'welcome' que toma un argumento 'navigateTo'
const welcome = (navigateTo) => {
  if (!localStorage.getItem('user')) {
    const modal = document.createElement('dialog');
    modal.className = 'modalLocalStorage';
    modal.textContent = 'Usuaria no registrada';
    document.body.appendChild(modal);
    modal.showModal();
    setTimeout(() => {
      modal.close();
    }, '2500');
    // modal.close();
    return navigateTo('/');
  }
  // Creamos una sección en el DOM y le asignamos una clase CSS
  const section = document.createElement('section');
  section.className = 'containerWelcome';
  const divOne = document.createElement('div');
  divOne.className = 'divOneWelcome';
  const logo = document.createElement('img');
  logo.className = 'logoWelcome';
  logo.src = logoR;
  const welcomeMessage = document.createElement('h1');
  welcomeMessage.className = 'welcomeMessage';
  welcomeMessage.textContent = '¡Usuaria registrada exitosamente!';
  const titleWelcome = document.createElement('h2');
  titleWelcome.textContent = 'Bienvenida a Ñam Ñam';
  titleWelcome.className = 'titleWelcome';
  const textWelcome = document.createElement('p');
  textWelcome.className = 'textoBienvenida';
  textWelcome.textContent = 'Tu destino culinario en línea para compartir, descubrir y deleitarte con las mejores recetas caseras. Comparte tus creaciones culinarias en posts deliciosamente detallados y añade la dificultad para cocineras de todos los niveles.';
  const buttonToFeed = document.createElement('button');
  buttonToFeed.className = 'buttonToFeed';
  buttonToFeed.textContent = 'Siguiente';
  // const buttonExit = document.createElement('button');
  // buttonExit.className = 'bttnExitHome';
  // buttonExit.textContent = 'Cerrar sesión';
  // // Agregamos un evento de clic al botón 'Cerrar sesión' para salir y navegar a la ruta raíz
  // buttonExit.addEventListener('click', () => {
  //   exitFn().then(() => {
  //     navigateTo('/');
  //   });
  // });
  // Agregamos un evento de clic al botón 'Siguiente' para navegar a la ruta raíz
  buttonToFeed.addEventListener('click', () => navigateTo('/feed'));
  // Agrega los elementos al DOM en la estructura deseada
  section.appendChild(divOne);
  divOne.append(
    logo,
    welcomeMessage,
    titleWelcome,
    textWelcome,
    buttonToFeed,
  );
  // Devolvemos la sección como resultado de la función 'welcome'
  return section;
};
// Exportamos la función 'welcome' como el componente de bienvenida predeterminado
export default welcome;
