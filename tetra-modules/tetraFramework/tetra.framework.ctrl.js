/**
 * Created by Julius Alvarado on 12/25/2016.
 */
"use strict";

angular.module('tetraFramework').controller('tetraFrameworkCtrl', ['$scope',
    function($scope){
        $scope.$on('tetra-menu-item-selected-event', function(evt, data){
            $scope.routeString = data.route;
        });
    }
]);



//\\