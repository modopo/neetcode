function invertTree(root) {
    let dfs = node => {
        if (!node) {
            return;
        };

        dfs(node.left);
        dfs(node.right);

        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        return node;
    };

    return dfs(root);
}