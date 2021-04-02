'use strict';

//import { currentPage } from '../data.js';
import { changeContentDisplay } from '../views/manipulationDom.view.js';

import '../listeners/estimateNationality.listener.js';
import '../listeners/homeButton.listener.js';

//currentPage = 'home';

changeContentDisplay(false, 'resultContent');
