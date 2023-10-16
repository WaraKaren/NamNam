import { createUserWithEmail } from '../src/Components/utils.js';
import register from '../src/Components/login.js';

jest.mock('../src/Components/utils.js', () => ({
  createUserWithEmail: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe('Pruebas de Register', () => {
  it('Autenticación con correo electrónico y contraseña, debería redireccionar a /welcome', () => {
    // Paso 1: Visualizar el formulario de login.
    const registerDiv = register();
    // console.log({ registerDiv });
    // Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    registerDiv.querySelector('#inputEmailRegister').value = 'marialab@lab.com';
    registerDiv.querySelector('#inputPassRegister').value = 'maria123';

    // Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    registerDiv.querySelector('.FormRegister').dispatchEvent(new Event('submit'));

    // Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
    expect(createUserWithEmail).toHaveBeenCalled();
  });
});
