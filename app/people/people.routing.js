import angular from 'angular';

import peopleModule from './people.module';
import peopleComponent from './people.component';
import './person-item.component';
import personDetailComponent from './person-detail.component';
import personFormComponent from './person-form.component';
import peopleService from './people.service';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            component: peopleComponent,
            resolve: {
                persons: resolvePeople
            }
        })
        .state('person', {
            url: '/person/:id',
            component: personDetailComponent,
            resolve: {
                person: resolvePerson
            }
        })
        .state('add', {
            url: '/add',
            component: personFormComponent
        })
        .state('edit', {
            url: '/edit/:id',
            component: personFormComponent,
            resolve: {
                person: resolvePerson
            }
        })
}

resolvePeople.$inject = [peopleService];

function resolvePeople(peopleService) {
    return peopleService.getAllPeople();
}

resolvePerson.$inject = ['$stateParams', peopleService];

function resolvePerson($stateParams, peopleService) {
    return peopleService.getPersonById($stateParams.id);
}

angular.module(peopleModule)
    .config(routing);

