'use strict';
import angular from 'angular';
import ngMaterial from 'angular-material';

import childToolbarComponent from '../navigation/child-toolbar.component';

const template = require('./about.template.html');

class AboutController {

    constructor(appTitle) {
        this.appTitle = appTitle;
    }
}

AboutController.$inject = ['appTitle'];

export default angular.module('aboutComponent', [ngMaterial, childToolbarComponent])
    .component('hyfAbout', {
        template,
        controller: AboutController
    })
    .name;
