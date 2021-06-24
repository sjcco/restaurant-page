import contactImg from './img/contactUs.jpg';

const h3 = ['LOCATION', 'E-MAIL', 'PHONE'];
const p = ['742 Evergreen Terrace', 'chef@mail.com', '555-555-5555'];

function addElements(elem, h3arr, parr) {
  let h3;
  let p;

  for (let i = 0; i < h3arr.length; i += 1) {
    h3 = document.createElement('h3');
    h3.classList.add('fw-bold', 'fs-6');
    h3.textContent = h3arr[i];

    p = document.createElement('p');
    p.classList.add('fs-6');
    p.textContent = parr[i];

    elem.appendChild(h3);
    elem.appendChild(p);
  }
}

function createForm(type, label) {
  const form = document.createElement('form');
  form.classList.add('mt-5');

  let cont;
  let input;
  let inputLabel;

  for (let i = 0; i < type.length; i += 1) {
    cont = document.createElement('div');
    cont.classList.add('form-floating', 'mb-3');

    input = document.createElement('input');
    input.setAttribute('type', type[i]);
    input.classList.add('form-control');
    input.setAttribute('id', label[i]);
    input.setAttribute('placeholder', label[i]);

    inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', label[i]);
    inputLabel.textContent = label[i];

    form.appendChild(cont);
    cont.appendChild(input);
    cont.appendChild(inputLabel);
  }
  return form;
}

const contact = () => {
  const container = document.createElement('div');
  container.classList.add('container', 'my-4');

  const rowCont = document.createElement('div');
  rowCont.classList.add('row', 'justify-content-center');

  const contactCont = document.createElement('div');
  contactCont.classList.add('col-5', 'd-flex', 'flex-column', 'me-2');

  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('display-4', 'text-danger');
  contactTitle.textContent = 'CONTACT US';

  const contactDescription = document.createElement('p');
  contactDescription.textContent = 'For more information about our Restaurants, do not hesitate to contact us';

  const img = new Image();
  img.src = contactImg;
  img.classList.add('img-fluid');

  const formCont = document.createElement('div');
  formCont.classList.add('col-5', 'ms-2', 'mt-4');

  const form = createForm(['email', 'text', 'number'], ['email', 'name', 'phone']);

  const textareaCont = document.createElement('div');
  textareaCont.classList.add('form-floating', 'mb-3');

  const textarea = document.createElement('textarea');
  textarea.classList.add('form-control');
  textarea.placeholder = 'Leave a comment here';
  textarea.setAttribute('id', 'text');
  textarea.setAttribute('style', 'height: 100px');

  const textareaLabel = document.createElement('label');
  textareaLabel.setAttribute('for', 'text');

  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-danger', 'text-white');
  btn.textContent = 'Send';

  container.appendChild(rowCont);
  rowCont.appendChild(contactCont);
  contactCont.appendChild(contactTitle);
  contactCont.appendChild(contactDescription);
  addElements(contactCont, h3, p);
  contactCont.appendChild(img);
  rowCont.appendChild(formCont);
  formCont.appendChild(form);
  form.appendChild(textareaCont);
  textareaCont.appendChild(textarea);
  textareaCont.appendChild(textareaLabel);
  form.appendChild(btn);

  return container;
};

export default contact;