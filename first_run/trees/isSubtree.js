function isSubtree(root, subRoot) {
  let isSameTree = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }

    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    
    let left = isSameTree(node1.left, node2.left);
    let right = isSameTree(node1.right, node2.right);

    return left && right;
  }

  let dfs = (node) => {
    if (!node) return false;
    
    if (isSameTree(node, subRoot)) {
      return true; 
    }

    return dfs(node.left) || dfs(node.right); 
  }

  return dfs(root);
}
