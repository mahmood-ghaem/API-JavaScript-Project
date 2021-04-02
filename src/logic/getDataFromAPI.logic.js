'use strict';

import {
  estimateNationalityAddress,
  imageChartPrefixAddress,
  imageChartPostfixAddress,
  restCountriesAPI,
} from '../data.js';

import { getData, getImageFile } from '../utils/API.util.js';

export const getCountries = () => {
  const firstName = document.getElementById('first_name_input').value;

  return getData(estimateNationalityAddress + firstName)
    .then()
    .catch((error) => {
      showError(error, firstName);
    });
};

export const getChart = (countries) => {
  const chartLinkAddress = createChartLinkAddress(countries);

  return getImageFile(chartLinkAddress)
    .then((image) => {
      return URL.createObjectURL(image);
    })
    .catch((error) => {
      return '';
    });
};

export const getCountryDetails = (countryId) => {
  return getData(restCountriesAPI + countryId)
    .then()
    .catch((error) => {});
};

const createChartLinkAddress = (countries) => {
  const chartLabels = [];
  const chartProbabilities = [];

  countries.forEach((country) => {
    chartLabels.push(country.country_id);
    chartProbabilities.push(country.probability);
  });

  return `${imageChartPrefixAddress}&chd=t:${chartProbabilities.join(
    ',',
  )}&chl=${chartLabels.join('|')}${imageChartPostfixAddress}`;
};
