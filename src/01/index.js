'use strict';

const getlistContainer = document.getElementById('js-lists');
const createListItem = document.createElement('li');

createListItem.textContent = 'これです';
getlistContainer.appendChild(createListItem);
