/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	var binaray = getBinarayString(num);
  var complement = getComplementString(binaray);
  
  var result = 0;
  complement.split('').reverse().forEach((bit, index) => {
    result += Math.pow(2, index) * bit;
  });

  return result;
};

var getComplementString = function(str) {
  return str.split('').map((bit) => {
    return (bit === '0') ? '1' : '0';
  }).join('');
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

module.exports = findComplement;
