class Solution {

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    
    encode(strs) {
        let encoded_str = '';
        for (let s of strs) {
            s = s.length + '#' + s;
            encoded_str += s;
        }
        return encoded_str ;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        let length = 0;
        let i = 0;
        const decoded_strs = [];
        while (i < str.length) {
            const ch = str.charAt(i)
            if (ch === '#') {
                decoded_strs.push(str.substring(i+1, i+parseInt(length)+1));
                i = i+parseInt(length)+1
                length = 0;
            } else {
                length += ch;
                i++;
            }
        }
        return decoded_strs;
    }
}
