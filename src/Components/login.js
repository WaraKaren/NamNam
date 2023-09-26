// file login.js
function login(navigateTo) {
  const section = document.createElement('section');
  const logoLogin = document.createElement('img');
  logoLogin.src = 'imagenes/logo.png';
  const title = document.createElement('h2');
  const form = document.createElement('form');
  form.className = 'Form';
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonForgotPass = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const buttonReturn = document.createElement('button');

  inputEmail.placeholder = 'Escribe tu correo electrónico';
  inputPass.placeholder = 'Escribe tu contraseña';

  buttonForgotPass.textContent = '¿Olvidaste tu contraseña?';

  title.textContent = 'Inicia sesión';
  buttonLogin.textContent = 'Iniciar sesión';

  buttonReturn.textContent = 'Regresar';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(logoLogin, title, form, inputEmail, inputPass, buttonLogin, buttonReturn);

  return section;
}

export default login;
