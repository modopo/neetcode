https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums, k) {
    let map = new Map();
    let result = [];
    let temp = [];

    for (let number of nums) {
        map.set(number, (map.get(number) || 0) + 1);
    }

    for (let [number, freq] of map) {
        temp[freq] = (temp[freq] || new Set()).add(number);
    }

    for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i]) {
            result.push(...temp[i]);
        }

        if (result.length === k) {
            break;
        }
    }

    return result;
}