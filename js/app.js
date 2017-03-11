(function(){
  var app = angular.module( "APIBeardDemo");

  app.service(
    "Skybeard",
    ['$http', 'config', function($http, config) {
      var that = this;

      this.url = "http://"+config.skybeard_host+":"+config.skybeard_port;

      var getEndpoint = function(endpoint) {
        return function() {
          console.debug("Requesting GET: "+that.url+endpoint);
          return $http.get(that.url+endpoint);
        };
      };

      this.loadedBeards = getEndpoint("/loadedBeards");
      this.availableCommands = getEndpoint("/availableCommands");

    }]
  );

  app.controller(
    'PanelController',
    ['$scope', '$window',
     function($scope, $window) {
       this.tab = 1;

       this.selectTab = function(setTab) {
         this.tab = setTab;
       };

       this.isSelected = function(checkTab) {
         return this.tab === checkTab;
       };
     }]);
})();                           // End of closure
