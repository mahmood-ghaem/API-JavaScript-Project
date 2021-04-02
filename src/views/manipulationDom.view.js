'use strict';

export const changeContentVisibility = (toggle, elementClassName) => {
  console.log('changeContentVisibility: ', elementClassName, toggle);
  const content = document.querySelector(`.${elementClassName}`);
  switch (toggle) {
    case true:
      content.classList.remove('hidden');
      break;
    case false:
      content.classList.add('hidden');
      break;
  }
};

export const changeContentDisplay = (toggle, elementClassName) => {
  console.log('changeContentDisplay: ', elementClassName, toggle);
  const content = document.querySelector(`.${elementClassName}`);
  switch (toggle) {
    case true:
      content.style.display = 'block';
      break;
    case false:
      content.style.display = 'none';
      break;
  }
};

export const showLoading = (toggle) => {
  const loading = document.querySelector('.loading');

  switch (toggle) {
    case true:
      loading.classList.remove('loaded');
      break;
    case false:
      loading.classList.add('loaded');
      break;
  }
};
