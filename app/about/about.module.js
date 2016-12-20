'use strict';
import angular from 'angular';

export default angular.module('app.about', [])
    .config(config)
    .name

config.$inject = ['$stateProvider'];

function config($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            component: 'hyfAbout'
        });
}
