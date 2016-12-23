import angular from 'angular';
import ngMaterial from 'angular-material';

import mainToolbarComponent from '../navigation/main-toolbar.component';
import sideNavComponent from '../navigation/side-nav.component';
import personItemComponent from './person-item.component';

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

angular.module('app')
    .component('hyfPeople', {
        template,
        bindings: {
            persons: '<'
        },
        controller: PeopleController
    });



