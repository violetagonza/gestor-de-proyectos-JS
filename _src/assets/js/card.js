'use strict';
const paintCard = () => {
  const getList = document.querySelectorAll('.js-list');
  let newArticle;
  newArticle = document.createElement('article');
  const articleContent = document.createTextNode('cosas');
  newArticle.appendChild(articleContent);

  for (const item of getList) {
    item.appendChild(newArticle);
  }
};
