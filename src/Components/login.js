import { signInWithEmail } from './utils';

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
  inputEmail.className = 'inputEmailLogin';
  inputEmail.id = 'inputEmailLogin';
  inputEmail.placeholder = 'Escribe tu correo electrónico';
  inputEmail.type = 'email';
  const inputPass = document.createElement('input');
  inputPass.className = 'inputPassLogin';
  inputPass.id = 'inputPassLogin';
  inputPass.placeholder = 'Escribe tu contraseña';
  inputPass.type = 'password';
  const buttonForgotPass = document.createElement('button');
  buttonForgotPass.className = 'bttnForgotPassLogin';
  buttonForgotPass.textContent = '¿Olvidaste tu contraseña?';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'bttnLogin';
  buttonLogin.textContent = 'Iniciar sesión';
  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'bttnReturnLogin';
  buttonReturn.textContent = 'Regresar';

  buttonLogin.addEventListener('click', form.submit());

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto de refrescar la página
    // console.log(e.target);
    const email = e.target.inputEmailLogin.value;
    const password = e.target.inputPassLogin.value;
    signInWithEmail(email, password, navigateTo);
  });

  section.append(divOne, divTwo);
  divOne.append(logo, title);
  divTwo.append(form);
  form.append(inputEmail, inputPass, buttonForgotPass, buttonLogin, buttonReturn);

  return section;
}

export default login;
/* const inputPass = document.createElement('input');
inputPass.className = 'inputPassLogin';
inputPass.placeholder = 'Escribe tu contraseña';
inputPass.type = 'password'; // Establece el tipo de entrada como contraseña */

// Ahora, puedes agregar este elemento input a tu documento, por ejemplo, a un formulario
// Ejemplo: document.getElementById('miFormulario').appendChild(inputPass);
