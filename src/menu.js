import menu1 from './img/menu1.jpeg';
import menu2 from './img/menu2.jpeg';

function createCarousel(arr) {
  const container = document.createElement('div');

  let carouselItem;
  let img;

  for (let i = 0; i < arr.length; i += 1) {
    carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (i === 0) {
      carouselItem.classList.add('active');
    }

    img = new Image();
    img.src = arr[i];
    img.classList.add('d-block', 'w-100');
    img.setAttribute('alt', '...');

    carouselItem.appendChild(img);
    container.appendChild(carouselItem);
  }
  return container;
}

const menu = () => {
  const container = document.createElement('div');
  container.classList.add('d-flex', 'justify-content-center');

  const carouselCont = document.createElement('div');
  carouselCont.classList.add('carousel', 'slide', 'col-7');
  carouselCont.setAttribute('data-bs-ride', 'carousel');

  const carousel = createCarousel([menu1, menu2]);
  carousel.classList.add('carousel-inner');

  container.appendChild(carouselCont);
  carouselCont.appendChild(carousel);

  const page = document.querySelector('#page-content');

  page.appendChild(container);
};

export default menu;