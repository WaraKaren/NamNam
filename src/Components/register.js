import { createUserWithEmail } from '../firebaseconfig';

const register = (navigateTo) => {
  const section = document.createElement('section');
  const logoRegister = document.createElement('img');
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
    createUserWithEmail(email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        navigateTo('/welcome');
      })
      .catch((error) => {
        // console.log(error);
      });
    // const mensaje = 'firebase ';
    // switch (mensaje) {
    //   case 'Firebase: Error (auth/email-already-in-use).':
    //     // alert('Email already in use');
    //     break;
    //   default:
    //     // console.log('default');
    // }
  });

  // const errorMessage = ' ';
  // console.log("prueba", errorMessage);

  // if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
  //   alert('Email ya está en uso');
  // } else if (errorMessage === 'Firebase: Error (auth/passwords-not-match).') {
  //   alert('Las contraseñas no coinciden');
  // } else if (
  //   errorMessage === 'Firebase: Password should be at least 6 characters (auth/weak-password).'
  // ) {
  //   alert('La contraseña debe tener al menos 6 caracteres');
  // } else if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
  //   alert('Email inválido');
  // }
  // // function mensajeError(error) {
  // const mensajes = {
  //   'Firebase: Error (auth/email-already-in-use).':  'Email already in use'

  // };
  // const erroresdefault = 'error no encontrado';
  // const errores = mensajes(error) || erroresdefault;
  //   console.log('prueba1', errores);
  // }
  // const error = 'eerroor ';
  // mensajeError(error);

  // eslint-disable-next-line max-len
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
  //  section.append(form, buttonWelcome);
  // para que el formulario aparesca en Firebase
  //   FormRegister.addEventListener('submit', async (e) => {
  //     e.preventDefault();
  //     const email = inputEmailRegister.value;
  //     const password = inputPassRegister.value;
  //     console.log(email, password);
  //   });
};

export default register;
