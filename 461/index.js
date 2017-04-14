/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var xBinaray = getBinarayString(x);
  var yBinaray = getBinarayString(y);
  var maxLength = Math.max(xBinaray.length, yBinaray.length);

  xBinaray = pad(xBinaray, maxLength);
  yBinaray = pad(yBinaray, maxLength);

  var distance = 0;
  for (var i = 0; i < xBinaray.length; i++) {
    var bitX = xBinaray[i];
    var bitY = yBinaray[i];
    if (bitX !== bitY) {
      distance++;
    }
  }

  return distance;
};

var getBinarayString = function(input) {
	var str = '';
	do {
		str = (input % 2) + str;
		input = Math.floor(input / 2);
	}
	while(input > 0);
	return str;
};

var pad = function(str, length) {
  var padLength = length - str.length;
  if (padLength < 0) {
    return str;
  }
  else {
    var result = '';
    while (padLength > 0){ 
      result += '0';
      padLength --;
    }
    result += str;
    return result;
  }
};

module.exports = hammingDistance;
