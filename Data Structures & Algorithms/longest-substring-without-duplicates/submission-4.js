class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let subStr = '';
        let lenSubStr = 0;

        if (s.length === 0) return 0

        for (let i = 0; i <= s.length; i++) {
            const ch = s.charAt(i);
            if (subStr.includes(ch)) {
                let index = subStr.indexOf(ch);
                lenSubStr = Math.max(lenSubStr, subStr.length);

                subStr = subStr.substring(index+1);
                subStr += ch;
            } else {
                subStr += ch;
            }
        }
        return lenSubStr;
    }
}

            
