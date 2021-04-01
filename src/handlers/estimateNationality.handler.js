'use strict';

import {
  estimateNationalityAddress,
  imageChartPrefixAddress,
  imageChartPostfixAddress,
} from '../data.js';

import { getData, getImageFile } from '../utils/API.util.js';

import {
  renderResult,
  showError,
  changeDynamicContentVisibility,
  showLoading,
} from '../views/renderResult.view.js';

/**
 * @estimateNationality
 * Fetch data from https://nationalize.io/
 * to estimate the nationality of a first name
 */

export const estimateNationality = async () => {
  const firstName = document.getElementById('first_name_input').value;
  changeDynamicContentVisibility(false);
  showLoading(true);
  const { name, country } = await getCountries();

  if (country != undefined) {
    changeProbabilityPercent(country);
    const chartImageUrl = await getChart(country);
    renderResult({ name, country, chartImageUrl });

    setTimeout(() => {
      showLoading(false);
      changeDynamicContentVisibility(true);
    }, 1000);
  } else {
    showError('Request error!', firstName);
    //throw new Error('Request error!');
  }
};

const getCountries = () => {
  const firstName = document.getElementById('first_name_input').value;

  return getData(estimateNationalityAddress + firstName)
    .then()
    .catch((error) => {
      showError(error, firstName);
      throw new Error(error);
    });
};

const getChart = (countries) => {
  const chartLinkAddress = createChartLinkAddress(countries);
  console.log(chartLinkAddress);

  try {
    return getImageFile(chartLinkAddress)
      .then((image) => {
        return URL.createObjectURL(image);
      })
      .catch((error) => {
        return './public/images/chart_error.png';
        //throw new Error('There is a problem: ', error);
      });
  } catch (error) {
    //showError(error);
  }
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

const changeProbabilityPercent = (countries) => {
  const chartLabels = [];
  const chartProbabilities = [];

  countries.forEach((country) => {
    chartLabels.push(country.country_id);
    chartProbabilities.push(country.probability);
  });
  const probabilitiesSum = chartProbabilities.reduce(
    (total, num) => total + num,
  );
  countries.forEach((country) => {
    country.probability = (country.probability * 100) / probabilitiesSum;
  });

  //return countries;
};
