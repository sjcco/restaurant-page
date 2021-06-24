import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import './main.scss';
import topNav from './topNav';
import mainNav from './mainNav';
import logo from './img/logo.png';

const content = document.querySelector('#content');
const nav = topNav();
const mainNavigation = mainNav();

const mylogo = new Image();
mylogo.src = logo;

content.appendChild(nav);
content.appendChild(mainNavigation);
content.appendChild(mylogo);
