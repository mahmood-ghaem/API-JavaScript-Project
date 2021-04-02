'use strict';

import { estimateNationality } from '../handlers/estimateNationality.handler.js';

const estimateNationalityButton = document.querySelector(
  '.estimate-nationality-button',
);

estimateNationalityButton.addEventListener('click', estimateNationality);
