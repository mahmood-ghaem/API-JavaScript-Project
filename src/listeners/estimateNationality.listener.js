'use strict';

import { estimateNationality } from '../handlers/estimateNationality.handler.js';

const estimateNationalityButton = document.querySelector(
  '.estimate-nationality-button',
);
const firstNameInput = document.querySelector('#first_name_input');

estimateNationalityButton.addEventListener('click', estimateNationality);

firstNameInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    estimateNationality();
  }
});
