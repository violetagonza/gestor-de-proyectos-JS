'use strict';
const getMain = document.querySelector('.js-main');

const paintList = () => {
  //Generate code for columns
  let htmlCode = '';
  for (const item of data) {
    htmlCode += `<div class="app-list">`;
    htmlCode += ` <div class="p-1 rounded-sm bg-primary shadow">`;
    htmlCode += ` <form class="app-list-form align-middle p-1 position-relative">`;
    htmlCode += ` <input id=${item.id} value='${item.title}' class="js-list app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" title="Editar el título de la lista" />`;
    htmlCode += `<div class="app-list-options">`;
    htmlCode += ` <span class="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>`;
    htmlCode += ` <div class="app-list-btns btn-group btn-group-sm">`;
    htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm" title="Borrar esta tarjeta">`;
    htmlCode += `<span class="fas fa-trash-alt"></span>`;
    htmlCode += `</button>`;
    htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-left" title="Mover esta lista hacia la izquierda">`;
    htmlCode += `<span class="fas fa-arrow-left"></span>`;
    htmlCode += `</button>`;
    htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-right" title="Mover esta lista hacia la derecha">`;
    htmlCode += `<span class="fas fa-arrow-right"></span>`;
    htmlCode += `</button>`;
    htmlCode += `</div>`;
    htmlCode += `</div>`;
    htmlCode += `</form>`;

    //generate code for cards
    for (const card of item.cards) {
      htmlCode += `<article id=${card.id} class="js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm" title="Abrir la tarjeta">`;
      htmlCode += `<div>`;

      //Generate code for tags
      for (const tag of card.tags) {
        htmlCode += `<span class="badge badge-secondary bg-success">${tag}</span>`;
      }

      htmlCode += `</div>`;
      htmlCode += `<div>`;
      htmlCode += `<h3 class="h6">${card.title}</h3>`;
      htmlCode += `</div>`;
      htmlCode += `<div class="text-black-50">`;
      htmlCode += `<small class="pr-2 fas fa-align-left"></small>`;
      htmlCode += `<small class="far fa-check-square"></small>`;
      htmlCode += `<small title="Subtareas completadas: 3 de 5">3/5</small>`;
      htmlCode += `</div>`;
      htmlCode += `<div class="app-card-btns btn-group-vertical btn-group-sm">`;
      htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-up" title="Mover esta tarjeta hacia abajo">`;
      htmlCode += `<span class="fas fa-arrow-up"></span>`;
      htmlCode += `</button>`;
      htmlCode += `<button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-down" title="Mover esta tarjeta hacia arriba">`;
      htmlCode += `<span class="fas fa-arrow-down"></span>`;
      htmlCode += `</button>`;
      htmlCode += `</div>`;
      htmlCode += `</article>`;
    }
    htmlCode += `<button type="button" id=${item.id} class="js-new-card-btn ml-1 btn btn-primary btn-sm text-white-50" title="Añadir una nueva tarjeta">`;
    htmlCode += `<span class="fas fa-plus"></span>`;
    htmlCode += `Añadir otra tarjeta`;
    htmlCode += `</button>`;
    htmlCode += `</div>`;
    htmlCode += `</div>`;
  }
  htmlCode += `<div>
  <button type="button" class="btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm" title="Añadir una nueva lista">
    <span class="fas fa-plus"></span>
  </button>
</div>`;

  getMain.innerHTML = htmlCode;

  //Add listener to cards
  listenListInput();
  listenCard();
  listenAddCardbtn();
};
