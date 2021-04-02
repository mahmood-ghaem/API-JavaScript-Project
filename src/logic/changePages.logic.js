'use strict';

import { currentPage } from '../data.js';
import {
  changeContentVisibility,
  changeContentDisplay,
  showLoading,
} from '../views/manipulationDom.view.js';

export const changePages = (page) => {
  console.log(`${currentPage.key}Content`, '=>', `${page}Content`);
  showLoading(true);
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

  // switch (currentPage.key) {
  //   case 'home':
  //     switch (page) {
  //       case 'home':
  //         break;

  //       case 'result':
  //         showLoading(true);
  //         changeContentVisibility(false, 'introContent');
  //         setTimeout(() => {
  //           changeContentDisplay(false, 'introContent');
  //           changeContentDisplay(true, 'resultContent');
  //         }, 1000);
  //         setTimeout(() => {
  //           changeContentVisibility(true, 'resultContent');
  //           showLoading(false);
  //         }, 1100);
  //         currentPage.key = 'result';
  //         return;

  //       case 'error':
  //         showLoading(true);
  //         changeContentVisibility(false, 'introContent');
  //         setTimeout(() => {
  //           changeContentDisplay(false, 'introContent');
  //           changeContentDisplay(true, 'errorContent');
  //         }, 1000);
  //         setTimeout(() => {
  //           changeContentVisibility(true, 'errorContent');
  //           showLoading(false);
  //         }, 1100);
  //         currentPage.key = 'error';
  //         return;
  //     }
  //     break;
  //   case 'result':
  //     switch (page) {
  //       case 'result':
  //         break;

  //       case 'home':
  //         showLoading(true);
  //         changeContentVisibility(false, 'resultContent');
  //         setTimeout(() => {
  //           changeContentDisplay(false, 'resultContent');
  //           changeContentDisplay(true, 'introContent');
  //         }, 1000);
  //         setTimeout(() => {
  //           changeContentVisibility(true, 'introContent');
  //           showLoading(false);
  //         }, 1100);
  //         currentPage.key = 'home';
  //         return;

  //       case 'error':
  //         showLoading(true);
  //         changeContentVisibility(false, 'resultContent');
  //         setTimeout(() => {
  //           changeContentDisplay(false, 'resultContent');
  //           changeContentDisplay(true, 'errorContent');
  //         }, 1000);
  //         setTimeout(() => {
  //           changeContentVisibility(true, 'errorContent');
  //           showLoading(false);
  //         }, 1100);
  //         currentPage.key = 'error';
  //         return;
  //     }
  //     break;
  //   case 'error':
  //     switch (page) {
  //       case 'error':
  //         break;

  //       case 'home':
  //         showLoading(true);
  //         changeContentVisibility(false, 'errorContent');
  //         setTimeout(() => {
  //           changeContentDisplay(false, 'errorContent');
  //           changeContentDisplay(true, 'introContent');
  //         }, 1000);
  //         setTimeout(() => {
  //           changeContentVisibility(true, 'introContent');
  //           showLoading(false);
  //         }, 1100);
  //         currentPage.key = 'home';
  //         return;

  //       case 'result':
  //         showLoading(true);
  //         changeContentVisibility(false, 'errorContent');
  //         setTimeout(() => {
  //           changeContentDisplay(false, 'errorContent');
  //           changeContentDisplay(true, 'resultContent');
  //         }, 1000);
  //         setTimeout(() => {
  //           changeContentVisibility(true, 'resultContent');
  //           showLoading(false);
  //         }, 1100);
  //         currentPage.key = 'result';
  //         return;
  //     }
  //     break;
  // }
};
