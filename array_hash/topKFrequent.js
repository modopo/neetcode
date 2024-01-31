/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map();

    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    let entries = Array.from(map.entries());

    entries.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localCompare(b[0]);
        }
    });

    return entries.slice(0, k).map(([key]) => key);
};


console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2));``