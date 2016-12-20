'use strict';
import angular from 'angular';
import ngSanitize from 'angular-sanitize';

import peopleService from '../services/people.service';
import config from './people.config';

export default angular.module('app.people', [ngSanitize, peopleService])
    .config(config)
    .name;
