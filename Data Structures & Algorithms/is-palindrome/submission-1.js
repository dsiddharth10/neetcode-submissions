class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replaceAll(' ', '');
        let i = 0;
        let j = s.length;

        while(i < s.length && j >= 0) {
            if (this.checkForAlphaNumeric(s[i]) && this.checkForAlphaNumeric(s[j])) {
                if (s[i] != s[j]) {
                    return false
                }
                i++;
                j--;
            } else {
                if (!this.checkForAlphaNumeric(s[i])) {
                    i++;
                } else if (!this.checkForAlphaNumeric(s[j])) {
                    j--;
                }
            }
        }
        return true
    }

    checkForAlphaNumeric(ch) {
        if ((ch >= 'a' && ch <= 'z') || (ch >= 0 && ch <= 9)) {
            return true;
        } else {
            return false;
        }
    }
}
