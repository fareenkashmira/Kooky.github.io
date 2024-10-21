document.addEventListener('DOMContentLoaded', function () {
  const gridViewButton = document.getElementById('grid-view');
  const listViewButton = document.getElementById('list-view');
  const productContainer = document.getElementById('product-container');

  gridViewButton.addEventListener('click', function () {
    productContainer.classList.add('grid-view');
    productContainer.classList.remove('list-view');
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
  });

  listViewButton.addEventListener('click', function () {
    productContainer.classList.add('list-view');
    productContainer.classList.remove('grid-view');
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');
  });
});
