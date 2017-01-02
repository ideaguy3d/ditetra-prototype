/**
 * Created by Julius Alvarado on 12/25/2016.
 */
"use strict";

angular.module('tetraFramework').controller('tetraFrameworkCtrl', ['$scope',
    '$window', '$timeout', '$rootScope',
    function ($scope, $window, $timeout, $rootScope) {
        $scope.isMenuVisible = true;
        $scope.isMenuButtonVisible = true;
        $scope.isMenuVert = true;

        $scope.$on('tetra-menu-item-selected-event', function (event, data) {
            $scope.routeString = data.route;

            // make sure flags are set correctly for the screen size
            checkWidth();

            // when the user selects an item in the menu we want
            // the menu to go off screen as well.
            broadcastMenuState();
        });

        $scope.$on('tetra-menu-orientation-changed-event', function(event, data){
            $scope.isMenuVert = data.isMenuVert;
        });

        jQuery($window).on('resize.tetraFramework', function () {
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            })
        });

        $scope.$on("$destroy", function () {
            // remove the handle
            jQuery($window).off('resize.tetraFramework');
        });

        $scope.menuButtonClicked = function(){
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            //$scope.$apply();
        };

        var broadcastMenuState = function(){
            $rootScope.$broadcast('tetra-menu-show', {
                show: $scope.isMenuVisible
            });
        };

        var checkWidth = function () {
            // .innerWidth() and .width() is a jQuery function.
            var width = Math.max(jQuery($window).width(),
                $window.innerWidth);
            $scope.isMenuVisible = (width >= 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        // will be called imm! after the digest cycle
        $timeout(function () {
            checkWidth();
        }, 0);

        // The Additional Menu Button code to show/hide the menu.
        // 7:49pm on 1-1-2017, I'll work from this line on in the future

    }
]);


//\\