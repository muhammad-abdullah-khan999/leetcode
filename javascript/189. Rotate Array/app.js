/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(0, nums.length - 1); 
    reverse(0, k - 1);                  
    reverse(k, nums.length - 1);  
function reverse(i, j){
    while(i < j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
};
};