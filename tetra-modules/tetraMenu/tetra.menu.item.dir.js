/**
 * Created by Julius Alvarado on 12/25/2016.
 */

angular.module('tetraMenu').directive('tetraMenuItem', [
    function() {
        return {
            require: '^tetraMenu',
            scope: {
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: 'tetra-modules/tetraMenu/temp.tetra.menu.item.html',
            link: function(scope, elem, attr, ctrl) {
                // elem is a jQuery wrapped obj which is why .on() can be called.
                elem.on('click', function(evt){

                    scope.isActive = function(){
                        return elem === ctrl.getActiveElem();
                    };

                    scope.isVertical = function(){
                        return ctrl.isVertical() || elem.parents('.tetra-subitem-sec').length > 0;
                    };

                    evt.stopPropagation();
                    evt.preventDefault(); 
                    scope.$apply(function(){
                        ctrl.setActiveElement(elem);
                        ctrl.setRoute(scope.route);
                    });
                });
            }
        }
    }
]);

//\\