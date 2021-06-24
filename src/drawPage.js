import topNav from './topNav';
import mainNav from './mainNav';
import footer from './footer';

const content = document.querySelector('#content');

const drawPage = () => {
  const page = document.createElement('div');
  page.setAttribute('id', 'page-content');

  content.appendChild(topNav());
  content.appendChild(mainNav());
  content.appendChild(page);
  content.appendChild(footer());
};

export default drawPage;
