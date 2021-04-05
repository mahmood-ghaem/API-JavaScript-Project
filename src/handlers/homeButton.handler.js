'use strict';

import { changePages } from '../logic/changePages.logic.js';

export const gotoHomePage = () => {
  changePages('home');
  window.history.replaceState(null, null, '?name=');
  document.querySelector('#first_name_input').value = '';
};
