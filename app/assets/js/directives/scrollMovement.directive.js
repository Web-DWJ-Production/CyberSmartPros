directives.directive('scrollMovement', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {     

      var divBody = attrs.scrollcontainer;
      var scrollId = attrs.scrollid;

      element.bind('click', function() {
        var scrollOffset = $("#1")[0].offsetLeft;
        var idLoc = $(scrollId)[0].offsetLeft - scrollOffset;
        $(divBody).animate({ scrollLeft: idLoc}, "slow");
      });
    }
  }
}]);
