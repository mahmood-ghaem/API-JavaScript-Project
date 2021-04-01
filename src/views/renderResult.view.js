'use strict';

export const renderResult = ({ name, country }) => {
  showFirstName(name);
  showEstimateCountry(country);
};
export const showError = (error) => {
  console.log(error);
};
const showFirstName = (firstName) => {
  console.log(firstName);
};
const showEstimateCountry = (countries) => {
  console.log(countries);
};
export const showChart = (chartImageUrl) => {
  console.log(chartImageUrl);
  // const imageFile = document.createElement('img');
  // imageFile.setAttribute('src', chartImageUrl);
  // document.body.appendChild(imageFile);
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
