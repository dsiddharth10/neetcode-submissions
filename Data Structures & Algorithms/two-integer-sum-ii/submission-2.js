class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        
        while (i < j) {
            let curr_sum = numbers[i] + numbers[j];
            if (curr_sum === target) {
                return [i+1, j+1];
            } else if (curr_sum < target) {
                i++;
            } else if (curr_sum > target) {
                j--;
            } else {
                return [];
            }
        }
    }
}


