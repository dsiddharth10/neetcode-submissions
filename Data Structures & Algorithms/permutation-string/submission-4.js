class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) return false;

        const s3 = s1.split('').sort().join('');

        let l = 0;
        let r = s1.length;
        while (r <= s2.length) {
            let substr = s2.substring(l, r);
            substr = substr.split('').sort().join('');
            if(s3 === substr) {
                return true;
            } else {
                l++; 
                r++;
            }
        }
        return false;
    }
}
