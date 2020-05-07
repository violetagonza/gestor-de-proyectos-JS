'use strict';

// edit
let clickedID;
let cardID;
let foundCard;

const handleCard = (ev) => {
  ev.stopPropagation();
  clickedID = ev.currentTarget.id;
  console.log(ev.currentTarget.id);
  for (const card of data.board.list) {
    console.log(card.cards);
    for (const item of card.cards) {
      if (item.id === clickedID) {
        foundCard = item;
      }
    }
  }
  console.log(foundCard);

  // document.querySelector('.js-edit').classList.toggle('show');
  // document.querySelector('.js-edit').classList.remove('d-none');
};

// escucho click en tarjeta
const listenCard = () => {
  document.querySelectorAll('.js-card, .js-edit-close').forEach((card) => {
    card.addEventListener('click', handleCard);
  });
};

// document.querySelectorAll('.js-card, .js-edit-close').forEach((card) => {
//   card.addEventListener('click', toggleEdit);
// });

// const preventEditClosing = (ev) => {
//   ev.stopPropagation();
// };

// document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);
