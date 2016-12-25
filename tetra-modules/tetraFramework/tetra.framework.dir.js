/**
 * Created by Julius Alvarado on 12/24/2016.
 */
"use strict";

angular.module('tetraFramework').directive('tetraFramework', function(){

    return {
        transclude: true,
        scope: {
            tTitle: '@',
            tSubtitle: '@',
            tIconFile: '@'
        },
        controller: 'tetraFrameworkCtrl',
        templateUrl: 'tetra-modules/tetraFramework/temp.tetra.framework.html'

    }
});

//\\