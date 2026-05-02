class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length === t.length) {
            let result = true
            let s2 = s.split('');
            let t2 = t.split('');
            s2.forEach((ch) => {
                if (t2.includes(ch)) {
                    t2.splice(t2.indexOf(ch),1)
                } else {
                    result = false
                }
            })
            return result
        }
        else {
            return false
        }
    }
}
