/**
 * Created by yhuang on 1/13/2016.
 */


example.directive('packagesPageview', function(){
  return{
    restrict: 'EA',
    templateUrl: 'components/media/packages/packagesPageView.html',
    controller:['$scope',function($scope){
    }],
    link:function(scope){
      //alert("load");
      scope.hero = true;

      scope.uploadHeroImage = function () {
        alert("Please set the 'HERO' image!");
      };

      scope.uploadPackImage = function () {
        alert("Please set the 'Package' image!");
      };

      scope.uploadCarousel = function () {
        alert("Please set the 'carousel' image!");
      }
    }

  }
})
