(function(){
  var app = angular.module( "APIBeardDemo");
  app.service(
    "APIBeardService",
    ['$http', '$location', 'config', function APIBeardFunction($http, $location, config) {
      var that = this;

      this.beards = [];
      this.availableCommands = [];

      this.setBeards = function(beards) {
        this.beards = beards;
      };

      this.getBeards = function() {
        return this.beards;
      };

      var hostname = $location.host();

      this.fetchBeards = function(){
        $http.get("http://"+hostname+":"+config.skybeard_port+"/loadedBeards").then( function(data) {
          that.setBeards(data.data);
        });
      };

      this.fetchAvailableCommands = function() {
        $http.get("http://"+hostname+":"+config.skybeard_port+"/availableCommands").then(
          function(data) {
            that.availableCommands = data.data;
          });
      };
    }
    ]);

  app.controller(
    'PanelController',
    ['$scope', '$window', 'APIBeardService', 
     function($scope, $window, APIBeardService) {
       this.tab = 1;

       APIBeardService.fetchBeards();
       this.selectTab = function(setTab) {
         this.tab = setTab;
         // TODO make it not hard coded
         if(this.tab === 1) {
           APIBeardService.fetchBeards();
         };
       };

       this.isSelected = function(checkTab) {
         return this.tab === checkTab;
       };
     }]);

  app.controller(
    'loadedBeardsController',
    ['APIBeardService', function(APIBeardService) {
      this.APIBeardService = APIBeardService;
    }]);

  app.directive('loadedBeards', function(){
    return {
      restrict: "E",
      templateUrl: "html/loaded-beards.html"
    };
  });
})();                           // End of closure
