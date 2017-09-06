angular.module('app')
    .controller('clientsCtrl', function($scope, $http) {
        $scope.setup = function() {
            $http.get('http://localhost:1818/botsupply/admin/clients').then(function(res) {
                $scope.clients = res.data
                console.log(res)
            })
        }
        $scope.setup();
    })
