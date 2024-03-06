function levelOrder(root) {
  let queue = [[root]];
  let result = [];

  if (!root) {
    return result;
  }

  while (queue.length) {
    let curr = queue.shift();
    let layer = [];
    let temp = [];

    for (let node of curr) {
      temp.push(node.val);  
      if (node.left) {
        layer.push(node.left);
      } 
      if (node.right) {
        layer.push(node.right);
      }
    }
    result.push(temp);
    
    if (layer.length) {
      queue.push(layer);
    }

  }
  return result;
}
