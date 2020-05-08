'use strict';
let num = 0;
const handleAddCard = (ev) => {
  clickedID = ev.currentTarget.id;
  for (let i = 0; i < data.length; i++) {
    console.log(num);
    if (data[i].id === parseInt(clickedID)) {
      data[i].cards.push({
        id: Date.now().toString(),
        title: 'Título de la tarea',
        description: 'descripción de la tarea',
        tags: ['JS', 'Css', 'Html'],
      });
    }
  }
  setInLS();
  paintList();
};

const handleAddCol = (ev) => {
  data.push({
    cards: [],
    id: Date.now(),
    title: 'Descripción',
  });
  setInLS();
  paintList();
};

// const listenAddCardbtn = () => {
//   document.querySelectorAll('.js-new-card-btn').forEach((btn) => {
//     btn.addEventListener('click', handleAddCard);
//   });
// };
// const listenAddColBtn = () => {
//   document.querySelector('.js-btn-add-col').addEventListener('click', handleAddCol);
// };
