'use strict';

import { changeContentDisplay } from '../views/manipulationDom.view.js';

import '../listeners/estimateNationality.listener.js';
import '../listeners/homeButton.listener.js';

changeContentDisplay(false, 'resultContent');
changeContentDisplay(false, 'errorContent');
