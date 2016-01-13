/**
 * Created by yhuang on 1/8/2016.
 */

var example = angular.module('example', ['ui.router','colorpicker.module']);

example.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("configuration", {
      url: "/configuration",
      templateUrl: "components/configuration/configuration.html"
    })
    .state("media", {
      url: "/media",
      templateUrl: "components/media/media.html"
    })
    .state("reporting", {
      url: "/reporting",
      templateUrl: "components/reporting/reporting.html"
    })
    .state("translation", {
      url: "/translation",
      templateUrl: "components/translation/translation.html"
    })
    .state("media.roomType",{
      url:"/roomType",
      templateUrl:"components/media/roomType/roomType.html"
    })
    .state("media.packages",{
      url:"/packages",
      templateUrl:"components/media/packages/packages.html"
    })
    .state("media.branding",{
      url:"/branding",
      templateUrl:"components/media/branding/branding.html"
    })
    .state("media.groups",{
      url:"/groups",
      templateUrl:"components/media/groups/groups.html"
    })
    .state("media.iconography",{
      url:"/iconography",
      templateUrl:"components/media/iconography/iconography.html"
    })
	.state("templates",{
      url:"/templates",
      templateUrl:"templates/templates.html"
    });

  $urlRouterProvider.otherwise("/");
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
