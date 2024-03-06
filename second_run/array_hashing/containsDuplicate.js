function containsDuplicate(nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;

    seen.add(num);
  }
  return false;
}

function faster(nums) {
  let set = new Set(nums);

  return set.size !== nums.length;
}
