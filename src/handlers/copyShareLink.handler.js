'use strict';

export const copyShareLink = () => {
  console.log('salam');
  //getting text from P tag
  const copyText = document.querySelector('.share-link-text');
  // creating textarea of html
  const input = document.createElement('textarea');
  //adding p tag text to textarea
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  // removing textarea after copy
  input.remove();

  const copyHint = document.querySelector('.link-copied-hint');
  copyHint.classList.remove('hidden');
};
