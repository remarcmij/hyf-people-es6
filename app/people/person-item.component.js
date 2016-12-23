import angular from 'angular';
import ngMaterial from 'angular-material';

import peopleService from '../services/people.service';

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

angular.module('app')
    .component('hyfPersonItem', {
        template,
        bindings: {
            person: '<',
            onClick: '&'
        },
        controller: PersonItemController
    });
