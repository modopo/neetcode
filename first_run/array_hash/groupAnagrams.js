function groupAnagrams(strs) {
    let result = [];
    let map = new Map();

    strs.forEach(word => {
        let sort = word.split('').sort().join('');

        if (!map.has(sort)) {
            map.set(sort, [word]);
        } else {
            map.get(sort).push(word);
        }
    });

    for (let [key, value] of map) {
        result.push(value);
    }

    return result;

}


let test = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(test));