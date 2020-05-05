'use strict';
let data;
fetch('../../api/board.json')
  .then((response) => response.json())
  .then((result) => {
    data = result;
    return data;
  });
