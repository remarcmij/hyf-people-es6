import angular from 'angular';

import aboutModule from './about.module';

const template = require('./about.component.html');

class AboutController {

    static get $inject() {
        return ['appTitle'];
    }

    constructor(appTitle) {
        this.appTitle = appTitle;
    }
}

const name = 'hyfAbout';
angular.module(aboutModule)
    .component('hyfAbout', {
        template,
        controller: AboutController
    });
export default name;