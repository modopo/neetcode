function topKFrequent(nums, k) {
  let minpq = new MinPriorityQueue();
  let map = new Map();
  let result = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, freq] of map) {
    minpq.enqueue(key, freq);
  }

  while (minpq.size() > k) {
    minpq.dequeue();
  }

  for (let i = 0; i < k; i++) {
    result.push(minpq.dequeue().element);
  }

  return result;
}
