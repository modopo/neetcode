function kthSmallest(root, k) {
  let result = Infinity;

  let dfs = (node) => {
    if (!node) return;

    dfs(node.left);

    k--;
    if (k === 0) {
      result = node.val;
    }
    dfs(node.right);

  }
  dfs(root);
  return result;
}
