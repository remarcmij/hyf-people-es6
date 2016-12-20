'use strict';
import angular from 'angular';

const template = require('./people.template.html');

class PeopleController {

    constructor($state, $mdSidenav, $window, appTitle) {
        this.$state = $state;
        this.$mdSidenav = $mdSidenav;
        this.$window = $window;
        this.appTitle = appTitle;
    }

    onClick(id) {
        this.$state.go('person', {id: id});
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

PeopleController.$inject = ['$state', '$mdSidenav', '$window', 'appTitle'];

angular.module('app.people')
    .component('hyfPeople', {
        template,
        bindings: {
            persons: '<'
        },
        controller: PeopleController
    });




