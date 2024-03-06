// https://leetcode.com/problems/valid-anagram/

//Maps

let isAnagram = function (s, t) {
    let mapS = new Map();
    let mapT = new Map();

    if (s.length !== t.length) {
        return false;
    }

    for (let char of s) {
        if (!mapS.get(char)) {
            mapS.set(char, 1);
        } else {
            mapS.set(char, mapS.get(char) + 1);
        }
    }

    for (let char of t) {
        if (!mapT.get(char)) {
            mapT.set(char, 1);
        } else {
            mapT.set(char, mapT.get(char) + 1);
        }
    }

    for (let [key, value] of mapS) {
        if (!mapT.has(key)) {
            return false;
        }
        if (mapT.get(key) !== value) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('anagram', 'nagaram'));

//Arrays

let isAnagramArray = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    let characters = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        characters[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        characters[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return characters.every(count => count === 0);
}