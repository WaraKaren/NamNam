const welcome = (navigateTo) => {
  const section = document.createElement('section');
  section.className = 'containerWelcome';
  const divOne = document.createElement('div');
  divOne.className = 'divOneWelcome';
  const logo = document.createElement('img');
  logo.className = 'logoWelcome';
  logo.src = 'imagenes/logo.png';
  const mensajeWelcome = document.createElement('h1');
  mensajeWelcome.className = 'mensajeWelcomw';
  mensajeWelcome.textContent = '¡Usuaria registrada exitosamente!';
  const titleWelcome = document.createElement('h2');
  titleWelcome.textContent = 'Bienvenida a Ñam Ñam';
  titleWelcome.className = 'titleWelcome';
  const divTwo = document.createElement('div');
  divTwo.className = 'divTwoWelcome';
  const buttonHome = document.createElement('button');
  buttonHome.className = 'buttonHomeWelcome';
  buttonHome.textContent = 'Siguiente';

  buttonHome.addEventListener('click', () => navigateTo('/'));

  section.append(divOne, divTwo);
  divOne.append(logo, mensajeWelcome, titleWelcome, buttonHome);

  return section;
};
export default welcome;
