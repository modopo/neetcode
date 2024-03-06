// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        twoSum(nums, i, result);
    }
    return result;
}

let twoSum = (nums, i, result) => {
    let start = i + 1, end = nums.length - 1;

    while (start < end) {
        let sum = nums[i] + nums[start] + nums[end];

        if (sum < 0) {
            start++;
        } else if (sum > 0) {
            end--;
        } else {
            result.push([nums[i], nums[start], nums[end]]);
            while(nums[start] === nums[start + 1]) start++;
            while(nums[end] === nums[end - 1]) end--;
            start++;
            end--;
        }
    }
};

console.log(threeSum([-1,0,1,2,-1,-4]));