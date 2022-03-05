/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var indexS = 0;
    var indexT = 0;
    
    if(s == t) {
        return true;
    }
    
    while(indexT < t.length) {
        if(s[indexS] == t[indexT]) {
            indexS++;
        }
        if( indexS == s.length ) {
            return true;
        }
        indexT++;
    }
    
    return false;
};

module.exports = isSubsequence;
