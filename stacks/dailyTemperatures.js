https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = [];

    for (let idx = 0; idx < temperatures.length; idx++) {
        let curr = temperatures[idx];

        while (stack.length && temperatures[stack[stack.length - 1]] < curr) {
            let prev = stack.pop();
            result[prev] = idx - prev;
        }

        stack.push(idx);
    }
};

console.log(dailyTemperatures([30, 60, 90]));
