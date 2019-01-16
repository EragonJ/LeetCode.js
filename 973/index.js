/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  var result = [];
  
  var distances = points.map(function(pSet) {
    var dist = pSet[0] * pSet[0] + pSet[1] * pSet[1];
    return {
      dist: dist,
      pSet: pSet
    };
  });
  
  distances.sort(function(oA, oB) {
    return oA.dist - oB.dist
  });
  
  for (var i = 0; i < K; i++) {
    result.push(distances[i].pSet);
  }
  
  return result;
};

if (module.exports) {
  module.exports = kClosest;
}
