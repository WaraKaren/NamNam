const register = (navigateTo) => {
  const section = document.createElement('section');
  section.textContent = 'Bienvenida al registro';
  const buttonWelcome = document.createElement('button');
  const form = document.createElement('form');
  form.className = 'FormRegister';
  const inputEmailRegister = document.createElement('input');
  const inputPassRegister = document.createElement('input');
  const buttonSubmitRegister = document.createElement('button');
  // const signInForm = document.querySelector('.FormRegister');
  buttonWelcome.textContent = 'Registrar';
  buttonWelcome.addEventListener('click', () => navigateTo('/welcome'));

  inputEmailRegister.placeholder = 'Write email';
  inputPassRegister.placeholder = 'Write password';
  section.textContent = 'Register';
  buttonSubmitRegister.textContent = 'go';

  buttonSubmitRegister.textContent = 'Return to home';
  buttonSubmitRegister.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(form, buttonWelcome, inputEmailRegister, inputPassRegister, buttonSubmitRegister);
  return section;
  //  section.append(form, buttonWelcome);
  // para que el formulario aparesca en Firebase
  FormRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = inputEmailRegister.value;
    const password = inputPassRegister.value;
    console.log(email, password);
  });
};

// const formLogin = document.querySelector('.classForm');
export default register;
