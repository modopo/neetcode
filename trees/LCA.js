function lowestCommonAncestor(root, p, q) {
  let curr = root;

  while (curr) {
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }
}

function recursiveLCA(root, p, q) {
  if (p.val > root.val && q.val > root.val) {
    return recursiveLCA(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    return recursiveLCA(root.left, p, q);
  } else {
    return root;
  }
}
