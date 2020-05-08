'use strict';

const handleModalDel = (ev) => {
  changedEl = ev.currentTarget.id;

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

const handleDelCol = (ev) => {
  changedEl = ev.currentTarget.id;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].id, changedEl);
    if (data[i].id === parseInt(changedEl)) {
      data.splice(i, 1);
    }
  }
  setInLS();
  paintList();
};
