const reset = () => {
  const page = document.querySelector('#page-content');
  while (page.firstChild) {
    page.removeChild(page.lastChild);
  }
};

export default reset;