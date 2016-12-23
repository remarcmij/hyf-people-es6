import angular from 'angular';

import './people.component';
import './person-item.component';
import './person-detail.component';

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

angular.module('app')
    .config(routing);

