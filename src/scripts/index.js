import shoppingList from './shopping-list';
import '../styles/index.css';
import $ from 'jquery';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
