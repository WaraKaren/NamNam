const welcome = (navigateTo) => {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  logo.src = 'imagenes/logo.png';
  section.textContent = '¡Usuaria registrada exitosamente!';
  const titleWelcome = document.createElement('h1');
  titleWelcome.textContent = 'Bienvenida a Ñam Ñam';
  titleWelcome.className = 'titleWelcomeClass';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Siguiente';

  buttonHome.addEventListener('click', () => navigateTo('/'));

  section.append(logo, titleWelcome, buttonHome);
  return section;
};
export default welcome;
