class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    // AAABABB

    characterReplacement(s, k) {
        let l = 0, r = 0, maxf = 0, maxl = 0;
        const hashMap = new Map();

        while (r < s.length) {
            hashMap.has(s[r]) ? hashMap.set(s[r], parseInt(hashMap.get(s[r]))+1) : hashMap.set(s[r], 1);
            maxf = Math.max(maxf, hashMap.get(s[r]));
            
            if ((r-l+1) - maxf > k) {
                hashMap.set(s[l], parseInt(hashMap.get(s[l]))-1);
                maxf = 0;
                l++;
            }

            if ((r-l+1) - maxf <= k) {
                maxl = Math.max(maxl, r-l+1);
            }
            r++;
        }
        return maxl;
    }
}
