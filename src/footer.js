const footer = () => {
  const content = document.createElement('footer');
  content.classList.add('footer', 'bg-dark');

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-center', 'p-4', 'text-light');
  textContainer.textContent = '© 2021 Copyright:';

  const copyrightAnchor = document.createElement('a');
  copyrightAnchor.classList.add('text-white', 'fw-bold', 'text-decoration-none');
  copyrightAnchor.textContent = ' Made by Carlos Campos';

  content.appendChild(textContainer);
  textContainer.appendChild(copyrightAnchor);


  return content;
};

export default footer;