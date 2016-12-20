'use strict';
import angular from 'angular';

const template = require('./about.template.html');

class AboutController {

    constructor(appTitle) {
        this.appTitle = appTitle;
    }
}

AboutController.$inject = ['appTitle'];

export default angular.module('app.about')
    .component('hyfAbout', {
        template,
        controller: AboutController
    });
