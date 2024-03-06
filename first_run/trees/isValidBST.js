function isValidBST(root) {
  let dfs = (node, low, high) => {
    if (!node) return true;

    if (node.val <= low || node.val >= high) return false;

    let left = dfs(node.left, low, node.val);
    let right = dfs(node.right, node.val, high);

    return left && right;
  }

  return dfs(root, -Infinity, Infinity);
}
