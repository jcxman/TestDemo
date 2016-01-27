/**
 * Created by yhuang on 1/13/2016.
 */

example.directive('assetspanelRoomtype', function () {
  return {
    restrict: 'EA',
    templateUrl: 'components/media/assetsPanel/assetsPanelRoomType.html',
    controller: ['$scope', function ($scope) {

    }],
    link: function (scope) {
      scope.length = [1,2,3,4,5,6,7,8,9];
    }
  }
})
