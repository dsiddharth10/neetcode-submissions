class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seqSet = new Set(nums);

        let longest = 0;

        for (let n of nums) {
            let length = 0;
            if (!seqSet.has(n-1)) {
                while (seqSet.has(n+length)) {
                    length += 1;
                }
                longest = Math.max(length, longest)
            }
        }

        return longest
    }
}
