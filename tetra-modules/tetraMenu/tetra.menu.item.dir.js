/**
 * Created by Julius Alvarado on 12/25/2016.
 */

angular.module('tetraMenu').directive('tetraMenuItem', [
    function() {
        return {
            require: '^tetraMenu',
            scope: {
                label: '@',
                icon: '@'
            },
            templateUrl: 'tetra-modules/tetraMenu/temp.tetra.menu.item.html',
            link: function(scope, elem, attr, ctrl) {

            }
        }
    }
]);

//\\