function goodNodes(root) {
  let dfs = (node, high) => {
    if (!node) {
      return 0;
    }

    let left = dfs(node.left, Math.max(high, node.val));
    let right = dfs(node.right, Math.max(high, node.val));

    let result = left + right;

    if (node.val >= high) {
      result++;
    };

    return result;
  }

  return dfs(root, -Infinity);
}
