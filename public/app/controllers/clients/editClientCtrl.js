angular.module('app')
    .controller('editClientCtrl', function($scope, $http, $location, $stateParams) {
        $scope.setup = function() {
            $http.get('http://localhost:1818/botsupply/admin/client/edit/' + $stateParams.id).then(function(res) {
                console.log(res)
                var data = res.data[0]
                $scope.clientName = data.clientName
                $scope.brief = data.brief
                $scope.domain = data.domain
                $scope.users = data.users

            })
        }
        $scope.setup()
    })
