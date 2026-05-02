class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let maxArea = 0;

        while (l < r) {
            let area = 0;
            area = Math.min(heights[l], heights[r]) * (r-l);
            maxArea = Math.max(maxArea, area);
            
            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea

    }
}
