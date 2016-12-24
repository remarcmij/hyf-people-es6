import angular from 'angular';

import aboutModule from './about.module';
import aboutComponent from './about.component';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            component: aboutComponent
        });
}

angular.module(aboutModule)
    .config(routing);

