// Importa la función 'createUserWithEmail' desde el archivo './utils'
import { createUserWithEmail } from './utils';
// Define una función llamada 'register' que toma 'navigateTo' como argumento
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
  // Crea un elemento de formulario
  const form = document.createElement('form');
  form.className = 'FormRegister';
  // Establece un atributo personalizado 'data-algo' en el formulario
  form.setAttribute('data-algo', 'algo');
  const inputEmailRegister = document.createElement('input');
  // Establece un marcador de posición
  inputEmailRegister.placeholder = 'Escribe tu correo electrónico';
  inputEmailRegister.className = 'emailRegister';
  inputEmailRegister.id = 'emailRegister';
  // Establece el tipo de entrada
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
  buttonSubmitRegister.textContent = 'Regresar';
  // Agrega un escuchador de eventos al botón de registro
  buttonWelcome.addEventListener('click', form.submit());
  // Agrega un escuchador de eventos al botón de regreso
  buttonSubmitRegister.addEventListener('click', () => {
    // Navega a la página principal al hacer clic en este botón
    navigateTo('/');
  });
  // Agrega un escuchador de eventos al formulario cuando se envía
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto de refrescar la página
    const email = e.target.emailRegister.value; // Obtiene el correo electrónico del formulario
    const password = e.target.passwordRegister.value; // Obtiene la contraseña del formulario
    // console.log(email, password); // nos muestra el email y clave digitado
    // Llama a la función 'createUserWithEmail' para crear un usuario
    createUserWithEmail(email, password, navigateTo);
  });
  // Agrega los elementos al DOM en la estructura deseada
  section.append(divOne);
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
    buttonWelcome,
    buttonSubmitRegister,
  );
  // Devuelve la sección creada como resultado de la función 'register'
  return section;
};
// Exporta la función 'register' para su uso en otros archivos
export default register;
