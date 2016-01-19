/**
 * Created by yhuang on 1/12/2016.
 */

example.directive('roomtypePageview', function () {
  return {
    restrict: 'EA',
    templateUrl: 'components/media/roomType/roomTypePageView.html',
    controller: ['$scope', function ($scope) {
    }],
    link: function (scope) {
      //alert("load");
      scope.uploadPackImage = function () {
        alert("Please set the 'Package' image!");
      }
      scope.uploadCarousel = function () {
        alert("Please set the 'carousel' image!");
      }
    }
  }
})
