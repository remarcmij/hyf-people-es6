import angular from 'angular';

import navModule from './navigation.module';

const template = require('./main-toolbar.component.html');

class MainToolbarController {

    constructor() {
    }

}

angular.module(navModule)
    .component('hyfMainToolbar', {
        transclude: true,
        template,
        bindings: {
            title: '<',
            openSideNav: '&'
        },
        controller: MainToolbarController
    });