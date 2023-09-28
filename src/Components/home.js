// file home.js
function home(navigateTo) {
  const section = document.createElement('section');
  section.className = 'containerHome';
  const divOne = document.createElement('div');
  divOne.className = 'divOneHome';
  const logoHome = document.createElement('img');
  logoHome.className = 'logoHome';
  logoHome.src = 'imagenes/logo.png';
  const title = document.createElement('h2');
  title.textContent = 'Bienvenida a Ñam Ñam';
  const titleTwo = document.createElement('h3');
  titleTwo.textContent = 'Tu destino culinario en línea para compartir, descubrir y deleitarte con las mejores recetas caseras. Comparte tus creaciones culinarias en posts deliciosamente detallados, añade fotos tentadoras y califica la dificultad para cocineras de todos los niveles. Únete a nuestra comunidad gastronómica y encuentra inspiración en cada bocado. ¿Listas para comenzar a compartir tus secretos en la cocina?';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'bttnLoginHome';
  buttonLogin.textContent = 'Inicia sesión';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'bttnGoogleHome';
  buttonGoogle.textContent = 'Inicia sesión con Google';
  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'bttnRegisterHome';
  buttonRegister.textContent = 'Regístrate';

  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  /*  buttonGoogle.addEventListener('click', () => {
    navigateTo('/google');
  }); */

  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  section.append(divOne);
  divOne.append(logoHome, title, titleTwo, buttonLogin, buttonGoogle, buttonRegister);
  return section;
}

export default home;
