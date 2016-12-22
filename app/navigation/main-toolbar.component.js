import angular from 'angular';
import ngMaterial from 'angular-material';

const template = require('./main-toolbar.template.html');

class MainToolbarController {

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

MainToolbarController.$inject = ['$window'];

export default angular.module('mainToolbarComponent', [ngMaterial])
    .component('hyfMainToolbar', {
        template,
        bindings: {
            title: '<',
            openSideNav: '&'
        },
        controller: MainToolbarController
    })
    .name;