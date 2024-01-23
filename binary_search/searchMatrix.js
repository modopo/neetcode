/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let start = 0, end = m * n -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let elem = matrix[Math.floor(mid / n)][mid % n];

        if (elem === target) {
            return true;
        } else if (elem < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return false;
};

let matrix = 
[[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    target = 3;

console.log(searchMatrix(matrix, target));