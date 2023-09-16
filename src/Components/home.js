// file home.js
function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'login';
  buttonRegister.textContent = 'registrarse';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  title.textContent = 'Welcome to my project';

  section.append(title, buttonLogin, buttonRegister);
  return section;
}

export default home;
