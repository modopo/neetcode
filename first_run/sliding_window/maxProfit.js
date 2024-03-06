function maxProfit(prices) {
    let min = Infiinty;
    let profit = 0;

    for (let price of prices) {
        if (price < min) {
            min = price;
        } else if (price - min > profit) {
            profit = price - min;
        }
    }

    return profit;
}
