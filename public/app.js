'use strict';
var app = angular.module('base.fballina', []);

app.controller('UsersController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.get = function () {
            $http({
                method: 'GET',
                url: '/api/usuarios'
            }).then(function (response) {
                $scope.users = response.data.data;
            }).catch(function (err) {
                alert(err.data.message);
            });
        };

        $scope.create = function (user) {
            $http({
                method: 'POST',
                url: '/api/usuarios',
                data: user
            }).then(function (response) {
                $scope.get();
                alert(response.data.message);
            }).catch(function (err) {
                alert(err.data.message);
            });
        };

        $scope.remove = function (user) {
            $http({
                method: 'DELETE',
                url: '/api/usuarios/' + user.id
            }).then(function (response) {
                $scope.get();
                alert(response.data.message);
            }).catch(function (err) {
                alert(err.data.message);
            });
        };
    }]);