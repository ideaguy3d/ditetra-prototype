/**
 * Created by Julius Alvarado on 12/25/2016.
 */
"use strict";
angular.module('tetraMenu').directive('tetraMenu', [
    function(){
        return {
            transclude: true,
            scope: {},
            templateUrl: 'tetra-modules/tetraMenu/temp.tetra.menu.html',
            controller: 'tetraMenuCtrl',
            link: function(scope, elem, attr){

            }
        }
    }
]);


//\\