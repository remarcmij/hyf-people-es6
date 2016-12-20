'use strict';
import angular from 'angular';

export default angular.module('app.about', [])
    .config(routing)
    .name

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            component: 'hyfAbout'
        });
}
