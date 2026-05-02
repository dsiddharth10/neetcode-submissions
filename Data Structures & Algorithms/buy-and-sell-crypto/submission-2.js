class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let profit = 0;
        // for (let i = 0; i < prices.length - 1; i++) {
        //     for (let j = i + 1; j < prices.length; j++) {
        //         if (prices[i] < prices[j]) {
        //             profit = profit < prices[j] - prices[i] ? prices[j] - prices[i] : profit;
        //         }
        //     }
        // }
        // return profit

        let l = 0, r = 0;
        let maxP = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                l = r;
            }
            r++;
        }
        return maxP
    }
}
