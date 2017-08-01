import angular from 'angular';

import navModule from './navigation.module';

const template = require('./child-toolbar.component.html');

class ChildToolbarController {

    static get $inject() {
        return ['$state', '$window'];
    }

    constructor($state, $window) {
        this.$state = $state;
        this.$window = $window;
    }

    goBack() {
        if (this.parentState) {
            this.$state.go(this.parentState);
        } else {
            this.$window.history.back();
        }
    }
}

angular.module(navModule)
    .component('hyfChildToolbar', {
        transclude: true,
        template,
        bindings: {
            title: '<',
            parentState: '@'
        },
        controller: ChildToolbarController
    });

