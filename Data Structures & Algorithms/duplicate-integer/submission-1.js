class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uNum = new Set();
        nums.map((e)=> uNum.add(e))
        if (uNum.size !== nums.length) {
            return true
        }
        return false
    }
}
