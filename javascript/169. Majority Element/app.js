/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    ans = nums[0]
    count = 1
    for(i = 1; i < nums.length ; i++){
        if (count === 0){
            ans = nums[i];
            count = 1;
        } else if (ans === nums[i]){
            count += 1;
        } else if( ans != nums[i]){
            count -= 1;
        }
    } return ans;
};