import angular from 'angular';

import peopleModule from './people.module';

const template = require('./person-form.component.html');

class PersonFormController {

    static get $inject() {
        return ['$window', 'peopleService'];
    }

    get roleTitles() {
        return this.peopleService.roleTitles;
    }

    constructor($window, peopleService) {
        this.$window = $window;
        this.peopleService = peopleService;
    }

}

const name = 'hyfPersonForm';
angular.module(peopleModule)
    .component(name, {
        template,
        bindings: {
            person: '<'
        },
        controller: PersonFormController
    });
export default name;