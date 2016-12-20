'use strict';
import angular from 'angular';
import ngMaterial from 'angular-material';

import childToolbarComponent from '../navigation/child-toolbar.component';

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

export default angular.module('personDetailComponent', [ngMaterial, childToolbarComponent])
    .component('hyfPersonDetail', {
        template,
        bindings: {
            person: '<'
        },
        controller: PersonDetailController
    })
    .name;
