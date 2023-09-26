import { createUserWithEmail } from './utils';

const register = (navigateTo) => {
  const section = document.createElement('section');
  const logoRegister = document.createElement('img');
  logoRegister.className = 'logoClass';
  logoRegister.src = 'imagenes/logo.png';
  section.textContent = 'Crea tu cuenta';
  const form = document.createElement('form');
  form.className = 'FormRegister';
  form.setAttribute('data-algo', 'algo');
  const inputEmailRegister = document.createElement('input');
  inputEmailRegister.className = 'emailReg';
  inputEmailRegister.id = 'emailReg';
  const inputPassRegister = document.createElement('input');
  inputPassRegister.className = 'passwordReg';
  inputPassRegister.id = 'passwordReg';
  const textPassword = document.createElement('p');
  textPassword.textContent = 'Debe contener mínimo 6 caracteres';
  const inputConfirmPassRegister = document.createElement('input');
  const buttonWelcome = document.createElement('button');
  const buttonSubmitRegister = document.createElement('button');
  inputEmailRegister.placeholder = 'Escribe tu correo electrónico';
  inputPassRegister.placeholder = 'Escribe tu contraseña';
  inputConfirmPassRegister.placeholder = 'Confirma tu contraseña';

  buttonWelcome.textContent = 'Registrar';
  buttonWelcome.addEventListener('click', form.submit());

  buttonSubmitRegister.textContent = 'Regresar';
  buttonSubmitRegister.addEventListener('click', () => {
    navigateTo('/');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto de refrescar la página
    // console.log(e.target);
    const email = e.target.emailReg.value;
    const password = e.target.passwordReg.value;
    console.log(email, password); // nos muestra el email y clave digitado
    createUserWithEmail(email, password, navigateTo);
  });

  form.append(
    inputEmailRegister,
    inputPassRegister,
    textPassword,
    inputConfirmPassRegister,
    buttonWelcome,
    buttonSubmitRegister,
  );
  section.append(logoRegister, form);
  return section;
};

export default register;
