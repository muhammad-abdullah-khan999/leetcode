/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ").reverse()
    length = s[0].length
    return length
};