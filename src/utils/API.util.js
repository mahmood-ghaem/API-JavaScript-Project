'use strict';

export async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

export async function getImageFile(url) {
  const response = await fetch(url).then((resp) => resp.blob());
  return response;
}
