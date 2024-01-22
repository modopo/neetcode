// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = [-1, -1];
    let front = 0, back = numbers.length - 1;

    while (front < back) {
        let sum = numbers[front] + numbers[back];

        if (sum === target) {
            return [front + 1, back + 1];
        } else if (sum < target) {
            front++;
        } else {
            back--;
        }
    }

    return result;
};

