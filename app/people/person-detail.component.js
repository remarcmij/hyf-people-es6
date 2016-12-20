'use strict';
import angular from 'angular';

const template = require('./person-detail.template.html');

class PersonDetailController {
    constructor($window) {
        this.$window = $window;
    }

    openExternalUrl(url) {
        let win = this.$window.open(url, '_blank');
        win.focus();
    }
}

PersonDetailController.$inject = ['$window'];

angular.module('app.people')
    .component('hyfPersonDetail', {
        template,
        bindings: {
            person: '<'
        },
        controller: PersonDetailController
    });
