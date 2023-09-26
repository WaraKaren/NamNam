// file login.js
function login(navigateTo) {
  const section = document.createElement('section');
  section.className = 'containerLogin';
  const divOne = document.createElement('div');
  divOne.className = 'divOneLogin';
  const logo = document.createElement('img');
  logo.className = 'logoLogin';
  logo.src = 'imagenes/logo.png';
  const title = document.createElement('h1');
  title.textContent = 'Inicia sesión';
  const divTwo = document.createElement('div');
  divTwo.className = 'divTwoLogin';
  const form = document.createElement('form');
  form.className = 'Form';
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Escribe tu correo electrónico';
  const inputPass = document.createElement('input');
  inputPass.placeholder = 'Escribe tu contraseña';
  const buttonForgotPass = document.createElement('button');
  buttonForgotPass.className = 'buttonForgotPassLogin';
  buttonForgotPass.textContent = '¿Olvidaste tu contraseña?';
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar sesión';
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Regresar';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(divOne, divTwo);
  divOne.append(logo, title);
  divTwo.append(form);
  form.append(inputEmail, inputPass, buttonForgotPass, buttonLogin, buttonReturn);

  return section;
}

export default login;
