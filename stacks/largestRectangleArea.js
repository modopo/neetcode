/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let result = 0;
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        let start = i;

        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [pos, height] = stack.pop();
            result = Math.max(result, (i - pos) * height);
            start = pos;
        }
        stack.push([start, heights[i]])
    }

    return result;
    
};

//[1, 3, 10, 2]