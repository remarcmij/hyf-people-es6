'use strict';
import angular from 'angular';
import 'angular-aria';
import ngMaterial from 'angular-material';
// import 'angular-material/angular-material.css'
import uiRouter from 'angular-ui-router';

import peopleModule from './people';
import navigationModule from './navigation';

import aboutModule from './about';
// import './about/about.component';

angular.module('app', [uiRouter, ngMaterial, peopleModule, navigationModule, aboutModule])
    .constant('appTitle', 'Hack Your Future People')
    .constant('apiEndPoint', 'http://localhost:3000')
    .config(config);

config.$inject = ['$urlRouterProvider'];

function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
