import angular from 'angular';

import peopleModule from './people.module';

import peopleService from './people.service';

const template = require('./person-item.component.html');

class PersonItemController {

    static get $inject() {
        return ['peopleService'];
    }

    get roleTitle() {
        return this.peopleService.getRoleTitle(this.person.role);
    }

    constructor(peopleService) {
        this.peopleService = peopleService;
    }

}

const name = 'hyfPersonItem';
angular.module(peopleModule)
    .component(name, {
        template,
        bindings: {
            person: '<',
            onClick: '&'
        },
        controller: PersonItemController
    });
export default name;