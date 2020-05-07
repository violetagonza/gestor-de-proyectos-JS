'use strict';

let clickedID;
let foundCard;
let newArticle;

//handle click on card
const handleCard = (ev) => {
  ev.stopPropagation();

  //search cliked card
  clickedID = ev.currentTarget.id;
  for (const card of data) {
    for (const item of card.cards) {
      if (item.id === clickedID) {
        foundCard = item;
      }
    }
  }

  // Add modal container
  newArticle = document.createElement('article');
  newArticle.className = 'js-edit js-edit-close app-edit modal show';
  getMain.appendChild(newArticle);
  //Add modal code
  paintModal();
};

// Generate modal's code
const paintModal = () => {
  const getModal = document.querySelector('.js-edit');
  let htmlCode = '';
  htmlCode += `<section class="js-edit-modal modal-dialog modal-dialog-centered modal-lg">`;
  htmlCode += `<div class="modal-content bg-light shadow border-0">`;
  htmlCode += ` <form>`;
  htmlCode += ` <div class="modal-header border-bottom-0">`;
  htmlCode += `<h5 class="modal-title d-flex w-100">`;
  htmlCode += `<span class="fas fa-columns mt-3 mr-2 text-muted"></span>`;
  htmlCode += `<div class="w-100">`;
  htmlCode += `<input id=${foundCard.id} class="js-modal-title app-edit-title form-control mb-0 border-0" placeholder="Filtrar tarjetas" type="text" value="${foundCard.title}" />`;
  htmlCode += `<small class="app-edit-subtitle d-block mt-0 text-muted"> en la lista <strong>Por hacer</strong> </small>`;
  htmlCode += `</div>`;
  htmlCode += `</h5>`;
  htmlCode += `<button type="button" class="js-edit-close js-close-modal close" data-dismiss="modal">`;
  htmlCode += `<span>&times;</span>`;
  htmlCode += `</button>`;
  htmlCode += `</div>`;
  htmlCode += ` <div class="modal-body">`;
  htmlCode += `<div class="row">`;
  htmlCode += `<div class="col-xl-9 col-8">`;
  htmlCode += `<div class="container-fluid mb-4">`;
  htmlCode += `<div class="row">`;
  htmlCode += `<div class="col-1 pl-0 pr-0">`;
  htmlCode += `<span class="fas fa-align-left text-muted"></span>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="col-11 pl-0 pr-0">`;
  htmlCode += `<h6 class="h6">Descripción</h6>`;
  htmlCode += `<textarea id=${foundCard.id} class="app-edit-textarea js-modal-textarea">`;
  htmlCode += `"${foundCard.description}"`;
  htmlCode += `</textarea>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="container-fluid mb-4">`;
  htmlCode += `<div class="row">`;
  htmlCode += `<div class="col-1 pl-0 pr-0">`;
  htmlCode += `<span class="far fa-check-square text-muted"></span>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="col-11 pl-0 pr-0">`;
  htmlCode += `<h6 class="h6 mb-3">Subtareas: completadas 3 de 5</h6>`;
  htmlCode += `<div class="app-edit-progress progress mb-3">`;
  htmlCode += `<div class="progress-bar" style="width: 60%;"></div>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="custom-control custom-checkbox mb-2">`;
  htmlCode += `<input class="custom-control-input" type="checkbox" checked id="subtask-1" />`;
  htmlCode += `<label class="custom-control-label" for="subtask-1">`;
  htmlCode += `Unificar los eventos`;
  htmlCode += `</label>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="custom-control custom-checkbox mb-2">`;
  htmlCode += `<input class="custom-control-input" type="checkbox" checked id="subtask-2" />`;
  htmlCode += `<label class="custom-control-label" for="subtask-2">`;
  htmlCode += `Unificar las clases de la cabecera`;
  htmlCode += `</label>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="custom-control custom-checkbox mb-2">`;
  htmlCode += `<input class="custom-control-input" type="checkbox" id="subtask-3" />`;
  htmlCode += `<label class="custom-control-label" for="subtask-3">`;
  htmlCode += `Unificar las clases de las tarjetas`;
  htmlCode += `</label>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="custom-control custom-checkbox mb-2">`;
  htmlCode += `<input class="custom-control-input" type="checkbox" checked id="subtask-4" />`;
  htmlCode += `<label class="custom-control-label" for="subtask-4">`;
  htmlCode += `Unificar las funciones de datos`;
  htmlCode += `</label>`;
  htmlCode += `</div>`;
  htmlCode += `<div class="custom-control custom-checkbox mb-2">`;
  htmlCode += `<input class="custom-control-input" type="checkbox" id="subtask-5" />`;
  htmlCode += `<label class="custom-control-label" for="subtask-5">`;
  htmlCode += `Unificar las estilos`;
  htmlCode += `</label>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;

  htmlCode += ` <div class="col-xl-3 col-4">`;
  htmlCode += `<h6 class="h6 text-uppercase">Etiquetas</h6>`;
  htmlCode += `<div class="mb-4">`;
  for (const item of foundCard.tags) {
    htmlCode += `<span class="badge badge-secondary bg-success">${item}</span>`;
  }
  htmlCode += `</div>`;
  htmlCode += `<h6 class="h6 text-uppercase">Acciones</h6>`;
  htmlCode += `<button type="button" class="btn btn-primary btn-sm mb-2 w-100 text-left">`;
  htmlCode += `<span class="fas fa-copy mr-2"></span>`;
  htmlCode += `Duplicar`;
  htmlCode += `</button>`;
  htmlCode += `<button type="button" class="btn btn-primary btn-sm mb-2 w-100 text-left">`;
  htmlCode += `<span class="fas fa-share-alt mr-2"></span>`;
  htmlCode += `Mover`;
  htmlCode += `</button>`;
  htmlCode += `<button type="button" class="btn btn-primary btn-sm mb-2 w-100 text-left">`;
  htmlCode += `<span class="fas fa-trash-alt mr-2"></span>`;
  htmlCode += `Borrar`;
  htmlCode += `</button>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `</div>`;
  htmlCode += `</form>`;
  htmlCode += `</div>`;
  htmlCode += `</section>`;
  getModal.innerHTML = htmlCode;
  listenModalItems();
};

// Handle close btn
const handleBtn = () => {
  newArticle.remove();
};

// Add listeners to modal
const listenModalItems = () => {
  const btn = document.querySelector('.js-close-modal');
  btn.addEventListener('click', handleBtn);
  const titleInput = document.querySelector('.js-modal-title');
  titleInput.addEventListener('change', handleModalTitle);
  const descInput = document.querySelector('.js-modal-textarea');
  descInput.addEventListener('change', handleModalDesc);
};

// Add listener to card
const listenCard = () => {
  document.querySelectorAll('.js-card, .js-edit-close').forEach((card) => {
    card.addEventListener('click', handleCard);
  });
};
