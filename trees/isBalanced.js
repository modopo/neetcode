function isBalanced(root) {
    let result = true;
    
    let dfs = node => {
        if (!node) {
            return 0;
        };

        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right);
    };

  return dfs(root) === -1 ? false : true;
}
