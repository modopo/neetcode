function rightSideView(root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length) {
    let size = queue.length;

    result.push(queue[size - 1].val);
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();

      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  return result;
}
