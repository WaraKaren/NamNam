// Importa la función 'createUserWithEmail' desde el archivo './utils'
import { createUserWithEmail } from './utils';
// Define una función llamada 'register' que toma 'navigateTo' como argumento

import logoR from '../imagenes/logo.png';
//importaciond e img para vite
const register = (navigateTo) => {
  const section = document.createElement('section');
  section.className = 'containerRegister';
  const divOne = document.createElement('div');
  divOne.className = 'divOneRegister';
  const logo = document.createElement('img');
  logo.className = 'logoRegister';
  logo.src = logoR;
  const title = document.createElement('h1');
  title.textContent = 'Crea tu cuenta';
  title.className = 'titleRegister';
  // Crea un elemento de formulario
  const form = document.createElement('form');
  form.className = 'FormRegister';
  // Establece un atributo personalizado 'data-algo' en el formulario
  form.setAttribute('data-algo', 'algo');
  form.id = 'register-user';
  const inputEmailRegister = document.createElement('input');
  // Establece un marcador de posición
  inputEmailRegister.placeholder = 'Escribe tu correo electrónico';
  inputEmailRegister.className = 'inputEmailRegister';
  inputEmailRegister.id = 'inputEmailRegister';
  // Establece el tipo de entrada
  inputEmailRegister.type = 'email';
  const inputPassRegister = document.createElement('input');
  inputPassRegister.placeholder = 'Escribe tu contraseña';
  inputPassRegister.className = 'inputPassRegister';
  inputPassRegister.id = 'inputPassRegister';
  inputPassRegister.type = 'password';
  const textPassword = document.createElement('p');
  textPassword.textContent = 'Debe contener mínimo 6 caracteres';
  textPassword.className = 'textPasswordRegister';
  // const inputConfirmPassRegister = document.createElement('input');
  // inputConfirmPassRegister.placeholder = 'Confirma tu contraseña';
  const bttonRegister = document.createElement('button');
  bttonRegister.className = 'bttonRegister';
  bttonRegister.textContent = 'Registrar';
  const bttonBackToHome = document.createElement('button');
  bttonBackToHome.className = 'bttonBackToHome';
  bttonBackToHome.textContent = 'Regresar';
  // Agrega un escuchador de eventos al botón de registro
  // bttonRegister.addEventListener('click', form.submit());
  // Agrega un escuchador de eventos al botón de regreso
  bttonBackToHome.addEventListener('click', () => {
    // Navega a la página principal al hacer clic en este botón
    navigateTo('/');
  });
  // Agrega un escuchador de eventos al formulario cuando se envía

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto de refrescar la página
    const email = inputEmailRegister.value; // Obtiene el correo electrónico del formulario
    const password = inputPassRegister.value; // Obtiene la contraseña del formulario
    // console.log(email, password); // nos muestra el email y clave digitado
    // Llama a la función 'createUserWithEmail' para crear un usuario
    createUserWithEmail(email, password, navigateTo);
  });
  // Agrega los elementos al DOM en la estructura deseada
  section.appendChild(divOne);
  divOne.append(
    logo,
    title,
    form,
  );
  form.append(
    inputEmailRegister,
    inputPassRegister,
    textPassword,
    // inputConfirmPassRegister,
    bttonRegister,
    bttonBackToHome,
  );
  // Devuelve la sección creada como resultado de la función 'register'
  return section;
};
// Exporta la función 'register' para su uso en otros archivos
export default register;
