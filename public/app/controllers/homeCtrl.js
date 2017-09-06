angular.module('app')
    .controller('homeCtrl', function($scope, $http) {
        console.log("hello")
        $scope.button = "Remove"
        $scope.showElement = true;
        $scope.removeElement = function() {
            $scope.showElement = !$scope.showElement;
            $scope.button = "Add"
        }

        $scope.childElement = false;
        $scope.addChildElement = function() {
            $scope.childElement = true;
        }

        $scope.background = "#2998ff";
        $scope.getRandomColor = function() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            $scope.background = color;
        }


        $scope.runAPI = function() {
            $http.get('https://reqres.in/api/users').then(function(res) {
                alert("First API DONE")
                $http.get('https://reqres.in/api/devices').then(function(res) {
                    alert("Seond API DONE")
                    $http.get('https://reqres.in/api/data').then(function(res) {
                        alert("Third API DONE")
                    })
                })
            })
        }



    })