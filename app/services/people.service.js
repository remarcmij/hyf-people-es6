import angular from 'angular';

class PeopleService {

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
            .catch(err => this.handleFailure(err, 'getAllPeople'));
    }

    getPersonById(id) {
        return this.$http({
            url: this.apiEndPoint + '/persons/' + id,
            method: 'GET',
            cache: true
        })
            .then(resp => resp.data)
            .catch(err => this.handleFailure(err, 'getPersonById'));
    }

    handleFailure(e, funcName) {
        let newMessage = 'XHR Failed for ' + funcName;
        if (e.data && e.data.description) {
            newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        this.$log.error(newMessage);
        return this.$q.reject(e);
    }
}

PeopleService.$inject = ['$http', '$q', '$log', 'apiEndPoint'];

export default angular.module('services.people', [])
    .service('peopleService', PeopleService)
    .name;

