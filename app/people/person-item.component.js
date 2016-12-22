import angular from 'angular';
import ngMaterial from 'angular-material';

import peopleService from '../services/people.service';

const template = require('./person-item.template.html');

class PersonItemController {

    constructor(peopleService) {
        this.peopleService = peopleService;
    }

    getRoleTitle(role) {
        return this.peopleService.roleTitles[role];
    }
}

PersonItemController.$inject = ['peopleService'];

export default angular.module('personItemComponent', [peopleService, ngMaterial])
    .component('hyfPersonItem', {
        template,
        bindings: {
            person: '<',
            onClick: '&'
        },
        controller: PersonItemController
    })
    .name;
