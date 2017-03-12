(function(){
  // Grab the app
  var app = angular.module( "APIBeardDemo");

  app.directive('relayBeard', function(){
    return {
      restrict: "E",
      templateUrl: "html/relay-beard.html",
      controller: [
        '$http', '$scope', 'config',
        function($http, $scope, config) {
          $scope.enabled = config.enable_relay_beard;

          $scope.config = {};
          $scope.config.url = "http://"
            + config.skybeard_host + ":"
            + config.skybeard_port;

          $scope.payload = {};
          $scope.payload.text = "";
          if(config.default_chat_id) {
            $scope.payload.chat_id = config.default_chat_id;
          } else {
            $scope.payload.chat_id = 0;
          }

          $scope.post = function() {
            $http.post($scope.config.url, $scope.payload);
          };
        }]
    };
  });
})();                           // End of closure
