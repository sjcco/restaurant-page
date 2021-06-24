import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import './main.scss';
import topNav from './topNav';
import mainNav from './mainNav';
import footer from './footer';
import contact from './contact';
import logo from './img/logo.png';


const content = document.querySelector('#content');
const nav = topNav();
const mainNavigation = mainNav();
const page = document.createElement('div');
page.classList.add('page-content');
const foot = footer();
const mycontact = contact();

const mylogo = new Image();
mylogo.src = logo;

content.appendChild(nav);
content.appendChild(mainNavigation);
content.appendChild(page);
page.appendChild(mycontact);
content.appendChild(foot);
