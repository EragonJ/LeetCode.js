/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var hash = {};
    
    emails.forEach(function(email) {
        var pair = email.split('@');
        var localName = pair[0];
        var domainName = pair[1];
        
        // only use the first part before the first '+'
        localName = localName.split('+')[0];
        
        // ignore each '.' to get unique localName
        localName = localName.replace(/\./g, '');
        
        hash[localName + domainName] = true;
    });
    
    return Object.keys(hash).length;  
};

if (module) {
  module.exports = numUniqueEmails;
}
