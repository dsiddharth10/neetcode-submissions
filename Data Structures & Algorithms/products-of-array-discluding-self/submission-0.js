class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let pre_post = 1;
        res.push(pre_post);
        for (let i = 1; i < nums.length; i++) {
            pre_post *= nums[i-1];
            res.push(pre_post);
        }

        pre_post = 1;
        for (let i = nums.length - 2; i >= 0 ; i--) {
            pre_post *= nums[i+1];
            res[i] *= pre_post;
        }

        return res
    }
}
