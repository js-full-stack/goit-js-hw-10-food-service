import foodServiceTemplate from '../template.hbs';
import menuList from '../menu.json';

const menuListRef = document.querySelector('.js-menu');
const markup = foodServiceTemplate(menuList);
menuListRef.insertAdjacentHTML('beforeend', markup);
