function longestPath(root) {
    let diameter = 0;

    let dfs = (node) => {
        if (!node) {
            return 0;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    };

    return diameter;
}
