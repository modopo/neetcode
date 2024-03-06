function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let tmap = new Map();
  let smap = new Map();

  for (let char of t) {
    tmap.set(char, (tmap.get(char) || 0) + 1);
  }
  for (let char of s) {
    smap.set(char, (smap.get(char) || 0) + 1);
  }

  for (let [key, val] of tmap) {
    if (!smap.has(key)) {
      return false;
    }
    if (smap.get(key) !== val) {
      return false;
    }
  }
  return true;
}
