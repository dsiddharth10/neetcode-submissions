class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const pMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (pMap.has(target-nums[i])) {
                return [pMap.get(target-nums[i]), i];
            }
            pMap.set(nums[i], i);
        }
        return [];
    }
}
