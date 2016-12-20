'use strict';
import angular from 'angular';

const template = require('./side-nav.template.html');

class SideNavController {

    constructor() {

    }

}

SideNavController.$inject = [];

export default angular.module('app.navigation')
    .component('hyfSideNav', {
        template,
        bindings: {
            title: '<'
        },
        controller: SideNavController
    });
