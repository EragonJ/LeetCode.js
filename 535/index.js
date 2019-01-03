var PREFIX = 'https://tinyurl.com/';
var table = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    var id = getRandomId();
    var result = PREFIX + id;
    table[result] = longUrl;
    
    return result;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return table[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

var getRandomId = function() {
    var id = '';
    var compositions = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i <= 10; i++) {
        id += compositions[Math.random() * compositions.length];
    }
    
    return id;
};

if (module) {
  module.exports = {
    encode: encode,
    decode: decode
  };
}
