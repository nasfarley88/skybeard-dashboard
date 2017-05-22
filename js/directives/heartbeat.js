(function(){
  // Grab the app
  var app = angular.module( "APIBeardDemo");

  app.directive('heartbeat', function(){
    return {
      restrict: "E",
      templateUrl: "html/heartbeat.html",
      controller: ['$interval', function($interval) {
        var svg = d3.select('#heartbeat')
            .append('svg')
            .attr('width', 200)
            .attr('height', 200);
        var g = svg.append('g')
            .attr('transform', 'translate(10, 10)');

        var rectangle = g.append('rect');


        var growAttr = function(obj, growAmount, attr) {
          return obj.attr(attr, +obj.attr(attr)+growAmount);
        };

        var growRectangle = function(rect, growAmount) {
          growAttr(rect, -growAmount, 'x');
          growAttr(rect, -growAmount, 'y');
          growAttr(rect, 2*growAmount, 'width');
          growAttr(rect, 2*growAmount, 'height');
        };
        var shrinkRectangle = function(rect, growAmount) {
          growAttr(rect, growAmount, 'x');
          growAttr(rect, growAmount, 'y');
          growAttr(rect, -2*growAmount, 'width');
          growAttr(rect, -2*growAmount, 'height');
        };

        // shrinkRectangle(rectangle);
        rectangle.attr('x', 10)
          .attr('y', 10)
          .attr('width', 170)
          .attr('height', 170)
          .style('fill', 'red');

        var growOrShrink = "grow";

        $interval(
          function() {
            let maxWidth = 180;
            let minWidth = 100;
            let growAmount = 2;

            if(growOrShrink === "grow") {
              growRectangle(rectangle, growAmount);
            } else {
              shrinkRectangle(rectangle, growAmount);
            }

            if(rectangle.attr('width') >= maxWidth) {
              growOrShrink = "shrink";
            } else if(rectangle.attr('width') <= minWidth) {
              growOrShrink = "grow";
            }
          },
          30);

        rectangle.on("mouseenter", function() {
          let rect = d3.select(this);
          growRectangle(rect);
        })
          .on('mouseout', function() {
            let rect = d3.select(this);
            shrinkRectangle(rect);
          });
      }]
    };
  });
})();                           // End of closure
