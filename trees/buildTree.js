function buildTree(preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let index = 0;

  let arrayToTree = (l, r) => {
    if (l > r) return null;

    let rootVal = preorder[index];
    let root = new TreeNode(rootVal);
    index++;

    root.left = arrayToTree(l, map.get(rootVal) - 1);
    root.rigth = arrayToTree(map.get(rootVal) + 1, r);

    return root;
  }
  return arrayToTree(0, preorder.length - 1);
}
