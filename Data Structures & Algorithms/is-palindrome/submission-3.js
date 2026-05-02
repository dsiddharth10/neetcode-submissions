class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replaceAll(' ', '');
        const s1 = this.sanitizedString(s)
        return s1.split('').reverse().join('') === s1
    }

    sanitizedString(s) {
        const mod_s = [];
        for (let ch of s.split('')) {
            if (/^[a-z0-9]+$/i.test(ch)) {
                mod_s.push(ch);
            }
        }
        return mod_s.join('')
    }
}
