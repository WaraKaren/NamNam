# Social Network (Ñam Ñam)
## Índice

 1. Preámbulo
 2. Resumen del proyecto
 2.1. ¿Qué es Ñam Ñam?
 3. Planeación
 3.1 Primeros pasos
 3.2 Historias de usuarias
 4. Organización del proyecto
 5. Diseño de la interfaz de usuarias
 5.1 Prototipo de Baja Fidelidad
 5.2 Prototipo de Alta Fidelidad 
 6. Código
 6.1 Tests
 7. Tecnologías usadas
 8. Recursos útiles

 

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes sociales han invadido nuestras vidas. Las amamos u odiamos y muchas no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo, en una ronda de financiamiento con inversionistas se presentó una red social para químicas en la que las y los usuarios podían publicar sus investigaciones, comentar en los artículos de sus colegas y filtrarlos de acuerdo a determinadas etiquetas o su popularidad, lo más reciente o lo más comentado.

## 2. Resumen del proyecto
En este proyecto se construyó una Red Social de comida, específicamente de recetas de cocina, caseras o de *haute cuisine*.

Nuestra Red Social, llamada **"Ñam Ñam"** permite a las usuarias generar una cuenta de acceso y loguearse con ella; crear, editar, borrar y  _"likear"_ publicacciones e incluso, ingresar a ella a través de su cuenta personal de Google.

Dicho proyecto se construyó como una *Single-page Application (SPA) responsive* (con más de una vista / página) en la que podemos  **leer y escribir datos**.

**2.1** **¿Qué es Ñam Ñam?**

Como se mencionó anteriormente Ñam Ñam es una Red Social que ayudará a las usuarias a publicar sus recetas de cocina favoritas y a las cuales se les podrá dar "*like*", e incluso podrán editar o borrar dichas publicaciones.

Nuestro equipo diseñó diversas interfaces en este proyecto: *Home*, *Login*, *Register*, *Welcome* y *Feed*, las cuales ofrecen diversas funcionalidades y también se enlazan unas con otras, de manera que la experiencia de las usuarias es sencilla e intuitiva.

Para poder obtener un producto que fuera de interés  y utilidad se realizó una investigación previa entre un research group, a partir de la cual se desarrolló todo nuestro proyecto, desde la planeación del tiempo, los objetivos a realizar por cada sprint, el tipo de data que se muestra en las diversas interfaces y el diseño de la app final.

## 3. Historias de usuarias
**3.1 primeros pasos**

