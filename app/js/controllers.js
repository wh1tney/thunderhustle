'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeCtrl', ['$scope', function($scope) {
    SC.get('/users/thunder-hustle/favorites', { limit: 20 }, function(tracks) {
      $scope.$apply(function() {
        if (tracks.length > 1) {
          $scope.likes = tracks;
        } else {
          console.log("user has no favorites");
        }
      });
    });
  }]);
