'use strict';
let data;

const getData = () => {
  fetch('../../api/board.json')
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.board.list.length; i++) {
        result.board.list[i].id = i;
      }
      data = result.board.list;
      console.log(data);
      paintList();
      return data;
    });
};

// getData();
