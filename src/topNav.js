const topNav = () => {
  const navclass = ['navbar', 'navbar-dark', 'bg-dark', 'justify-content-center'];
  const linksclass = ['row', 'list-unstyled', 'mb-0'];
  const anchor = ['text-white', 'text-decoration-none'];
  const itemAnchorclass = ['text-decoration-none', 'text-white', 'd-block', 'w-100'];

  const nav = document.createElement('nav');
  nav.classList.add(...navclass);

  const navCont = document.createElement('div');
  navCont.classList.add('container', 'row');

  const navlinks = document.createElement('div');
  navlinks.classList.add('col-7');

  const links = document.createElement('ul');
  links.classList.add(...linksclass);

  const facelink = document.createElement('li');
  facelink.classList.add('col-auto');

  const faceAnchor = document.createElement('a');
  faceAnchor.classList.add(...anchor);
  faceAnchor.setAttribute('href', '#');

  const faceIcon = document.createElement('i');
  faceIcon.classList.add('fab', 'fa-facebook-f');

  const instalink = document.createElement('li');
  instalink.classList.add('col-auto');

  const instaAnchor = document.createElement('a');
  instaAnchor.classList.add(...anchor);
  instaAnchor.setAttribute('href', '#');

  const instaIcon = document.createElement('i');
  instaIcon.classList.add('fab', 'fa-instagram');

  const invoicinglink = document.createElement('li');
  invoicinglink.classList.add('col-auto');

  const invoicingAnchor = document.createElement('a');
  invoicingAnchor.classList.add(...anchor);
  invoicingAnchor.setAttribute('href', '#');

  const invoicingIcon = document.createElement('i');
  invoicingIcon.classList.add('fas', 'fa-receipt');
  const invoicingText = document.createTextNode(' e-invoicing');

  const navCarousel = document.createElement('div');
  navCarousel.classList.add('col-5');

  const carouselCont = document.createElement('div');
  carouselCont.classList.add('carousel', 'slide');
  carouselCont.setAttribute('data-bs-ride', 'carousel');

  const innerCarousel = document.createElement('div');
  innerCarousel.classList.add('carousel-inner');

  const pickupItem = document.createElement('div');
  pickupItem.classList.add('carousel-item', 'active');

  const pickupItemAnchor = document.createElement('a');
  pickupItemAnchor.classList.add(...itemAnchorclass);

  const pickupItemIcon = document.createElement('i');
  pickupItemIcon.classList.add('fas', 'fa-shopping-bag');

  const pickupItemText = document.createTextNode(' Order and pick up at your local restaurant');

  const shippingItem = document.createElement('div');
  shippingItem.classList.add('carousel-item');

  const shippingItemAnchor = document.createElement('a');
  shippingItemAnchor.classList.add(...itemAnchorclass);

  const shippingItemIcon = document.createElement('i');
  shippingItemIcon.classList.add('fas', 'fa-shipping-fast');

  const shippingItemText = document.createTextNode(' Order in uberEats, Didi and Rappi');

  nav.appendChild(navCont);
  navCont.appendChild(navlinks);
  navlinks.appendChild(links);
  links.appendChild(facelink);
  facelink.appendChild(faceAnchor);
  faceAnchor.appendChild(faceIcon);
  links.appendChild(instalink);
  instalink.appendChild(instaAnchor);
  instaAnchor.appendChild(instaIcon);
  links.appendChild(invoicinglink);
  invoicinglink.appendChild(invoicingAnchor);
  invoicingAnchor.appendChild(invoicingIcon);
  invoicingAnchor.appendChild(invoicingText);
  navCont.appendChild(navCarousel);
  navCarousel.appendChild(carouselCont);
  carouselCont.appendChild(innerCarousel);
  innerCarousel.appendChild(pickupItem);
  pickupItem.appendChild(pickupItemAnchor);
  pickupItemAnchor.appendChild(pickupItemIcon);
  pickupItemAnchor.appendChild(pickupItemText);
  innerCarousel.appendChild(shippingItem);
  shippingItem.appendChild(shippingItemAnchor);
  shippingItemAnchor.appendChild(shippingItemIcon);
  shippingItemAnchor.appendChild(shippingItemText);

  return nav;
};

export default topNav;