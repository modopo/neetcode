// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let lower = s.toLowerCase();
    let result = "";

    for (let char of lower) {
        if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
            result += char;
        }
    }

    let front = 0,
        back = result.length - 1;

    while (front < back) {
        if (result[front] === result[back]) {
            front++;
            back--;
        } else {
            return false;
        }
    }

    return true;
};
