import food1 from './img/food1.jpg';
import food3 from './img/food3.jpg';
import food4 from './img/food4.jpg';

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

const home = () => {
  const container = document.createElement('div');
  container.classList.add('position-relative', 'd-flex', 'justify-content-center');

  const carouselCont = document.createElement('div');
  carouselCont.classList.add('carousel', 'slide', 'col-7');
  carouselCont.setAttribute('data-bs-ride', 'carousel');

  const carouselInner = createCarousel([food1, food3, food4]);
  carouselInner.classList.add('carousel-inner');

  const absoluteCont = document.createElement('div');
  absoluteCont.classList.add('position-absolute', 'w-100');

  const rowCont = document.createElement('div');
  rowCont.classList.add('row', 'justify-content-center', 'w-100');

  const text1 = document.createElement('h1');
  text1.classList.add('col-7', 'display-1', 'px-0', 'text-white', 'text-center', 'fw-bold', 'mt-5');
  text1.textContent = '2x1';

  const text2 = document.createElement('h1');
  text2.classList.add('col-7', 'display-1', 'px-0', 'text-white', 'text-center', 'fw-bold', 'mt-5');
  text2.textContent = 'Tuesdays and Thursdays';

  container.appendChild(carouselCont);
  carouselCont.appendChild(carouselInner);
  container.appendChild(absoluteCont);
  absoluteCont.appendChild(rowCont);
  rowCont.appendChild(text1);
  rowCont.appendChild(text2);

  return container;
};

export default home;