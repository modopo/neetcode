function rightSideView(root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let curr = queue.shift();

      if (i === queue.length - 1) result.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    } 
  }

  return result;
}
