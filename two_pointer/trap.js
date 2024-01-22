/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let start = 0, end = height.length - 1;
    let maxL = 0, maxR = 0;

    while (start < end) {
        if (height[start] < height[end]) {
            if (maxL < height[start]) {
                maxL = Math.max(maxL, height[start]);
            } else {
                result += maxL - height[start];
                start++
            }
        } else {
            if (maxR < height[end]) {
                maxR = Math.max(maxR, height[end]);
            } else {
                result += maxR - height[end];
                end--
            }
        }
    }
    return result;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(height));