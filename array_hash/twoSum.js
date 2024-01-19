// https://leetcode.com/problems/two-sum/description/

let twoSum = (nums, target) => {
    for (let outer = 0; outer < nums.length; outer++) {
        for (let inner = nums.length - 1; inner > outer; inner--) {
            if (nums[outer] + nums[inner] === target) {
                return [outer, inner];
            }
        }
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9));

let twoSumMap = (nums, target) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get[comp], i];
        }

        map.set(nums[i], i);
    }
}