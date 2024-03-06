function lengthOfLongestSubstring(s) {
    let p1 = 0, p2 = 0, result = 0;

    let seen = new Map();

    while (p2 < s.length) {
        seen.set(s[p2], (seen.get(s[p2]) || 0) + 1);

        while (seen.get(s[p2]) > 1) {
            seen.set(s[p1], (seen.get(s[p1])) - 1);
            p1++;
        }
        
        result = Math.max(result, p2 - p1 + 1);

        p2++;
    }

    return result;
}

console.log(lengthOfLongestSubstring('abcabcbb'));