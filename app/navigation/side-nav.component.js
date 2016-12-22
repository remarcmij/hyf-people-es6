import angular from 'angular';
import ngMaterial from 'angular-material';

const template = require('./side-nav.template.html');

class SideNavController {

    constructor() {

    }

}

SideNavController.$inject = [];

export default angular.module('sideNavComponent', [ngMaterial])
    .component('hyfSideNav', {
        template,
        bindings: {
            title: '<'
        },
        controller: SideNavController
    })
    .name;
