import angular from 'angular';

import './app.module';
import './people/people.routing';
import './about/about.routing';

angular.module('app')
    .config(routing);

routing.$inject = ['$urlRouterProvider'];

function routing($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
