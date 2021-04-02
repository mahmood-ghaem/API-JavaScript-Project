'use strict';

import { checkOnlyLetters, numberWithCommas } from '../utils/my.util.js';

import {
  getCountries,
  getChart,
  getCountryDetails,
} from '../logic/getDataFromAPI.logic.js';

import { renderResult, showError } from '../views/renderResult.view.js';

import {
  changeContentVisibility,
  showLoading,
} from '../views/manipulationDom.view.js';

let currentPage = 'home';

/**
 * @estimateNationality
 * Fetch data from https://nationalize.io/
 * to estimate the nationality of a first name
 */

export const estimateNationality = async () => {
  const firstName = document.getElementById('first_name_input').value;

  if (!checkOnlyLetters(firstName)) {
    showError('Please enter the name correctly!', firstName);
    return;
  }
  switch (currentPage) {
    case 'home':
      changeContentVisibility(false, 'introContent');
      break;
    case 'result':
      changeContentVisibility(false, 'resultContent');
      break;
    case 'error':
      changeContentVisibility(false, 'errorContent');
      break;
  }

  showLoading(true);
  const { name, country } = await getCountries();

  if (country != undefined) {
    if (country.length < 3) {
      showError('The name you entered was not in our database!', firstName);
    } else {
      changeProbabilityPercent(country);
      addCountryDetails(country);
      const chartImageUrl = await getChart(country);
      renderResult({ name, country, chartImageUrl });
      currentPage = 'result';
      setTimeout(() => {
        showLoading(false);
        changeContentVisibility(true, 'resultContent');
      }, 1000);
    }
  } else {
    showError('Request error!', firstName);
    currentPage = 'error';
  }
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
};

const addCountryDetails = async (countries) => {
  await countries.forEach(async (country) => {
    const { name, population, flag } = await getCountryDetails(
      country.country_id,
    );
    country.name = name;
    country.population = numberWithCommas(population);
    country.flag = flag;
  });
};
