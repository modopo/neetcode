function isSameTree(p, q) {
  if (!q && !q) {
    return true;
  }

  if (!q || !p || p.val !== q.val) {
    return false;
  }

  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.left, q.left);

  return left && right;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? null : right;
  this.left = left === undefined ? null : left;
}

let tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(tree1, tree2));
