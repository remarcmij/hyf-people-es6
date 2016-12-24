import angular from 'angular';

import navModule from './nav.module';

const template = require('./child-toolbar.template.html');

class ChildToolbarController {

    static get $inject() {
        return ['$state'];
    }

    constructor($state) {
        this.$state = $state;
    }

    goBack() {
        this.$state.go(this.parentState);
    }
}

angular.module(navModule)
    .component('hyfChildToolbar', {
        template,
        bindings: {
            title: '<',
            parentState: '@'
        },
        controller: ChildToolbarController
    });

