import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import './main.scss';
import topNav from './topNav';

const content = document.querySelector('#content');
const nav = topNav();

content.appendChild(nav);
