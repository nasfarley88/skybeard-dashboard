(function(){
  var app = angular.module( "APIBeardDemo");

  app.directive(
    'loadedBeards',
    function() {
      return {
        restrict: "E",
        templateUrl: "html/loaded-beards.html",
        controller: ['$scope', 'Skybeard', function($scope, Skybeard) {
          var that = this;

          this.organiseBeardsIntoColumns = function(beards) {
            return [
              beards.filter(function(v, ind) {return ind % 3 === 0;}),
              beards.filter(function(v, ind) {return ind % 3 === 1;}),
              beards.filter(function(v, ind) {return ind % 3 === 2;})
            ];
          };

          this.loadBeards = function (){
            // Loads beards and puts it in $scope.beards
            Skybeard.loadedBeards().then(function(data) {
              $scope.beards = data.data;
              $scope.columnatedBeards = that.organiseBeardsIntoColumns(
                $scope.beards);
            });
          };

          // Load up the beard information
          this.loadBeards();
        }],
        controllerAs: "ctrl"
      };
    });
})();                           // End of closure
