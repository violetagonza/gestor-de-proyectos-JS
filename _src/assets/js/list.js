'use strict';
const getMain = document.querySelector('.js-main');

const paintList = () => {
  let htmlCode = '';

  for (const item of data.board.list) {
    htmlCode += ` <div class="p-1 rounded-sm bg-primary shadow">`;
    htmlCode += ` <form class="app-list-form align-middle p-1 position-relative">`;
    htmlCode += ` <input value='${item.title}' class="js-list app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" title="Editar el título de la lista" />`;
    htmlCode += `       <div class="app-list-options">
          <span class="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>
          <div class="app-list-btns btn-group btn-group-sm">
            <button type="button" class="btn btn-light text-muted border shadow-sm" title="Borrar esta tarjeta">
              <span class="fas fa-trash-alt"></span>
            </button>
            <button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-left" title="Mover esta lista hacia la izquierda">
              <span class="fas fa-arrow-left"></span>
            </button>
            <button type="button" class="btn btn-light text-muted border shadow-sm app-list-move-right" title="Mover esta lista hacia la derecha">
              <span class="fas fa-arrow-right"></span>
            </button>
          </div>
          </div>
          </form>`;
    for (const card of item.cards) {
      htmlCode += `<article class="js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm" title="Abrir la tarjeta">
      <div>
        <span class="badge badge-secondary bg-success">JS</span>
        <span class="badge badge-secondary bg-success">Css</span>
        <span class="badge badge-secondary bg-success">Html</span>
      </div>
    
      <div>
        <h3 class="h6">${card.title}</h3>
      </div>
    
      <div class="text-black-50">
        <small class="pr-2 fas fa-align-left"></small>
        <small class="far fa-check-square"></small>
        <small title="Subtareas completadas: 3 de 5">3/5</small>
      </div>
    
      <div class="app-card-btns btn-group-vertical btn-group-sm">
        <button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-up" title="Mover esta tarjeta hacia abajo">
          <span class="fas fa-arrow-up"></span>
        </button>
        <button type="button" class="btn btn-light text-muted border shadow-sm app-card-move-down" title="Mover esta tarjeta hacia arriba">
          <span class="fas fa-arrow-down"></span>
        </button>
      </div>
    </article>`;
    }
    htmlCode += `</div>`;
  }

  getMain.innerHTML = htmlCode;
  paintCard();
};
