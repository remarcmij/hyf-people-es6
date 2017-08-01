import angular from 'angular';

import peopleModule from './people.module';

class PeopleService {

    static get $inject() {
        return ['$http', '$q', '$log'];
    }

    constructor($http, $q, $log) {
        this.$http = $http;
        this.$q = $q;
        this.$log = $log;

        this.roleTitles = [
            {role: 'staff', title: 'Staff Member'},
            {role: 'mentor', title: 'Mentor'},
            {role: 'student', title: 'Student'}
        ];
    }

    getRoleTitle(role) {
        let item = this.roleTitles.find(item => item.role === role);
        return item ? item.title : role;
    }

    getAllPeople() {
        return this.$http({
            url: '/person',
            method: 'GET',
            cache: true
        }).then(resp => resp.data.persons)
            .catch(err => this.handleFailure(err, this.getAllPeople));
    }

    getPersonById(id) {
        return this.$http({
            url: '/person/' + id,
            method: 'GET',
            cache: true
        }).then(resp => resp.data)
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

