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

export const showLoading = (toggle) => {
  switch (toggle) {
    case true:
      console.log('Loading start');
      break;
    case false:
      console.log('Loading end');
      break;
  }
};
