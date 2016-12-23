import angular from 'angular';

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

angular.module('app')
    .component('hyfChildToolbar', {
        template,
        bindings: {
            title: '<',
            parentState: '@'
        },
        controller: ChildToolbarController
    });

