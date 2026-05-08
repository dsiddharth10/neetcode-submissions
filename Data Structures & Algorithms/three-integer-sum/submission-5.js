class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i-1]) continue
            
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                let threeSums = nums[i] + nums[l] + nums[r];
                if (threeSums < 0) {
                    l++;
                } else if (threeSums > 0) {
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]])
                    l++;
                    r--;
                    while (nums[l] === nums[l-1] && l < r) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
