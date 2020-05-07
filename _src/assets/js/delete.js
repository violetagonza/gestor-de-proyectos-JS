'use strict';

const handleModalDel = (ev) => {
  changedEl = ev.currentTarget.id;
  console.log(changedEl);

  for (const item of data) {
    for (let i = 0; i < item.cards.length; i++) {
      if (item.cards[i].id === changedEl) {
        item.cards.splice(i, 1);
      }
    }
  }
  setInLS();
  paintList();
};
