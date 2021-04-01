'use strict';

import { estimateNationality } from '../handlers/estimateNationality.handler.js';

/**
 * @estimateNationalityButton
 * Send first name to https://nationalize.io/
 * to estimate the nationality of a first name
 */

const estimateNationalityButton = document.querySelector(
  '#estimate_nationality_button'
);
estimateNationalityButton.addEventListener('click', estimateNationality);
