function longestConsecutive(nums) {
  let seen = new Set();
  let result = 0;

  for (let num of nums) {
    seen.add(num);
  }

  for (let num of nums) {
    if (!seen.has(num - 1)) {
      let curr = num;
      let streak = 1;

      while (seen.has(curr + 1)) {
        curr++;
        streak++;
      }

      result = Math.max(result, streak);
    }
  }
  return result;
}

console.log(longestConsecutive([1, 2, 5, 4, 6, 7]));
