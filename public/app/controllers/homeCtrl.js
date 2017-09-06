angular.module('app')
    .controller('homeCtrl', function($scope, $http) {
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
        }
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

        const employeeData = [
            { id: "01", name: "Vishal R", age: 25, email: "me@vishalranjan.in" },
            { id: "02", name: "Tony Stark", age: 34, email: "tony@stark.com" }
        ];

        $scope.add = function() {
            var request = db.transaction(["employee"], "readwrite")
                .objectStore("employee")
                .add({ id: "01", name: "prasad", age: 24, email: "prasad@tutorialspoint.com" });

            request.onsuccess = function(event) {
                alert("Prasad has been added to your database.");
            };

            request.onerror = function(event) {
                alert("Unable to add data\r\nPrasad is already exist in your database! ");
            }
        }

        //$scope.add();


    })