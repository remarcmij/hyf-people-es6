import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import 'angular-material/angular-material.css';
import './app.css';

angular.module('app', [uiRouter, ngMaterial, ngSanitize])
    .constant('appTitle', 'Hack Your Future People')
    .constant('apiEndPoint', 'http://localhost:3000');
