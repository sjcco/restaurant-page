import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import './main.scss';
import drawPage from './drawPage';
import reset from './reset';
import home from './home';
import contact from './contact';
import menu from './menu';

drawPage();
home();

const homelink = document.querySelector('#home');
homelink.onclick = () => {
  reset();
  home();
};

const contactlink = document.querySelector('#contact');
contactlink.onclick = () => {
  reset();
  contact();
};

const menulink = document.querySelector('#menu');
menulink.onclick = () => {
  reset();
  menu();
};
