'use strict';

// Handle list input
let changedEl;
const handleListInput = (ev) => {
  //Find changed list
  changedEl = ev.currentTarget.id;
  for (const item of data) {
    if (item.id === parseInt(changedEl)) {
      //change array info with value
      item.title = ev.currentTarget.value;
    }
  }
  setInLS();
};
// listen list input
const listenListInput = () => {
  document.querySelectorAll('.js-list').forEach((input) => {
    input.addEventListener('keyup', handleListInput);
  });
};

// handle modal input

//Handle modal title input
const handleModalTitle = (ev) => {
  changedEl = ev.currentTarget.id;
  for (const item of data) {
    for (const card of item.cards) {
      if (card.id === changedEl) {
        card.title = ev.currentTarget.value;
      }
    }
  }
  setInLS();
};

//Handle modal textarea

const handleModalDesc = (ev) => {
  changedEl = ev.currentTarget.id;
  for (const item of data) {
    for (const card of item.cards) {
      if (card.id === changedEl) {
        card.description = ev.currentTarget.value;
      }
    }
  }
  setInLS();
};
