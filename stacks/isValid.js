// https://leetcode.com/problems/valid-parentheses/description/

function isValid(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    let map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");

    let s1 = [];

    for (let char of s) {
        if (map.has(char)) {
            s1.push(char);
        } else if (!s1.length) {
            return false;
        } else {
            if (map.get(s1[s1.length - 1]) === char ) {
                s1.pop()
            } else {
                return false;
            }
        }
    }

    return !s1.length;
}

let test = "(()))";

console.log(isValid(test));