(function(){
  // Grab the app
  var app = angular.module( "APIBeardDemo");

  app.directive('beardBadge', function(){
    return {
      restrict: "E",
      scope: {
        beard: "="
      },
      templateUrl: "html/beard-badge.html"
    };
  });
})();                           // End of closure
