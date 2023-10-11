// import firebase from 'firebase/compat/app';
// import { collection, addDoc } from 'firebase/firestore';
// Required for side-effects
import 'firebase/firestore';
import {
  saveData, getData, onGetPost, deletePost, editPost,
} from '../firebaseconfig.js';

function feed() {
  const main = document.createElement('main');
  main.className = 'mainFeed';
  const logoFeed = document.createElement('img');
  logoFeed.className = 'logoFeed';
  logoFeed.src = 'imagenes/logo.png';
  const titleÑamÑam = document.createElement('h1');
  titleÑamÑam.textContent = 'Ñam Ñam';
  titleÑamÑam.className = 'titleFeed';
  const userName = document.createElement('h2');
  userName.textContent = 'Nombre de usuaria';
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
  recipeTitle.id = 'recipeTitle';
  recipeTitle.className = 'recipeTitle';
  recipeTitle.placeholder = 'Nombre de tu receta';
  const sectionTextarea = document.createElement('section');
  sectionTextarea.id = 'sectionTextarea';
  sectionTextarea.className = 'sectionTextarea';
  const inputFeed = document.createElement('textarea');
  inputFeed.placeholder = 'Escribe aquí tu receta...';
  inputFeed.className = 'inputFeed';
  inputFeed.id = 'inputFeed';
  const btonSubmit = document.createElement('button');
  btonSubmit.textContent = 'Publicar';
  btonSubmit.id = 'btonSubmit';
  btonSubmit.className = 'btonSubmit';

  const sectionData = document.createElement('section');
  sectionData.className = 'sectionData';
  sectionData.id = 'sectionData';
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
  window.addEventListener('DOMContentLoaded', async () => {
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
    // const querySnapshot = await getData();
      let html = '';
      querySnapshot.forEach((doc) => {
        const datas = doc.data();
        html += `
    <section>
    <h3>${datas.title}</h3>
    <p>${datas.description}</p>
    <button class='bton-delete' data-id= '${doc.id}'>Eliminar</button>
    <button class='bton-edit' data-id= '${doc.id}'>Editar</button>
    </section>
    `;
      });
      sectionData.innerHTML = html;
      const btonDelete = sectionData.querySelectorAll('.bton-delete');
      btonDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deletePost(dataset.id);
        });
      });
      const btonEdit = sectionData.querySelectorAll('.bton-edit');
      btonEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await editPost(e.target.dataset.id);
          const infoPost = doc.data();
          recipeForm.recipeTitle.value = infoPost.title;
          recipeForm.inputFeed.value = infoPost.description;
        });
      });
    });
  });

  recipeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    /*  const title = recipeForm['.recipeTitle'];
    const description = recipeForm['.inputFeed']; */
    saveData(recipeTitle.value, inputFeed.value);
    recipeForm.reset();
    // console.log('VALOR', title, 'OTRO', description);
    // console.log('VALOR', e.target.recipeTitle.value);
    // await saveData(title, description);
  });

  main.append(logoFeed, titleÑamÑam, userName, recipeForm, sectionData);
  recipeForm.append(fieldsetInput);
  fieldsetInput.append(postLegend, sectionInput, sectionTextarea, btonSubmit);
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
