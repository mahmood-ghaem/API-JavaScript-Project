'use strict';

import { checkOnlyLetters, numberWithCommas } from '../utils/my.util.js';

import {
  getCountries,
  getChart,
  getCountryDetails,
} from '../logic/getDataFromAPI.logic.js';

import { renderResult, showError } from '../views/renderResult.view.js';

import { showLoading } from '../views/manipulationDom.view.js';

export const estimateNationality = async () => {
  showLoading(true);

  const firstName = document.getElementById('first_name_input').value;

  if (!checkOnlyLetters(firstName)) {
    showError('Please enter the name correctly!', firstName);
    return;
  }
  const { name, country } = await getCountries();
  if (country != undefined) {
    if (country.length < 3) {
      showError('The name you entered was not in our database!', firstName);
    } else {
      const countryProbabilityPercent = await changeProbabilityPercent(country);
      const countryWithDetails = await addCountryDetails(
        countryProbabilityPercent,
      );
      const chartImageUrl = await getChart(country);
      renderResult({ name, countryWithDetails, chartImageUrl });
    }
  } else {
    showError('Request error!', firstName);
  }
};

export const estimateNationalityByQueryString = (firstName) => {
  document.getElementById('first_name_input').value = firstName;
  estimateNationality();
};

const changeProbabilityPercent = (countries) => {
  const countriesClone = JSON.parse(JSON.stringify(countries));
  const chartLabels = [];
  const chartProbabilities = [];
  countriesClone.forEach((country) => {
    chartLabels.push(country.country_id);
    chartProbabilities.push(country.probability);
  });
  const probabilitiesSum = chartProbabilities.reduce(
    (total, num) => total + num,
  );
  countriesClone.forEach((country) => {
    country.probability = (country.probability * 100) / probabilitiesSum;
  });
  return countriesClone;
};

const addCountryDetails = async (countries) => {
  const countriesClone = JSON.parse(JSON.stringify(countries));

  Promise.all(
    countriesClone.map((country) =>
      getCountryDetails(country.country_id).then((resp) => {
        const { name, population, flag } = resp;
        country.name = name;
        country.population = numberWithCommas(population);
        country.flag = flag;
      }),
    ),
  );
  return countriesClone;

  // await countries.forEach(async (country) => {
  //   const { name, population, flag } = await getCountryDetails(
  //     country.country_id,
  //   );
  //   country.name = name;
  //   country.population = numberWithCommas(population);
  //   country.flag = flag;
  // });
};
