import angular from 'angular';

const template = require('./side-nav.template.html');

class SideNavController {

    static get $inject() {
        return [];
    }

    constructor() {

    }

}

export default angular.module('app')
    .component('hyfSideNav', {
        template,
        bindings: {
            title: '<'
        },
        controller: SideNavController
    });
