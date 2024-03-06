/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    let map = new Map();
    for (let char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let start = 0, end = 0;
    let reqLen = s1.length;

    while (end < s2.length) {
        if (map.get(s2[end]) > 0) {
            reqLen--;
        }

        map.set(s2[end], map.get(s2[end]) - 1);
        end++;

        if (reqLen === 0) {
            return true;
        }

        if (end - start === s1.length) {
            if (map.get(s2[start]) >= 0) {
                reqLen++;
            }

            map.set(s2[start], map.get(s2[start]) + 1);
            start++;
        }

    }

    return false;
};



