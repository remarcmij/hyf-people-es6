import angular from 'angular';

import peopleModule from './people.module';

import peopleService from './people.service';

const template = require('./person-item.template.html');

class PersonItemController {

    static get $inject() {
        return ['peopleService'];
    }

    constructor(peopleService) {
        this.peopleService = peopleService;
    }

    getRoleTitle(role) {
        return this.peopleService.roleTitles[role];
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