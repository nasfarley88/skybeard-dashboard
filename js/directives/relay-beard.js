(function(){
  // Grab the app
  var app = angular.module( "APIBeardDemo");

  app.directive('relayBeard', function(){
    return {
      restrict: "E",
      templateUrl: "html/relay-beard.html",
      controller: [
        '$http', '$scope',
        function($http, $scope) {
          $scope.config = {};
          $scope.config.url = "";

          $scope.payload = {};
          $scope.payload.text = "";
          $scope.payload.chat_id = 0;

          $scope.post = function() {
            $http.post($scope.config.url, $scope.payload);
          };
        }]
    };
  });
})();                           // End of closure
