import angular from 'angular';

const template = require('./about.template.html');

class AboutController {

    static get $inject() {
        return ['appTitle'];
    }

    constructor(appTitle) {
        this.appTitle = appTitle;
    }
}

angular.module('app')
    .component('hyfAbout', {
        template,
        controller: AboutController
    });
