/**
 * Created by yhuang on 1/12/2016.
 */

example.directive('pageView', function(){
  return{
    restrict: 'EA',
    templateUrl: 'components/media/roomType/roomTypePageView',
    controller:[function($scope){
      $scope.uploadPackImage = function () {
        alert("Please set the 'Package' image!");
      }
    }]

  }
})
