import angular from 'angular';
import ngMaterial from 'angular-material';

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

export default angular.module('childToolbarComponent', [ngMaterial])
    .component('hyfChildToolbar', {
        template,
        bindings: {
            title: '<',
            parentState: '@'
        },
        controller: ChildToolbarController
    })
    .name;

