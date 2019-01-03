/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var indicies = getTargetIndicies(S, C);
    var result = [];
    
    for (var i = 0; i < S.length; i++) {
        result.push(getShortestDistance(i, indicies));
    }
    
    return result;
};

var getTargetIndicies = function(S, C) {
    var result = [];
    
    for (var i = 0; i < S.length; i++) {
        if (S[i] === C) {
            result.push(i);
        }
    }
    
    return result;
};

var getShortestDistance = function(currentIndex, targetIndicies = []) {    
    var result = targetIndicies.map(function(eachIndex) {
        return Math.abs(eachIndex - currentIndex);
    });
    
    return Math.min.apply(null, result);
};

if (module) {
  module.exports = shortestToChar;
}
