class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let maxLen = 0;

        let l = 0;
        let r = 0;

        while (r < s.length) {
            if (charSet.has(s[r])) {
                maxLen = Math.max(maxLen, r - l);
                while(charSet.has(s[r])) {
                    charSet.delete(s[l]);
                    l++;
                }
                charSet.add(s[r]);
                r++;
            } else {
                charSet.add(s[r]);
                r++;
            }
            maxLen = Math.max(maxLen, r - l);
        }

        return maxLen;
    }
}

            
