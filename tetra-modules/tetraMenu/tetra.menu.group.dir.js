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

            scope.isVertical = function() {
                return ctrl.isVertical() || elem.parents('.tetra-subitem-sec').length > 0;
            };
            scope.setSubmenuPosition = function(){
                // .offset() is a jQ method that give left & top styles.
                var pos = elem.offset();
                jQuery('.tetra-subitem-sec').css({'left': pos.left+20, 'top':36});
            };
            scope.closeMenu = function(){
                scope.isOpen = false;
            };
            scope.clicked = function(){
                scope.isOpen = !scope.isOpen;

                if(elem.parents('.tetra-subitem-sec').length == 0) {
                    scope.setSubmenuPosition();
                }

                ctrl.setOpenMenuScope(scope);
            };
        }
    }
}]);

//\\