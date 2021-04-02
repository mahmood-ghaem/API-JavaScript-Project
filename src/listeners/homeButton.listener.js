'use strict';

import { gotoHomePage } from '../handlers/homeButton.handler.js';

const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('click', gotoHomePage);
