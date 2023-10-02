import { exitFn } from './utils.js';
const welcome = (navigateTo) => {
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
  textBienvenida.textContent = 'Tu destino culinario en línea para compartir, descubrir y deleitarte con las mejores recetas caseras. Comparte tus creaciones culinarias en posts deliciosamente detallados, añade fotos tentadoras y califica la dificultad para cocineras de todos los niveles.';
  const buttonHome = document.createElement('button');
  buttonHome.className = 'buttonHomeWelcome';
  buttonHome.textContent = 'Siguiente';
  const buttonExit = document.createElement('button');
  buttonExit.className = 'bttnExitHome';
  buttonExit.textContent = 'Cerrar sesión';
  buttonExit.addEventListener('click', () => {
    exitFn().then(() => {
      navigateTo('/');
    });
  });

  buttonHome.addEventListener('click', () => navigateTo('/'));

  section.append(divOne, divTwo);
  divOne.append(logo, mensajeWelcome, titleWelcome, buttonHome, buttonExit);

  return section;
};
export default welcome;
