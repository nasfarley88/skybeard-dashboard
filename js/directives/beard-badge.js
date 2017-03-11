(function(){
  // Grab the app
  var app = angular.module( "APIBeardDemo");

  app.filter('trust', [
    '$sce',
    function($sce) {
      return function(value, type) {
        // Defaults to treating trusted text as `html`
        return $sce.trustAs(type || 'html', text);
      };
    }
  ]) ;

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
