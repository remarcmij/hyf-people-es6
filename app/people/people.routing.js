import angular from 'angular';

import peopleModule from './people.module';
import peopleComponent from './people.component';
import './person-item.component';
import personDetailComponent from './person-detail.component';
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
        });
}

resolvePeople.$inject = [peopleService];

function resolvePeople(peopleService) {
    return peopleService.getAllPeople();
}

resolvePerson.$inject = ['$stateParams', peopleService];

function resolvePerson($stateParams, peopleService) {
    return peopleService.getPersonById($stateParams.id)
        .then(person => {
            person.roleTitle = peopleService.roleTitles[person.role];
            return person;
        });
}

angular.module(peopleModule)
    .config(routing);

