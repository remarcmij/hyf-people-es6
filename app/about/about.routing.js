import angular from 'angular';

import './about.component';

angular.module('app')
    .config(routing);

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            component: 'hyfAbout'
        });
}
