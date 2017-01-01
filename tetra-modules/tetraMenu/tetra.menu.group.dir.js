/**
 * Created by Julius Alvarado on 1/1/2017.
 */

angular.module('tetraMenu').directive('tetraMenuGroup', [function(){

    return {
        require: "^tetraMenu",
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'tetra-modules/tetraMenu/tetra.menu.group.html',
        link: function(scope, elem, attr, ctrl){
            scope.isOpen = false;
            scope.closeMenu = function(){
                scope.isOpen = false;
            };
            scope.clicked = function(){
                scope.isOpen = !scope.isOpen;
            };
        }
    }
}]);

//\\