Como primer acercamiento se respondió una serie de preguntas en una [encuesta de Google Forms](https://docs.google.com/forms/d/1IlQtseLtdjSLlJvprURV57ZdF305671wFw08jaDKUqU/viewform?edit_requested=true#responses) que nos ayudaron a generar un research group sobre el cual desarrollaríamos nuestro proyecto, es decir, la [Definición del producto](https://www.figma.com/file/rCsIPpwHSBhz6exe2OCzJJ/%C3%91am-%C3%91am-/-Historias-de-Usuaria?type=whiteboard&node-id=1-4602&t=XdwjckMoGC5YoTDo-0):
-   ¿Quiénes son las principales usuarias de producto?
-   ¿Cuáles son las necesidades de nuestras usuarias y cómo las cubrimos?
-  ¿Cómo llegamos a la definición total del producto?
-   ¿Qué problema resuelve el producto?
- ¿Para qué servirá nuestro producto a las usuarias?

<a href="https://ibb.co/kXPJk2M"><img src="https://i.ibb.co/hVTchFC/Definicion-producto.png" alt="Definicion-producto" border="0"></a>

<a href="https://ibb.co/mF91Fwv"><img src="https://i.ibb.co/Dg9sgyG/encuesta-1.png" alt="encuesta-1" border="0"></a>

<a href="https://ibb.co/mF91Fwv"><img src="https://i.ibb.co/Dg9sgyG/encuesta-1.png" alt="encuesta-1" border="0"></a>


**3.2 Historias de usuarias**

Nuestro proyecto se basó en el gusto de las integrantes del proyecto por la comida y la cocina de diferentes latitudes del planeta.

Con ello en mente y con los diferentes niveles de experiencia que cada una de nosotras cuenta en el ámbito culinario, nos dimos a la tarea de encontrar las necesidades y problemas que enfrentamos a la hora de cocinar: cientos de blogs con historias personales infinitas que dan razón de las recetas expuestas; grupos en redes sociales que, si bien brindan recetas con fotos, también te dan el link del blog o sitio alterno para que busques dicha receta, lo que se traduce en un mayor tiempo de búsqueda e incluso, páginas dedicadas a la cocina que exigen un pago para visualizar las recetas.

Acorde a la previa investigación entre nuestras futuras usuarias recabamos información acerca de sus necesidades, gustos y preferencias en torno a una app especializada en la presentación de recetas caseras o de *haute cuisine*; el grado de dificultad de cada una de ellas para que las usuarias puedan escoger, de acuerdo a sus habilidades, la receta que más les sirva y apetezca; y sí, también poder dar *like* a sus recetas favoritas.

Con base en las observaciones de este determinado grupo se pudieron crear diversas [Historias de Usuarias](https://www.figma.com/file/rCsIPpwHSBhz6exe2OCzJJ/%C3%91am-%C3%91am-/-Historias-de-Usuaria?type=whiteboard&node-id=0:1&t=O79ca6yJoSqyhdc5-1) (User Story) que nos permitieron elaborar una guía para tener en cuenta las necesidades y preferencias de nuestras futuras consumidoras.

-   Nuestras usuarias consideran importante **publicar** sus recetas paso a paso.
- Ellas también revelaron que les gustaría conocer el nivel de dificultad de cada receta, para una mejor elección.
-   Poder **editar** y **borrar** sus publicaciones.
-   Para nuestras usuarias es importante poder **dar like** a las publicaciones de recetas que más les atraigan y también poder **quitar** ese like en caso de equivocación.
-   Nuestras potenciales consumidoras encuentran ideal ingresar a la app a través de su propio mail de **Google**.
-   También les parece importante poder crear una cuenta de ingreso con **correo y contraseña**.
- En caso de **error** en la creación de cuenta con correo y contraseña, a las usuarias les gustaría conocerlo y poder enmendarlo (correo sin @, contraseña incorrecta o menor de 6 caracteres, usuaria no encontrada, etcétera).
- También enunciaron que es necesario una **confirmación** antes de borrar su publicación.
- En cuestión de **privacidad**, comentaron que es vital que al escribir su contraseña, esta sea secreta.

<a href="https://ibb.co/SBjDPFV"><img src="https://i.ibb.co/L1FD8V9/primera-UH.png" alt="primera-UH" border="0"></a>


<a href="https://ibb.co/JFYqyz1"><img src="https://i.ibb.co/BKhGrgp/segunda-HU.png" alt="segunda-HU" border="0"></a>

## 4. Organización del proyecto

Una vez que se definieron cuáles serían los objetivos de nuestra app, se realizó la planeación del proyecto por sprints. Para ello utilizamos [Trello](https://trello.com/b/akE9wav2/sprint-1-social-network), en el cual  hicimos un dashboard por sprint, en los cuales anotamos tanto los objetivos, nuestro progreso, los planes (aquello que no pudimos completar en dicho sprint y lo movíamos al siguiente), los problemas que enfrentamos en cada sprint, así como nuestros logros.

Conforme a los objetivos del primer sprint se realizó la encuesta, la **primera Historia de Usuaria**, sus **prototipos** de baja y alta fidelidad, así como un acercamiento al **diseño** de nuestra app en cuestión de colores y logo. Además, hicimos el clone y fork del repo original en Github.
<a href="https://ibb.co/ZmP4CzG"><img src="https://i.ibb.co/745MFtj/1er-sprint-trello.png" alt="1er-sprint-trello" border="0"></a>

La segunda parte se basó en hacer el **SPA** de nuestras interfaces de autenticación, creamos los elementos HTML en JavaScript y logramos instalar **Firebase** y generar nuestro proyecto en su consola.
<a href="https://ibb.co/pf5fbS6"><img src="https://i.ibb.co/N9b9tMg/2do-sprint-trello.png" alt="2do-sprint-trello" border="0"></a>

Para el tercer sprint adelantamos nuestras funcionalidades de ingreso con correo y contraseña y con Google. También en este sprint comenzamos a crear el **CSS *responsive*** para las interfaces que ya teníamos completadas.
<a href="https://ibb.co/WnCfBXH"><img src="https://i.ibb.co/31KcSbT/3er-sprint-trello.png" alt="3er-sprint-trello" border="0"></a>

Durante la semana cuatro realizamos el **ingreso a la app con correo y contraseña**, la **vinculación con Google** y terminamos el CSS de nuestro proyecto en responsive. Además, se revisó la documentación acerca de los test.
<a href="https://ibb.co/sKdb26x"><img src="https://i.ibb.co/By5ctrW/4to-sprint-trello.png" alt="4to-sprint-trello" border="0"></a>

En el quinto sprint al ver que nos faltaba mucho trabajo por delante tuvimos que hacer algunas modificaciones al prototipo de alta fidelidad de la primera HU, dado que no podríamos completarlo y quisimos priorizar los OA del proyecto. 

Por ende, nos dimos a la tarea de crear la **segunda Historia de Usuaria** y sus respectivos **prototipos**, crear la interfaz del Feed y sus funcionalidades de **crear**, **publicar** y **actualizar** las publicaciones. Se trató de hacer los test de las interfaces de Login y Register, pero se nos recomendó en su lugar testear algunas funcionalidades de Feed. Realizamos el **CSS** de la versión de **escritorio**.
<a href="https://ibb.co/SKNjy23"><img src="https://i.ibb.co/P5xLjR6/5to-sprint-trello.png" alt="5to-sprint-trello" border="0"></a>

Ya en nuestro sexto y último sprint logramos hacer la funcionalidad de **eliminar y editar** las publicaciones, así como la de **dar y quitar *likes***, visibilizar los nombres o correos de las usuarias, terminar el CSS responsive de la interfaz de Feed y realizar los **test de Login y Register**.
<a href="https://ibb.co/v17jfz7"><img src="https://i.ibb.co/G7K5GPK/6to-sprint-trello.png" alt="6to-sprint-trello" border="0"></a>

## 5. Diseño de las interfaces de usuarias
**5.1 Prototipos de baja fidelidad**

Para su creación se usó [Figma](https://www.figma.com/file/rq6GEjzhdgSUJGIte0SK51/%C3%91am-%C3%91am-/-Prototipos-LoFi-y-HiFi?type=design&node-id=0-1&mode=design&t=coOCIWrUxPPCHqrG-0). El protipo de la primera Historia de Usuaria se conforma de cuatro interfaces: *Home*, *Login*, *Register* y *Welcome*.

Cada una de ella muestra diversa data, como una bienvenida a la app y las opciones de registrarse o ingresar (**Home**); la autenticación de las usuarias con su correo y contraseña o mediante Google (**Login**); la creación de una cuenta con correo y contraseña (**Register**) y, por último, la interfaz a la que se dirigen las usuarias cuando crearon su cuenta o si ya están registradas (**Welcome**) y que les da el paso a la interfaz donde ellas podrán publicar (Feed).
<a href="https://ibb.co/KNXf266"><img src="https://i.ibb.co/tZ4vqBB/lofi-prototipo-1-HU.png" alt="lofi-prototipo-1-HU" border="0"></a>

Para el caso de la segunda Historia de Usuaria, solo existe una interfaz (**Feed**), que es la responsable de mostrar la creación de publicaciones, su edición y eliminación, además de dar o quitar *likes*.
<a href="https://ibb.co/6PkDG1t"><img src="https://i.ibb.co/SnzVHdm/lofi-prototipo-2-HU.png" alt="lofi-prototipo-2-HU" border="0"></a>

**4.2 Prototipos de alta fidelidad**

Respecto a nuestros prototipo de alta fidelidad, el primero se muestra ya con la paleta de colores designada basada en los colores del logo y aquellos que armonizan con él. Varios son los elementos que componen cada interfaz, como el logo, títulos y párrafos, inputs de tipo correo electrónico y contraseña y botones que realizan la conectividad de autenticación con Firebase y Google.
<a href="https://ibb.co/SQ12ZL7"><img src="https://i.ibb.co/s5DhXBJ/hifi-prototipo-1-HU.png" alt="hifi-prototipo-1-HU" border="0"></a>

Por otra parte, en el prototipo de la segunda HU vemos la sección en la cual las usuarias podrán escribir sus recetas y el botón de publicar; debajo de ella se muestra otra sección en la que aparece el título de la receta, la receta en sí, los botones de editar o borrar y una imagen que representa el *like*. Dicha imagen tiene forma de dona sin glasear, la cual se glaseará en color rosa cuando las usuarias lo activen, es decir, cuando le den "me gusta" a la receta de su preferencia.
<a href="https://ibb.co/h7BqdH6"><img src="https://i.ibb.co/NV94Npv/hifi-prototipo-2-HU.png" alt="hifi-prototipo-2-HU" border="0"></a>

Destacamos que nuestra interfaz también es *responsive*, por lo que se adapta sin problemas a dispositivos con distintos tamaños de pantallas: como teléfonos celulares y *desktop*.

En este primer Loom se grabaron las funcionalidades de autenticación mediante correo y contraseña, usuaria ya registrada; la funcionalidad de crear, editar, eliminar una publicación, así como la de dar y quitar *likes*.
<div>
    <a href="https://www.loom.com/share/a48fe12f52bb496d8711c723a009eeeb">
      <p>Ñam Ñam. Login, Register y Post </p>
    </a>
    <a href="https://www.loom.com/share/a48fe12f52bb496d8711c723a009eeeb">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/a48fe12f52bb496d8711c723a009eeeb-1697676780485-with-play.gif">
    </a>
  </div>

En este otro Loom, se aprecia la autenticación con Google en la versión para *desktop*.
<div>
    <a href="https://www.loom.com/share/5ac6d3b2bd814de88dd2ff62394fa8eb">
      <p>Ñam Ñam. Login con Google</p>
    </a>
    <a href="https://www.loom.com/share/5ac6d3b2bd814de88dd2ff62394fa8eb">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/5ac6d3b2bd814de88dd2ff62394fa8eb-with-play.gif">
    </a>
  </div>

## 6. Código

Como se mencionó, nuestra app permite a las usuarias ingresar a través de Google o al crear una usuaria y contraseña; además, pueden publicar sus recetas con título y dificultad (sin límite de caracteres), editarlas y borrarlas. Y no debemos olvidar que también pueden dar o quitar el *like* a la publicación.

Para todas estas acciones se crearon diversas funciones en distintos archivos de JS (Components). También se creó un archivo exclusivo en donde pusimos varias funciones que se enlazan con Firebase (Utils); y dos archivos de test, uno para Login (login.spec.js) y otro para Register (register.spec.js)

 - En el archivo **firebaseconfig.js** se establece la conexión con Firebase y proporciona una instancia de autenticación que se utilizará para autentificar a los usuarios en tu aplicación.
 - **main.js** se encarga de la gestión de rutas y la navegación en la app utilizando los componentes importados y el historial del navegador.
 - **index.HTML** provee la estructura básica nuestra página web, vincula archivos CSS y JavaScript y define la configuración necesaria para que la app funcione correctamente. El contenido principal se renderiza dinámicamente en el `div` con ID "root" utilizando JavaScript.
 - **style.css** se encargó de definir la presentación y el estilo visual de nuestra app.
 
 Dentro del folder Components, tenemos:
 - **utils.js**, se encarga de manejar el registro de usuarios y el inicio de sesión con Firebase, mostrando mensajes de error en un modal emergente en caso de problemas. También proporciona funciones para iniciar sesión con Google y cerrar la sesión del usuario.
 -  **home.js**, cuyo código crea y configura el componente de la página de inicio de la aplicación, que contiene elementos HTML y eventos para la navegación y la interacción del usuario. 
 - En **login.js** creamos la interfaz de la página de inicio de sesión y también maneja la lógica de autenticación cuando el usuario intenta iniciar sesión. 
 - **register.js** se utiliza para crear una página de registro en la que las usuarias pueden ingresar su dirección de correo electrónico y contraseña para registrarse. El código también maneja eventos de click en los botones y el envío del formulario para realizar acciones como el registro y la navegación.
 - Mientras que **welcome.js** crea y configura la interfaz de bienvenida que se utilizará en la aplicación y contiene elementos HTML y eventos.
 - **feed.js** se encarga de construir y gestionar la página principal de nuestra app, que incluye mostrar publicaciones, permitir la edición, eliminación y dar/quitar *like* de las mismas, así como el manejo de la publicación de nuevas recetas y el cierre de sesión de usuarios registrados.

A continuación mostramos diversas imágenes de nuestro código: 
Firebase
<a href="https://ibb.co/MDQyms9"><img src="https://i.ibb.co/vxRCSHD/firebaseconfigjs.png" alt="firebaseconfigjs" border="0"></a>

Index.HTML
<a href="https://ibb.co/hyGGR2X"><img src="https://i.ibb.co/vHNNxLs/indexhtml.png" alt="indexhtml" border="0"></a>

Main.JS
<a href="https://ibb.co/jwvPMNw"><img src="https://i.ibb.co/DMDHCJM/mainjs.png" alt="mainjs" border="0"></a>

Style.CSS
<a href="https://ibb.co/cxsbCXs"><img src="https://i.ibb.co/t31ZxP1/css.png" alt="css" border="0"></a>

Utils.JS
<a href="https://ibb.co/BZ7JMRs"><img src="https://i.ibb.co/T8nG35h/utilsjs.png" alt="utilsjs" border="0"></a>

Home.Js
<a href="https://ibb.co/d4hW3mb"><img src="https://i.ibb.co/LdGkqNQ/homejs.png" alt="homejs" border="0"></a>

Login.JS
<a href="https://ibb.co/v3GFHB3"><img src="https://i.ibb.co/tqtG4hq/loginjs.png" alt="loginjs" border="0"></a>

Register.JS
<a href="https://ibb.co/tzXNCdb"><img src="https://i.ibb.co/dtg3KhQ/registerjs.png" alt="registerjs" border="0"></a>

Welcome.JS
<a href="https://ibb.co/G0MjXfY"><img src="https://i.ibb.co/Tk05ZDj/welcomejs.png" alt="welcomejs" border="0"></a>

Feed.JS
<a href="https://ibb.co/kcmYgrY"><img src="https://i.ibb.co/cTYzcpz/feedjs.png" alt="feedjs" border="0"></a>


**6.1 Tests**
Nuestro proyecto también cuenta con un conjunto de tests (escritos por nosotras) para dos interfaces: **Login** y **Register**. Dichas pruebas también ayudaron a detectar algunos errores de Eslint. 

En el test de Login la autenticación con correo electrónico y contraseña correcta **redireccionan al Feed**. En tanto que para Register, se verifica que el mismo registro con correo electrónico y contraseña, **llamen a "createUserWithEmail"**, la función que autentica ambos elementos.

En el siguiente video se muestran los test que se realizaron y se aprobaron con plena satisfacción:

<div>
    <a href="https://www.loom.com/share/57b9744425284474a7b99525b07bdf3b">
      <p>Ñam Ñam. Tests</p>
    </a>
    <a href="https://www.loom.com/share/57b9744425284474a7b99525b07bdf3b">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/57b9744425284474a7b99525b07bdf3b-with-play.gif">
    </a>
  </div>

## 7. Tecnologías usadas

 - HTML5: es la que proporciona la estructura básica de la aplicación.
 -   CSS3: esta tecnología define el diseño y estilo visual de la aplicación.
 -   JavaScript: implementa la funcionalidad para analizar el texto ingresado y mostrar los resultados. 
 - Firebase: plataforma en la nube desarrollada por Google que ofrece una amplia gama de herramientas y servicios para desarrolladoras de aplicaciones. Permite crear aplicaciones de manera más eficiente, ya que se pueden aprovechar estas herramientas en la nube en lugar de construir todas las funcionalidades desde cero.
 - Firestore: servicio de base de datos NoSQL (no relacional) en la nube proporcionado por Firebase. Permite almacenar datos en documentos y colecciones, y ofrece características como sincronización en tiempo real, lo que significa que los cambios en la base de datos se reflejan automáticamente en la aplicación sin necesidad de recargar la página.
 - SPA: una SPA (Single Page Application) es un tipo de aplicación web que funciona en una sola página en lugar de múltiples páginas. En una SPA, la página se carga una vez, y luego el contenido se actualiza dinámicamente a medida que se interactúa con la aplicación, sin necesidad de recargar la página.
 - También se hizo uso de [Figma](https://www.figma.com/),  [Shopify](https://www.shopify.com/es/herramientas/generador-de-logos), [ImgBB](https://imgbb.com/),  [Trello](https://www.trello.com/),  [Loom](https://www.loom.com/),  [Stackedit](https://www.stackedit.io/), [ColorSpace](https://mycolor.space/), Visual Code, SPA, Vercel y Github.

## 8. Recursos útiles
[SPA con Vanilla](https://medium.com/@elcfm1/spa-con-vanilla-8b7d12408543)

[SPA con Vanilla (video Laboratoria)](https://www.youtube.com/watch?v=vFh18oo2Cu4&ab_channel=Dev-Labo)

[Taller de rutas para construir nuestra SPA](https://gist.github.com/reloadercf/1875eee55490c0e7a0413cb0f469121f)

[Promesas y Async/Await en JS](https://www.youtube.com/watch?v=6O8ax3JYboc&ab_channel=CarlosAzaustre-AprendeJavaScript)

[Jest Getting Started](https://jestjs.io/es-ES/docs/next/getting-started)

[Obtén actualizaciones en tiempo real con Cloud Firestore](https://firebase.google.com/docs/firestore/query-data/listen?hl=es-419)

[Firebase Firestore (Version 9) CRUD con Javascript](https://www.youtube.com/watch?v=ey4k6mW9ds4&ab_channel=FaztCode)

[Autenticación con Firebase y Javascript](https://www.youtube.com/watch?v=Djh_eVj0D2w&ab_channel=Fazt)



