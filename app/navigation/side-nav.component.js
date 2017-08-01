import angular from 'angular';

import navModule from './navigation.module';

const template = require('./side-nav.component.html');

class SideNavController {

    static get $inject() {
        return [];
    }

    constructor() {

    }
}

export default angular.module(navModule)
    .component('hyfSideNav', {
        template,
        bindings: {
            title: '<'
        },
        controller: SideNavController
    });
