import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import 'angular-material/angular-material.css';

import './app.css';
import peopleModule from './people/people.module';
import aboutModule from './about/about.module';
import './navigation';

angular.module('app', [uiRouter, ngMaterial, ngSanitize, peopleModule, aboutModule])
    .constant('appTitle', 'Hack Your Future People');
