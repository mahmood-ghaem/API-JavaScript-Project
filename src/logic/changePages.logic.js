'use strict';

import { currentPage } from '../data.js';
import {
  changeContentVisibility,
  changeContentDisplay,
  showLoading,
} from '../views/manipulationDom.view.js';

export const changePages = (page) => {
  if (currentPage.key !== page) {
    changeContentVisibility(false, `${currentPage.key}Content`);
    setTimeout(() => {
      changeContentDisplay(false, `${currentPage.key}Content`);
      changeContentDisplay(true, `${page}Content`);
    }, 1000);
    setTimeout(() => {
      changeContentVisibility(true, `${page}Content`);
      showLoading(false);
      currentPage.key = page;
    }, 1100);
  } else {
    changeContentVisibility(false, `${currentPage.key}Content`);
    changeContentDisplay(false, `${currentPage.key}Content`);
    changeContentDisplay(true, `${page}Content`);
    changeContentVisibility(true, `${page}Content`);
    showLoading(false);
    currentPage.key = page;
  }
  if (page === 'home') {
    changeContentVisibility(false, 'home-button');
  } else {
    changeContentVisibility(true, 'home-button');
  }
};
