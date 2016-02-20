var app = angular.module('app',['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {
            templateUrl :'partials/main',
            controller : 'mainCtrl'
        })
});


app.controller('mainCtrl', function($scope){
    $scope.tasks = [
        {
            name:"Clean the room",
            status:"Pending"
        }
    ];

    $scope.addTask = function (taskName){
        $scope.tasks.push({
            name:taskName,
            status: "Pending"
        })

        $scope.taskName="";
    }

    $scope.delete = function (taskName){
        for (var i= 0; i < $scope.tasks.length; i++){
            if($scope.tasks[i].name==taskName){
                $scope.tasks.splice(i, 1);
            }
        }
    }

    $scope.done = function (taskName){
        for (var i= 0; i < $scope.tasks.length; i++){
            if($scope.tasks[i].name==taskName){
                $scope.tasks[i].status = "Completed";
            }
        }
    }

});