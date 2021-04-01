'use strict';

export const renderResult = ({ name, country, chartImageUrl }) => {
  setTimeout(() => {
    deleteDynamicContentElements();
    showFirstName(name);
    showEstimateData(country, chartImageUrl);
  }, 1000);
};

export const showError = (error, firstName) => {
  deleteDynamicContentElements();
  showFirstName(firstName);

  const dynamicContent = document.querySelector('.dynamicContent');
  const div = document.createElement('div');
  div.classList.add('row', 'm-5', 'error');
  div.innerHTML = `
<div class="col-md-6 p-5">
  <div class="d-flex p-5">
    <i class="fas fa-exclamation-circle"></i>
    <div>
      <h2>Some thing was wrong</h2>
      <p>
        ${error}
      </p>
    </div>
  </div>
</div>`;
  dynamicContent.appendChild(div);
  changeDynamicContentVisibility(true);
  showLoading(false);
};

const showFirstName = (firstName) => {
  const dynamicContent = document.querySelector('.dynamicContent');
  const h1 = document.createElement('h1');
  const span = document.createElement('span');
  span.textContent = `Predict the nationality of "${firstName.toUpperCase()}"`;
  h1.classList.add('text-center', 'm-5');
  h1.appendChild(span);
  dynamicContent.appendChild(h1);
};

const showEstimateData = (countries, chartImageUrl) => {
  const dynamicContent = document.querySelector('.dynamicContent');
  const div = document.createElement('div');
  div.classList.add('row', 'm-5', 'intro');
  div.innerHTML = `
<div class="col-md-6 p-5">
  <div class="d-flex p-5">
    <i class="far fa-edit"></i>
    <div>
      <h2>Result</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex
        asperiores doloribus a temporibus quos sint aperiam? Vitae quisquam
        molestiae quod qui. Fugiat quisquam repellendus nobis recusandae,
        quam odio hic?
      </p>
    </div>
  </div>
  <div class="ms-5 ps-5">
    <div class="d-flex ps-5 pb-3">
      <div class="numberCircle">1</div>
      <div class="ms-4">
        <h3>Country: ${countries[0].country_id}</h3>
        <p>probability: ${Math.round(countries[0].probability)}%</p>
      </div>
    </div>
    <div class="d-flex ps-5 pb-3">
      <div class="numberCircle">2</div>
      <div class="ms-4">
      <h3>Country: ${countries[1].country_id}</h3>
      <p>probability: ${Math.round(countries[1].probability)}%</p>
      </div>
    </div>
    <div class="d-flex ps-5 pb-3">
      <div class="numberCircle">3</div>
      <div class="ms-4">
      <h3>Country: ${countries[2].country_id}</h3>
      <p>probability: ${Math.round(countries[2].probability)}%</p>
      </div>
    </div>
  </div>
</div>
<div class="col-md-6 p-5">
  <img
    id="image_chart"
    src="${chartImageUrl}"
    alt="image-chart"
  />
</div>`;
  dynamicContent.appendChild(div);
};

const deleteDynamicContentElements = () => {
  const dynamicContent = document.querySelector('.dynamicContent');
  dynamicContent.textContent = '';
};

export const changeDynamicContentVisibility = (toggle) => {
  const dynamicContent = document.querySelector('.dynamicContent');
  switch (toggle) {
    case true:
      dynamicContent.classList.remove('hidden');
      break;
    case false:
      dynamicContent.classList.add('hidden');
      break;
  }
};

export const showLoading = (toggle) => {
  const loading = document.querySelector('.loading');

  switch (toggle) {
    case true:
      loading.classList.remove('loaded');
      break;
    case false:
      loading.classList.add('loaded');
      break;
  }
};
