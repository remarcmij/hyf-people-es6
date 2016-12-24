import angular from 'angular';

import peopleModule from './people.module';

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

const name = 'hyfPersonDetail';
angular.module(peopleModule)
    .component('hyfPersonDetail', {
        template,
        bindings: {
            person: '<'
        },
        controller: PersonDetailController
    });
export default  name;