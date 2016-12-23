import angular from 'angular';

const template = require('./main-toolbar.template.html');

class MainToolbarController {

    static get $inject() {
        return ['$window'];
    }

    constructor($window) {
        this.$window = $window;
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
    .component('hyfMainToolbar', {
        template,
        bindings: {
            title: '<',
            openSideNav: '&'
        },
        controller: MainToolbarController
    });