const register = (navigateTo) => {
  const section = document.createElement('section');
  section.textContent = 'Bienvenida al registro';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al home';
  buttonHome.addEventListener('click', () => navigateTo('/'));

  section.append(buttonHome);
  return section;
};

export default register;
