import angular from 'angular';
import ngMaterial from 'angular-material';

import childToolbarComponent from '../navigation/child-toolbar.component';

const template = require('./person-detail.template.html');

class PersonDetailController {

    static get $inject() {
        return ['$window'];
    }

    constructor($window) {
        this.$window = $window;
    }

    openExternalUrl(url) {
        let win = this.$window.open(url, '_blank');
        win.focus();
    }
}

angular.module('app')
    .component('hyfPersonDetail', {
        template,
        bindings: {
            person: '<'
        },
        controller: PersonDetailController
    });
