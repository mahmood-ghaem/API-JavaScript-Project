'use strict';

import { copyShareLink } from '../handlers/copyShareLink.handler.js';

const copyShareLinkButton = document.querySelector('.copy-share-link');

copyShareLinkButton.addEventListener('click', copyShareLink);
