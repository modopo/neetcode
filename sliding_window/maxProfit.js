function maxProfit(prices) {
    let min = Infinity;
    let price = 0;

    for (let i = 0; i < prices.length; i++) {
        if (price[i] < min) {
            min = price[i];
        } else if (price[i] - min > price) {
            price = price[i] - min;
        }
    }

    return price;
}
