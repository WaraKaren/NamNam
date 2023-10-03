// importamos la funcion que vamos a testear

import { navigateTo } from '../src/main.js';
import { signInWithEmail } from '../src/Components/utils.js';

describe('Pruebas de login', () => {
  it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /welcome', () => {
    // Paso 1: Visualizar el formulario de login.
    const loginDiv = signInWithEmail();

    // Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    loginDiv.querySelector('#inputEmailLogin').value = 'lab@lab.com';
    loginDiv.querySelector('#inputPassLogin').value = 'lab12345';

    // Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    loginDiv.querySelector('.Form').dispatchEvent(new Event('submit'));

    // Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
    expect(navigateTo).toHaveBeenCalledWith('/welcome');
  });
});
