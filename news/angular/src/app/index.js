'use strict';

import MainCtrl from './main/main.controller';
import CreateCtrl from '../components/create/create.controller';
import ListCtrl from '../components/list/list.controller';

angular.module('newsAngular', ['ngAnimate', 'ngCookies', 'ngSanitize'])
  .controller('MainCtrl', MainCtrl)
  .controller('CreateCtrl', CreateCtrl)
  .controller('ListCtrl', ListCtrl)
;
