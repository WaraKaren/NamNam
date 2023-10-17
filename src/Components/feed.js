/* eslint-disable max-len */
// import firebase from 'firebase/compat/app';
// import { collection, addDoc } from 'firebase/firestore';
// Required for side-effects
import 'firebase/firestore';
import {
  saveData, onGetPost, deletePost, editPost, updatePost, auth,
} from '../firebaseconfig.js';
import { exitFn } from './utils.js';

// const welcome = (navigateTo) => {
//   if (!localStorage.getItem('user')) {
//     return navigateTo('/');
//   }
// const getUserName = () => {
//   const username = (auth?.currentUser?.displayName) || "";
//   return `Bienvenida ${username}`;
// };

function feed(navigateTo) {
  if (!localStorage.getItem('user')) {
    const modal = document.createElement('dialog');
    modal.className = 'modalLocalStorage';
    modal.textContent = 'Usuaria no registrada';
    document.body.appendChild(modal);
    modal.showModal();
    setTimeout(() => {
      modal.close();
    }, '2500');
    // modal.close();
    return navigateTo('/');
  }
  const main = document.createElement('main');
  main.className = 'mainFeed';
  const section = document.createElement('section');
  section.className = 'sectionFeed';
  const logoFeed = document.createElement('img');
  logoFeed.className = 'logoFeed';
  logoFeed.src = 'imagenes/logo.png';
  const titleÑamÑam = document.createElement('h1');
  titleÑamÑam.textContent = 'Ñam Ñam';
  titleÑamÑam.className = 'titleFeed';
  const buttonExit = document.createElement('button');
  buttonExit.className = 'bttnExitHome';
  buttonExit.textContent = 'Cerrar sesión';
  const userName = document.createElement('h2');
  userName.textContent = auth.currentUser.displayName ? auth.currentUser.displayName : auth.currentUser.email;
  userName.className = 'userName';
  const recipeForm = document.createElement('form');
  recipeForm.className = 'recipeForm';
  recipeForm.id = 'recipeForm';
  const fieldsetInput = document.createElement('fieldset');
  fieldsetInput.id = 'fieldsetInput';
  fieldsetInput.className = 'fieldsetInput';
  const postLegend = document.createElement('legend');
  postLegend.textContent = '¿Qué estás cocinando?';
  const sectionInput = document.createElement('section');
  sectionInput.className = 'sectionInput';
  sectionInput.id = 'sectionInput';
  const recipeTitle = document.createElement('input');
  recipeTitle.type = 'text';
  recipeTitle.required = true;
  recipeTitle.id = 'recipeTitle';
  recipeTitle.className = 'recipeTitle';
  recipeTitle.placeholder = 'Nombre de tu receta';
  const sectionTextarea = document.createElement('section');
  sectionTextarea.id = 'sectionTextarea';
  sectionTextarea.className = 'sectionTextarea';
  const inputFeed = document.createElement('textarea');
  inputFeed.setAttribute('rows', '4');
  inputFeed.setAttribute('cols', '50');
  inputFeed.required = true;
  inputFeed.placeholder = 'Escribe aquí tu receta...';
  inputFeed.className = 'inputFeed';
  inputFeed.id = 'inputFeed';
  const bttonSubmit = document.createElement('button');
  bttonSubmit.textContent = 'Publicar';
  bttonSubmit.id = 'bttonSubmit';
  bttonSubmit.className = 'bttonSubmit';
  const sectionData = document.createElement('section');
  sectionData.className = 'sectionData';
  sectionData.id = 'sectionData';
  let editStatus = false;
  let id = '';
  // Agregamos un evento de clic al botón 'Cerrar sesión' para salir y navegar a la ruta raíz
  // const recipePost = document.createElement('input');
  // recipePost.id = 'recipeTitle';
  // recipePost.className = 'recipeTitle';
  // const inputPost = document.createElement('textarea');
  // inputPost.className = 'inputFeed';
  // inputPost.id = 'inputFeed';
  // const likeOff = document.createElement('img');
  // likeOff.src = 'imagenes/dona-sin-glasear.png';
  // likeOff.alt = 'likeOff';
  // const LikeOn = document.createElement('img');
  // LikeOn.src = 'imagenes/dona-glaseada.png';
  // LikeOn.alt = 'LikeOn';
  // window.addEventListener('DOMContentLoaded', () => {
  // getData((resultado) => {
  //   console.log(resultado);
  //   let data = '';
  //   resultado.forEach((doc) => {
  //     const prueba = doc.data();
  //     data += inputPost + prueba.title;
  //   });
  //   sectionData.innerHTML = data;
  // });
  onGetPost((querySnapshot) => {
    console.log(querySnapshot);
    // const querySnapshot = await getData();
    let html = '';
    querySnapshot.forEach((doc) => {
      const datas = doc.data();
      html += `
    <section class='sectionPost'>
    <h3>${datas.title}</h3>
    <p>${datas.description}</p>
    <section class='sectionButtnPost'>
    <button class='btton-delete' data-id= '${doc.id}'>Eliminar</button>
    <button class='btton-edit' data-id= '${doc.id}'>Editar</button>
    <img class='imageLike' src= ${datas.isliked ? 'imagenes/dona-glaseada.png' : 'imagenes/dona-sin-glasear.png'} data-id= '${doc.id}'>
    </section>
    </section>
    `;
    });
    sectionData.innerHTML = html;
    const bttonDelete = sectionData.querySelectorAll('.btton-delete');
    bttonDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        // deletePost(dataset.id);
        const modal = document.createElement('dialog');
        modal.className = 'modal';
        modal.textContent = '¿Deseas eliminar la publicación?';
        const bttonCancel = document.createElement('button');
        bttonCancel.id = 'bttonCancel';
        bttonCancel.textContent = 'Cancelar';
        const bttonConfirm = document.createElement('button');
        bttonConfirm.id = 'bttonConfirm';
        bttonConfirm.textContent = 'Aceptar';
        if (btn) {
          document.body.appendChild(modal);
          modal.append(bttonConfirm, bttonCancel);
          modal.showModal();
          bttonConfirm.addEventListener('click', () => {
            deletePost(dataset.id);
            modal.close();
          });
          bttonCancel.addEventListener('click', () => {
            modal.close();
          });
        }
      });
    });
    const bttonEdit = sectionData.querySelectorAll('.btton-edit');
    bttonEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await editPost(e.target.dataset.id);
        const infoPost = doc.data();
        recipeForm.recipeTitle.value = infoPost.title;
        recipeForm.inputFeed.value = infoPost.description;
        editStatus = true;
        id = e.target.dataset.id;
        recipeForm.bttonSubmit.innerHTML = 'Editar';
      });
    });
    const bttonLike = sectionData.querySelectorAll('.imageLike');
    bttonLike.forEach((bton) => {
      bton.addEventListener('click', async (e) => {
        const doc = await editPost(e.target.dataset.id);
        const infoPost = doc.data();
        updatePost(e.target.dataset.id, { ...infoPost, isliked: !infoPost.isliked });
      });
    });
  });
  // });

  recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    /*  const title = recipeForm['.recipeTitle'];
    const description = recipeForm['.inputFeed']; */
    // saveData(recipeTitle.value, inputFeed.value);
    if (!editStatus) {
      saveData(recipeTitle.value, inputFeed.value);
    } else {
      updatePost(id, {
        title: recipeTitle.value,
        description: inputFeed.value,
      });

      editStatus = false;
    }
    recipeForm.reset();
    // console.log('VALOR', title, 'OTRO', description);
    // console.log('VALOR', e.target.recipeTitle.value);
    // await saveData(title, description);
  });
  buttonExit.addEventListener('click', () => {
    exitFn().then(() => {
      navigateTo('/');
    });
  });

  main.append(section, userName, recipeForm, sectionData);
  section.append(logoFeed, titleÑamÑam, buttonExit);
  recipeForm.appendChild(fieldsetInput);
  fieldsetInput.append(postLegend, sectionInput, sectionTextarea, bttonSubmit);
  sectionInput.appendChild(recipeTitle);
  sectionTextarea.appendChild(inputFeed);

  // Declara una variable llamada 'isliked' y la inicializa como 'true'
  // let isliked = true;

  // // Agrega un evento de clic al elemento con el ID 'likeOff'
  // likeOff.addEventListener('click', () => {
  // // Comprueba si 'isliked' es 'true'
  //   if (isliked) {
  //   // Si 'isliked' es 'true', cambia la fuente de la imagen a 'imagenes/dona-sin-glasear.png'
  //     likeOff.src = 'imagenes/dona-sin-glasear.png';
  //   } else {
  //   // Si 'isliked' es 'false', cambia la fuente de la imagen a 'imagenes/dona-glaseada.png'
  //     likeOff.src = 'imagenes/dona-glaseada.png';
  //   }
  //   // Invierte el valor de 'isliked', de 'true' a 'false' o de 'false' a 'true'
  //   isliked = !isliked;
  // });

  return main;
}

export default feed;
