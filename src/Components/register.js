import { createUserWithEmail } from './utils';

const register = (navigateTo) => {
  const section = document.createElement('section');
  section.className = 'containerRegister';
  const divOne = document.createElement('div');
  divOne.className = 'divOneRegister';
  const logo = document.createElement('img');
  logo.className = 'logoRegister';
  logo.src = 'imagenes/logo.png';
  const title = document.createElement('h1');
  title.textContent = 'Crea tu cuenta';
  title.className = 'titleRegister';
  const divTwo = document.createElement('div');
  divTwo.className = 'divTwoRegister';
  const form = document.createElement('form');
  form.className = 'FormRegister';
  form.setAttribute('data-algo', 'algo');
  const inputEmailRegister = document.createElement('input');
  inputEmailRegister.placeholder = 'Escribe tu correo electrónico';
  inputEmailRegister.className = 'emailRegister';
  inputEmailRegister.id = 'emailRegister';
  inputEmailRegister.type = 'email';
  const inputPassRegister = document.createElement('input');
  inputPassRegister.placeholder = 'Escribe tu contraseña';
  inputPassRegister.className = 'passwordRegister';
  inputPassRegister.id = 'passwordRegister';
  inputPassRegister.type = 'password';
  const textPassword = document.createElement('p');
  textPassword.textContent = 'Debe contener mínimo 6 caracteres';
  textPassword.className = 'textPasswordRegister';
  // const inputConfirmPassRegister = document.createElement('input');
  // inputConfirmPassRegister.placeholder = 'Confirma tu contraseña';
  const buttonWelcome = document.createElement('button');
  buttonWelcome.className = 'btonRegister';
  buttonWelcome.textContent = 'Registrar';
  const buttonSubmitRegister = document.createElement('button');
  buttonSubmitRegister.className = 'btonRegresar';
  buttonSubmitRegister.textContent = 'Volver';

  buttonWelcome.addEventListener('click', form.submit());

  buttonSubmitRegister.addEventListener('click', () => {
    navigateTo('/');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto de refrescar la página
    // console.log(e.target);
    const email = e.target.emailRegister.value;
    const password = e.target.passwordRegister.value;
    // console.log(email, password); // nos muestra el email y clave digitado
    createUserWithEmail(email, password, navigateTo);
  });

  section.append(divOne, divTwo);
  divOne.append(logo, title);
  divTwo.append(form);
  form.append(
    inputEmailRegister,
    inputPassRegister,
    textPassword,
    // inputConfirmPassRegister,
    buttonWelcome,
    buttonSubmitRegister,
  );

  return section;
};

export default register;
