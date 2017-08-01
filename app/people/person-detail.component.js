import angular from 'angular';

import peopleModule from './people.module';

const template = require('./person-detail.component.html');

class PersonDetailController {

    static get $inject() {
        return ['$state', '$window', 'peopleService'];
    }
    
    get biography() {
        return this.person.bio.replace(/\n/g, '<br>');
    }

    get roleTitle() {
        return this.peopleService.getRoleTitle(this.person.role);
    }

    constructor($state, $window, peopleService) {
        this.$state = $state;
        this.$window = $window;
        this.peopleService = peopleService;
    }

    openExternalUrl(url) {
        let win = this.$window.open(url, '_blank');
        win.focus();
    }

    openMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }

    edit() {
        this.$state.go('edit', {id: this.person._id});
    }
}

const name = 'hyfPersonDetail';
angular.module(peopleModule)
    .component(name, {
        template,
        bindings: {
            person: '<'
        },
        controller: PersonDetailController
    });
export default name;