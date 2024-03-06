function characterReplacement(s, k) {
    let result = 0;
    let seen = new Set();

    for (let char of s) {
        seen.add(char);
    }

    for (let char of s) {
        let start = 0;
        let count = 0;

        for (let end = 0; end < s.length; end++) {
            if (s[end] === char) {
                count++;
            }

            while (!(end - start + 1 - count <= k)) {
                if (s[start] === char) {
                    count--;
                }

                start++;
            }

            result = Math.max(result, end - start + 1);
        }
    }

    return result;
};

console.log(characterReplacement('AABCBCB', 2));

