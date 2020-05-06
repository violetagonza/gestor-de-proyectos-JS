'use strict';
const getMain = document.querySelector('.js-main');

const paintList = () => {
  let htmlCode = '';
  for (const name of data.board.list) {
    htmlCode += `
    <div class="js-list p-1 rounded-sm bg-primary shadow">
    <form class="app-list-form align-middle p-1 position-relative">
    <input value=${name.title} class="js-list app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" title="Editar el título de la lista" />
    <div class="app-list-options">
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
  </form>
    </div>`;
  }

  getMain.innerHTML = htmlCode;
  paintCard();
};
