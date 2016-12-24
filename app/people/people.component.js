import angular from 'angular';

import peopleModule from './people.module';

const template = require('./people.template.html');

class PeopleController {

    static get $inject() {
        return ['$state', '$mdSidenav', '$window', 'appTitle'];
    }

    constructor($state, $mdSidenav, $window, appTitle) {
        this.$state = $state;
        this.$mdSidenav = $mdSidenav;
        this.$window = $window;
        this.appTitle = appTitle;
    }

    onClick(id) {
        this.$state.go('person', {id});
    }

    openSidenav() {
        this.$mdSidenav('left').toggle();
    }

    openMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }

    visitMainSite() {
        let win = this.$window.open('http://www.hackyourfuture.net/', '_blank');
        win.focus();
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



