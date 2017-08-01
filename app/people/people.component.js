import angular from 'angular';

import peopleModule from './people.module';

const template = require('./people.component.html');

class PeopleController {

    static get $inject() {
        return ['$state', '$mdSidenav', 'appTitle'];
    }

    constructor($state, $mdSidenav, appTitle) {
        this.$state = $state;
        this.$mdSidenav = $mdSidenav;
        this.appTitle = appTitle;
    }

    onClick(id) {
        this.$state.go('person', {id});
    }

    openSidenav() {
        this.$mdSidenav('left').toggle();
    }
}

const name = 'hyfPeople';
angular.module(peopleModule)
    .component(name, {
        template,
        bindings: {
            persons: '<'
        },
        controller: PeopleController
    });
export default name;



