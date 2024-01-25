function findMin (nums) {
    let l = 0, r = nums.length - 1;


    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return nums[l];
}

let test = [1,2,3,4];

console.log(findMin(test));