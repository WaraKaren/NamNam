// file home.js
function home(navigateTo) {
  const section = document.createElement('section');
  const logoHome = document.createElement('img');
  logoHome.className = 'logoHome';
  logoHome.src = 'imagenes/logo.png';
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Iniciar sesión';
  buttonGoogle.textContent = 'Iniciar sesión con Google';
  buttonRegister.textContent = 'Registrarse';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  title.textContent = '¡Bienvenida a Ñam Ñam!';

  section.append(logoHome, title, buttonLogin, buttonGoogle, buttonRegister);
  return section;
}

export default home;
