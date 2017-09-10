console.log("jbdxshcoach");
var app =angular.module('act',['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "main.html",
        controller : 'MainCtrl'
    });
});

app.controller('MainCtrl',[function(){

	console.log('This is the MainCtrl');
}]);