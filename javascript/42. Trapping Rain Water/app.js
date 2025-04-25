/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxValueLeft = 0
    let maxValueRight = 0
    let ans = 0
    let left = new Array(height.length)
    let right = new Array(height.length)
    for(i = 0; i < height.length ; i++){
        if(height[i] > maxValueLeft){
            left[i] = height[i]
            maxValueLeft = height[i]
        } else left[i] = maxValueLeft
    }
    for(i = height.length -1; i >= 0 ; i--){
        if(height[i] > maxValueRight){
            right[i] = height[i]
            maxValueRight = height[i]
        } else right[i] = maxValueRight
    }
    for ( i = 0 ; i < height.length ; i++){
        min = Math.min(left[i], right[i]);
        ans = ans + (min - height[i])
    }
    return ans;  
};