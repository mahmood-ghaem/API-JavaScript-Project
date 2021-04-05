'use strict';

import { changePages } from '../logic/changePages.logic.js';
import { changeContentDisplay } from '../views/manipulationDom.view.js';

export const renderResult = ({ name, countryWithDetails, chartImageUrl }) => {
  changePages('result');
  showEstimateData(name, countryWithDetails, chartImageUrl);
};

const showEstimateData = (name, countries, chartImageUrl) => {
  document.querySelector(
    '#result_header',
  ).textContent = `Predict the nationality of "${name.toUpperCase()}"`;

  document.title = `Predict the nationality of "${name.toUpperCase()}"`;

  clearResultElements();
  window.history.replaceState(null, null, `?name=${name}`);
  document.querySelector('.share-link-text').textContent = document.URL;
  // document.querySelector(
  //   '.share-link-text',
  // ).textContent = `${document.URL.substr(
  //   0,
  //   document.URL.indexOf('.html'),
  // )}.html?name=${name}`;

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
    } else if (countries[i].name === '' || countries[i].name === undefined) {
      document.querySelector(`#country${i}`).textContent = 'Other countries';
    } else {
      document.querySelector(`#country${i}`).textContent =
        countries[i].country_id;
    }
    if (countries[i].population != undefined) {
      document.querySelector(
        `#population${i}`,
      ).textContent = `Population: ${countries[i].population}`;
    }
    document.querySelector(
      `#probability${i}`,
    ).textContent = `probability: ${Math.round(countries[i].probability)}%`;
  }

  if (chartImageUrl == '') {
    showImageChartError();
    changeContentDisplay(false, 'image-chart');
  } else {
    document.querySelector('#image_chart').setAttribute('src', chartImageUrl);
    changeContentDisplay(true, 'image-chart');
  }
};

const clearResultElements = () => {
  for (let i = 0; i < 3; i++) {
    document.querySelector(`#flag${i}`).setAttribute('src', '');
    document.querySelector(`#flag${i}`).setAttribute('alt', '');
    document.querySelector(`#country${i}`).textContent = '';
    document.querySelector(`#population${i}`).textContent = 'Population: ';
    document.querySelector(`#probability${i}`).textContent = 'probability: ';
  }
  document.querySelector('.link-copied-hint').classList.add('hidden');
  document.querySelector('.share-link-text').textContent = '';
  // document.location.href = `${document.URL.substr(
  //   0,
  //   document.URL.indexOf('.html'),
  // )}.html`;
};

export const showError = (error, firstName) => {
  changePages('error');
  document.querySelector(
    '#error_header',
  ).textContent = `Predict the nationality of "${firstName.toUpperCase()}"`;

  document.querySelector(
    '#error_text',
  ).textContent = `Error received from the system: ${error}`;
};

const showImageChartError = () => {
  const imageChart = document.querySelector('.image-chart-error');
  const divParent = document.createElement('div');
  divParent.classList.add('d-flex', 'p-5');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-exclamation-circle');
  const h2 = document.createElement('h2');
  h2.textContent = 'Some thing was wrong';
  const p = document.createElement('p');
  p.textContent = 'Can not load image chart!';
  const divChild = document.createElement('div');

  divChild.appendChild(h2);
  divChild.appendChild(p);
  divParent.appendChild(icon);
  divParent.appendChild(divChild);
  imageChart.appendChild(divParent);
};
