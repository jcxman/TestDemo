/**
 * Created by yhuang on 1/8/2016.
 */

var example = angular.module('example', ['ui.router']);

example.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("configuration", {
      url: "/configuration",
      templateUrl: "templates/configuration.html"
    })
    .state("media", {
      url: "/media",
      templateUrl: "templates/media.html"
    })
    .state("reporting", {
      url: "/reporting",
      templateUrl: "templates/reporting.html"
    })
    .state("translation", {
      url: "/translation",
      templateUrl: "templates/translation.html"
    })
    .state("media.roomType",{
      url:"/roomType",
      templateUrl:"templates/roomType.html"
    })
    .state("media.packages",{
      url:"/packages",
      templateUrl:"templates/packages.html"
    })
    .state("media.iconography",{
      url:"/iconography",
      templateUrl:"templates/iconography.html"
    });

  $urlRouterProvider.otherwise("/setting/profile");
})
  .controller("exampleCtrl",function($scope){
    $scope.hero = true;

    $scope.uploadHeroImage = function () {
      alert("Please set the 'HERO' image!");
    };

    $scope.uploadPackImage = function () {
      alert("Please set the 'Package' image!");
    }

  });
