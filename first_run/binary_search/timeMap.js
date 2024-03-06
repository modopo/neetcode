let TimeMap = function () {
    this.map = new {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
    this.map[key] = this.map[key] || [];
    this.map[key].push([value, timestamp]);
}

TimeMap.prototype.get = function (key, timestamp) {
    let result = "";
    let values = this.map[key] || [];

    let [l, r] = [0, values.length - 1];

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        let [v, t] = values[mid];

        if (timestamp === t) {
            return v;
        }

        if (timestamp >= t) {
            l = mid + 1;
            result = v;
        } else {
            r = mid - 1;
        }
    }

    return result;
}