'use strict';

export const checkOnlyLetters = (string) => {
  const letters = /^[A-Za-z]+$/;
  if (string.match(letters)) {
    return true;
  } else {
    return false;
  }
};

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
