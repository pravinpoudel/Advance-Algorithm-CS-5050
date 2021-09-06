"use strict";

var finalPoint = [[1, 0.008314599990844726], [69, 2017.8069363999962]];
finalPoint.map(function (data) {
  data[1] = Math.log(data[1]);
  return data;
});

var findSlope = function findSlope(pointArray) {
  var slope = (pointArray[1][1] - pointArray[0][1]) / (pointArray[1][0] - pointArray[0][0]);
  return slope;
};

document.getElementById("slopeCard").innerHTML = "Emperical Finding of a Slope of a line in (linear - log) graph is " + findSlope(finalPoint).toFixed(3);
//# sourceMappingURL=slopeCalculator.dev.js.map
