'use strict';
import angular from 'angular';
// import 'angular-material/angular-material.css'
import uiRouter from 'angular-ui-router';

import peopleRoutingModule from './people/people.routing';
import aboutRoutingModule from './about/about.routing';

angular.module('app', [uiRouter, peopleRoutingModule, aboutRoutingModule])
    .constant('appTitle', 'Hack Your Future People')
    .constant('apiEndPoint', 'http://localhost:3000')
    .config(config);

config.$inject = ['$urlRouterProvider'];

function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
