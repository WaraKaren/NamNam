import { createUserWithEmail } from '../src/Components/utils.js';
import register from '../src/Components/register.js';

jest.mock('../src/Components/utils.js', () => ({
  createUserWithEmail: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe('Pruebas de Register', () => {
  it('Registro con correo electrónico y contraseña, debería llamar a createUserWithEmail', () => {
    // Paso 1: Visualizar el formulario de login.
    const registerDiv = register();
    // const onSubmit = jest.fn((e) => e.preventDefault());
    // Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    registerDiv.querySelector('#inputEmailRegister').value = 'marialab@lab.com';
    registerDiv.querySelector('#inputPassRegister').value = 'maria123';

    // Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    registerDiv.querySelector('#register-user').dispatchEvent(new Event('submit'));
    // console.log(registerDiv.querySelector('.bttonRegister'));

    // Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
    expect(createUserWithEmail).toHaveBeenCalled();
  });
});
