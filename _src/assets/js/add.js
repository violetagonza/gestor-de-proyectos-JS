'use strict';
let num = 0;
const handleAddCard = (ev) => {
  clickedID = ev.currentTarget.id;
  num += 10;
  for (let i = 0; i < data.length; i++) {
    console.log(num);
    if (data[i].id === parseInt(clickedID)) {
      data[i].cards.push({
        id: num.toString(),
        title: 'Título de la tarea',
        description: 'descripción de la tarea',
        tags: ['JS', 'Css', 'Html'],
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
