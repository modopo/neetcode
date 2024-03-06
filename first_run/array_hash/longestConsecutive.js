//https://leetcode.com/problems/longest-consecutive-sequence

var longestConsecutive = function (nums) {
    let longest = 0;
    let seen = new Set();

    for (let number of nums) {
        seen.add(number);
    }

    console.log(seen);

    for (let number of seen) {
        if (!seen.has(number - 1)) {
            let current = number;
            let streak = 1;

            while (seen.has(current + 1)) {
                current += 1;
                streak += 1;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;
};

let test = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(test));
