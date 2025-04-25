/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //if x is less than 0 or (x % 10 is 0 and x != 0 ) then it's not a palindrome
    if (x < 0 || (x % 10 === 0 && x != 0)) return false;
    
    let reversed = 0;
    while(x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    //First condition is for even no of digits of reversed and second condition is for odd no of digits of reversed
    return x === reversed || x === Math.floor(reversed / 10)
};