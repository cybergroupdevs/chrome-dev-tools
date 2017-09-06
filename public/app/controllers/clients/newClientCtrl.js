angular.module('app')
    .controller('newClientCtrl', function($scope, $http, $location) {
        $scope.create = function() {
            $http.post('http://localhost:1818/botsupply/admin/client/new', {
                clientName: $scope.clientName,
                brief: $scope.brief,
                domain: $scope.domain,
                email: $scope.email,
                name: $scope.name,
                password: $scope.password,
                options: $scope.plan
            }).then(function(res) {
                console.log(res)
                $location.path('/clientslist/edit/' + res.data._id)
            })
        }
    })
