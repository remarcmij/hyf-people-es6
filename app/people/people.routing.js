import angular from 'angular';
import ngSanitize from 'angular-sanitize';

import peopleService from '../services/people.service';
import peopleComponent from './people.component';
import personDetailComponent from './person-detail.component'

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            component: 'hyfPeople',
            resolve: {
                persons: resolvePeople
            }
        })
        .state('person', {
            url: '/person/:id',
            component: 'hyfPersonDetail',
            resolve: {
                person: resolvePerson
            }
        });
}

resolvePeople.$inject = ['peopleService'];

function resolvePeople(peopleService) {
    return peopleService.getAllPeople();
}

resolvePerson.$inject = ['$stateParams', 'peopleService'];

function resolvePerson($stateParams, peopleService) {
    return peopleService.getPersonById($stateParams.id)
        .then(person => {
            person.roleTitle = peopleService.roleTitles[person.role];
            return person;
        });
}

export default angular.module('peopleRouting', [ngSanitize, peopleService, peopleComponent, personDetailComponent])
    .config(routing)
    .name;

