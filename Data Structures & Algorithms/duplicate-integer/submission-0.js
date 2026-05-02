class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique_nums = new Set();
        nums.forEach((n) => unique_nums.add(n))
        if (unique_nums.size !== nums.length) {
            return true
        } return false
    }
}
