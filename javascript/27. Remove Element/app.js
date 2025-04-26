/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = nums.length - 1;
    let n = 0;
    for (let i = 0; i <= j; i++) {
        while (nums[j] === val && j > i) {
            j--;
            n++;
        }
        if (nums[i] === val) {
            nums[i] = nums[j];
            j--;
            n++;
        }
    }
    let k = nums.length - n;
    nums.splice(k, n);
};