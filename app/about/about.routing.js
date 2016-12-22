import angular from 'angular';

import aboutComponent from './about.component';

export default angular.module('app.about', [aboutComponent])
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
