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
  showLoading,
  showChart,
} from '../views/renderResult.view.js';

/**
 * @estimateNationality
 * Fetch data from https://nationalize.io/
 * to estimate the nationality of a first name
 */

export const estimateNationality = async () => {
  showLoading(true);

  const { name, country } = await getCountries();
  renderResult({ name, country });

  const chartImageUrl = await getChart(country);
  showChart(chartImageUrl);

  showLoading(false);
};

const getCountries = () => {
  const firstName = document.getElementById('first_name_input').value;

  try {
    return getData(estimateNationalityAddress + firstName)
      .then()
      .catch((error) => {
        throw new Error('There is a problem: ', error);
      });
  } catch (error) {
    showError(error);
  }
};

const getChart = (countries) => {
  const chartLinkAddress = createChartLinkAddress(countries);
  try {
    return getImageFile(chartLinkAddress)
      .then((image) => {
        return URL.createObjectURL(image);
      })
      .catch((error) => {
        throw new Error('There is a problem: ', error);
      });
  } catch (error) {
    showError(error);
  }
};

const createChartLinkAddress = (countries) => {
  const chartLabels = [];
  const chartProbabilities = [];

  countries.forEach((country) => {
    chartLabels.push(country.country_id);
    chartProbabilities.push(country.probability);
  });
  const probabilitiesSum = chartProbabilities.reduce((total, num) => {
    return total + num;
  });
  const chartProbabilitiesPercent = chartProbabilities.map((probability) => {
    return (probability * 100) / probabilitiesSum;
  });

  return `${imageChartPrefixAddress}&chd=t:${chartProbabilitiesPercent.join(
    ',',
  )}&chl=${chartLabels.join('|')}${imageChartPostfixAddress}`;
};
