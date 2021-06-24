import logo from './img/logo.png';

function createDropdown(arr) {
  const container = document.createElement('div');
  container.classList.add('dropdown-menu');

  let itemLink;
  let itemAnchor;

  for(let i = 0; i < arr.length; i++) {
    itemLink = document.createElement('li');
    container.appendChild(itemLink);

    itemAnchor = document.createElement('a');
    itemAnchor.classList.add('dropdown-item');
    itemAnchor.setAttribute('href', '#');
    itemLink.appendChild(itemAnchor);
    itemAnchor.textContent = arr[i];
  }
  console.log('thingy');
  console.log(container);
  return container;
}

const mainNav = () => {
  const navclass = ['navbar', 'navbar-dark', 'bg-danger', 'justify-content-center', 'py-4'];
  const linksClass = ['text-decoration-none', 'text-dark', 'fs-5'];


  const nav = document.createElement('div');
  nav.classList.add(...navclass);

  const navCont = document.createElement('div');
  navCont.classList.add('container', 'row');

  const brandContainer = document.createElement('div');
  brandContainer.classList.add('col-auto');

  const brand = document.createElement('a');
  brand.classList.add('navbar-brand');
  brand.setAttribute('href', '#');

  const brandLogo = new Image();
  brandLogo.src = logo;
  brandLogo.setAttribute('width', '60');
  brandLogo.setAttribute('height', '48');

  const navlinks = document.createElement('div');
  navlinks.classList.add('col-7', 'row', 'justify-content-center');

  const dropdownCont = document.createElement('div');
  dropdownCont.classList.add('col-auto', 'dropdown');

  const dropdownLink = document.createElement('a');
  dropdownLink.classList.add(...linksClass, 'dropdown-toggle');
  dropdownLink.setAttribute('id', 'navDropdown');
  dropdownLink.setAttribute('data-bs-toggle', 'dropdown');
  dropdownLink.setAttribute('aria-expanded', 'false');
  dropdownLink.setAttribute('href', '');
  dropdownLink.textContent = 'LOCATIONS';

  const dropdownMenu = createDropdown(['Mexico', 'Australia', 'Germany']);
  dropdownMenu.setAttribute('aria-labelledby', 'navDropdown');

  const navlink2 = document.createElement('div');
  navlink2.classList.add('col-auto');

  const navlink2Anchor = document.createElement('a');
  navlink2Anchor.classList.add(...linksClass);
  navlink2Anchor.setAttribute('role', 'button');
  navlink2Anchor.textContent = 'EVENTS';

  const navlink3 = document.createElement('div');
  navlink3.classList.add('col-auto');

  const navlink3Anchor = document.createElement('a');
  navlink3Anchor.classList.add(...linksClass);
  navlink3Anchor.setAttribute('role', 'button');
  navlink3Anchor.textContent = 'CONTACT';

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('col-auto');

  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-outline-light', 'border-3', 'rounded-pill');
  btn.textContent = 'Online menu';

  nav.appendChild(navCont);
  navCont.appendChild(brandContainer);
  brandContainer.appendChild(brand);
  brand.appendChild(brandLogo);
  navCont.appendChild(navlinks);
  navlinks.appendChild(dropdownCont);
  dropdownCont.appendChild(dropdownLink);
  dropdownCont.appendChild(dropdownMenu);
  navlinks.appendChild(navlink2);
  navlink2.appendChild(navlink2Anchor);
  navlinks.appendChild(navlink3);
  navlink3.appendChild(navlink3Anchor);
  navCont.appendChild(btnContainer);
  btnContainer.appendChild(btn);
  
  return nav;
};

export default mainNav;