'use strict'

config.$inject = ['$stateProvider'];

export default function config($stateProvider) {
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
