/**
 * Created by Julius Alvarado on 12/25/2016.
 */
"use strict";

angular.module('tetraMenu').controller('tetraMenuCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        this.setActiveElement = function(elem){
            $scope.activeElement = elem; 
        };
        
        this.setRoute = function(route){
            $rootScope.$broadcast('tetra-menu-item-selected-event',
                {route: route});
        };

        this.getActiveElem = function(){
            return $scope.activeElement;
        };
    }
]);


//\\