function productExceptSelf(nums) {
  let result = [];
  let left = 1,
    right = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  console.log("from left: ", result);

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  console.log("from right: ", result);
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
