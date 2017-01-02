/**
 * Created by Julius Alvarado on 12/25/2016.
 */
"use strict";

angular.module('tetraMenu').controller('tetraMenuCtrl', [
    '$scope', '$rootScope',
    function($scope, $rootScope) {
        $scope.showMenu = true;
        $scope.isVertical = true;

        this.setActiveElement = function(elem){
            $scope.activeElement = elem; 
        };

        this.isVertical = function(){
            return $scope.isVertical;
        };
        
        this.setRoute = function(route){
            $rootScope.$broadcast('tetra-menu-item-selected-event', {
                route: route
            });
        };
        
        this.setOpenMenuScope = function(scope){
            $scope.openMenuScope = scope;
        };

        this.getActiveElem = function() {
            return $scope.activeElement;
        };

        $scope.$on('tetra-menu-show', function(event, data){
            $scope.showMenu = data.show;
        });

        $scope.toggleMenuOrientation = function(){
            // close any open menu
            if($scope.openMenuScope) $scope.openMenuScope.closeMenu();

            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('tetra-menu-orientation-changed-event', {
                isMenuVert: $scope.isVertical
            });
        };

        angular.element(document).bind('click', function(e){
            if($scope.openMenuScope && !$scope.isVertical) {
                // .tetra-selectable-item is the popup menu element
                if(jQuery(e.target).parent().hasClass('tetra-selectable-item')) {
                    return;
                }
                $scope.$apply(function(){
                    $scope.openMenuScope.closeMenu();
                });
                e.preventDefault();
                e.stopPropagation();
            }
        });
    }
]);


//\\