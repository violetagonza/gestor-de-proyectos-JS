'use strict';

const handleAddCard = (ev) => {
  clickedID = ev.currentTarget.id;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === parseInt(clickedID)) {
      data[i].cards.push({
        id: i + '-n',
        description: 'descripción de la tarea',
        tags: ['JS', 'Css', 'Html'],
        title: 'Título de la tarea',
      });
    }
  }
  setInLS();
  paintList();
};

const listenAddCardbtn = () => {
  document.querySelectorAll('.js-new-card-btn').forEach((btn) => {
    btn.addEventListener('click', handleAddCard);
  });
};
