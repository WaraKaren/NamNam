// Importa la función signInWithEmail desde el archivo utils.js
import { signInWithEmail } from './utils';
// Define la función login que toma un argumento navigateTo
function login(navigateTo) {
  // Crea un elemento section para el contenedor principal de la página de inicio de sesión
  const section = document.createElement('section');
  // Asigna la clase CSS 'containerLogin' al elemento section
  section.className = 'containerLogin';
  // Crea un elemento div para una sección dentro del contenedor principal
  const divOne = document.createElement('div');
  divOne.className = 'divOneLogin';
  // Crea una imagen con la clase 'logoLogin' y la fuente de la imagen 'imagenes/logo.png'
  const logo = document.createElement('img');
  logo.className = 'logoLogin';
  logo.src = 'imagenes/logo.png';
  const title = document.createElement('h1');
  title.textContent = 'Inicia sesión';
  // Crea un formulario (<form>) con la clase 'Form' para ingresar información de inicio de sesión
  const form = document.createElement('form');
  form.className = 'Form';
  // Crea un campo de entrada de texto (<input>) para el correo electrónico
  const inputEmail = document.createElement('input');
  inputEmail.className = 'inputEmailLogin';
  inputEmail.id = 'inputEmailLogin';
  inputEmail.placeholder = 'Escribe tu correo electrónico';
  inputEmail.type = 'email';
  // Crea un campo de entrada de contraseña (<input>)
  const inputPass = document.createElement('input');
  inputPass.className = 'inputPassLogin';
  inputPass.id = 'inputPassLogin';
  inputPass.placeholder = 'Escribe tu contraseña';
  inputPass.type = 'password';
  // const buttonForgotPass = document.createElement('button');
  // buttonForgotPass.className = 'bttnForgotPassLogin';
  // buttonForgotPass.textContent = '¿Olvidaste tu contraseña?';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'bttnLogin';
  buttonLogin.textContent = 'Iniciar sesión';
  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'bttnReturnLogin';
  buttonReturn.textContent = 'Regresar';
  // Agrega un evento de clic al botón de inicio de sesión para intentar enviar el formulario
  buttonLogin.addEventListener('click', form.submit());
  // Agrega un evento de clic al botón de regreso para redirigir a la página principal
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  // Agrega un evento de envío al form que evita el comportamiento por defecto de recargar la página
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPass.value;
    // Llama a la función signInWithEmail con email, password y la función navigateTo
    signInWithEmail(email, password, navigateTo);
  });
  // Organiza todos los elementos en la estructura del DOM
  section.append(divOne);
  divOne.append(
    logo,
    title,
    form,
  );
  form.append(
    inputEmail,
    inputPass,
    buttonLogin,
    buttonReturn,
  );
  // Retorna la sección completa como resultado de la función login
  return section;
}
// Exporta la función login para su uso en otros archivos
export default login;
/* const inputPass = document.createElement('input');
inputPass.className = 'inputPassLogin';
inputPass.placeholder = 'Escribe tu contraseña';
inputPass.type = 'password'; // Establece el tipo de entrada como contraseña */

// Ahora, puedes agregar este elemento input a tu documento, por ejemplo, a un formulario
// Ejemplo: document.getElementById('miFormulario').appendChild(inputPass);
