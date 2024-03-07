function groupAnagrams(strs) {
  let result = [];
  let map = new Map();

  for (let word of strs) {
    let sorted = word.split("").sort().join("");

    if (!map.has(sorted)) {
      map.set(sorted, [word]);
    } else {
      map.get(sorted).push(word);
    }
  }

  for (let [key, val] of map) {
    result.push(val);
  }

  return result;
}
