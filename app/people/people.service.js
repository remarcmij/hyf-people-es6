import angular from 'angular';

import peopleModule from './people.module';

class PeopleService {

    static get $inject() {
        return ['$http', '$q', '$log', 'apiEndPoint'];
    }

    constructor($http, $q, $log, apiEndPoint) {
        this.$http = $http;
        this.$q = $q;
        this.$log = $log;
        this.apiEndPoint = apiEndPoint;

        this.roleTitles = {
            staff: 'Staff Member',
            mentor: 'Mentor',
            student: 'Student'
        };
    }

    getAllPeople() {
        return this.$http({
            url: this.apiEndPoint + '/persons',
            method: 'GET',
            cache: true
        })
            .then(resp => resp.data)
            .catch(err => this.handleFailure(err, this.getAllPeople));
    }

    getPersonById(id) {
        return this.$http({
            url: this.apiEndPoint + '/persons/' + id,
            method: 'GET',
            cache: true
        })
            .then(resp => resp.data)
            .catch(err => this.handleFailure(err, this.getPersonById));
    }

    handleFailure(e, caller) {
        let newMessage = 'XHR Failed for ' + caller.name;
        if (e.data && e.data.description) {
            newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        this.$log.error(newMessage);
        return this.$q.reject(e);
    }
}

const name = 'peopleService';
angular.module(peopleModule).service(name, PeopleService);
export default name;

