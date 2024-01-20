/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let initPos = [];

    for (let idx = 0; idx < position.length; idx++) {
        initPos.push(idx);
    }

    initPos.sort((a, b) => position[b] - position[a]);
    // [10, 8, 0, 5, 3]
    // [0, 1, 3, 4, 2]

    let current = initPos[0];
    let result = 1;

    for (let i = 1; i < position.length; i++) {
        let nextCar = initPos[i];

        // current car (leader is fast takes 5 sec) 1/s 1/s next car (slower and takes 10 sec)
        // 1/5 < 1/10 shouldnt make a car fleet
        if (
            (target - position[nextCar]) / speed[nextCar] >
            (target - position[current]) / speed[current]
        ) {
            result++;
            current = nextCar;
        }
    }

    return result;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2,4,1,1,3]));
