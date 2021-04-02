'use strict';

import {
  changeContentVisibility,
  changeContentDisplay,
  showLoading,
} from '../views/manipulationDom.view.js';

export const renderResult = ({ name, country, chartImageUrl }) => {
  setTimeout(() => {
    deleteIntroContent();
    showEstimateData(name, country, chartImageUrl);
  }, 1000);
};

export const showError = (error, firstName) => {
  deleteIntroContent();
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
  changeContentVisibility(true, 'resultContent');
  showLoading(false);
};

const showImageChartError = () => {
  const intro = document.querySelector('.intro');
  const div = document.createElement('div');
  div.classList.add('col-md-6', 'p-5', 'error');
  div.innerHTML = `
<div class="d-flex p-5">
  <i class="fas fa-exclamation-circle"></i>
  <div>
    <h2>Some thing was wrong</h2>
    <p>
      Can not load image chart!
    </p>
  </div>
</div>`;
  intro.appendChild(div);
};

const showEstimateData = (name, countries, chartImageUrl) => {
  document.querySelector(
    '#result_header',
  ).textContent = `Predict the nationality of "${name.toUpperCase()}"`;

  for (let i = 0; i < 3; i++) {
    if (countries[i].flag != undefined) {
      document
        .querySelector(`#flag${i}`)
        .setAttribute('src', countries[i].flag);
      document
        .querySelector(`#flag${i}`)
        .setAttribute('alt', countries[i].name);
    }
    if (countries[i].name != undefined) {
      document.querySelector(`#country${i}`).textContent = countries[i].name;
    } else {
      document.querySelector(`#country${i}`).textContent =
        countries[i].country_id;
    }
    if (countries[i].population != undefined) {
      document.querySelector(`#population${i}`).textContent =
        countries[i].population;
    }
    document.querySelector(`#probability${i}`).textContent =
      countries[i].probability;
  }

  if (chartImageUrl == '') {
    showImageChartError();
  } else {
    document.querySelector('#image_chart').setAttribute('src', chartImageUrl);
  }
};
