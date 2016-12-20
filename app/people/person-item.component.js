'use strict';
import angular from 'angular';

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

angular.module('app.people')
    .component('hyfPersonItem', {
        template,
        bindings: {
            person: '<',
            onClick: '&'
        },
        controller: PersonItemController
    });

