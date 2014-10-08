'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    SC.get('/users/thunder-hustle/favorites', { limit: 50 }, function(tracks) {
      $scope.$apply(function() {
        if (tracks.length > 1) {
          $rootScope.likes = tracks.sort(randomize);
        } else {
          console.log("user has no favorites");
        }
      });
    });

    var randomize = function (a, b) {
      return Math.random() - 0.5;
    }
  }]);
