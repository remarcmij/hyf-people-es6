'use strict';
import angular from 'angular';

const template = require('./child-toolbar.template.html');

class ChildToolbarController {

    constructor ($state) {
        this.$state = $state;
    }

    goBack() {
        this.$state.go(this.parentState);
    }

}

ChildToolbarController.$inject = ['$state'];

export default angular.module('app.navigation')
    .component('hyfChildToolbar', {
        template,
        bindings: {
            title: '<',
            parentState: '@'
        },
        controller: ChildToolbarController
    });

