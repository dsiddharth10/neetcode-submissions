class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const aMap = new Map();

        for (let str of strs) {
            const key = str.split('').sort().join('');

            if(!aMap.has(key)) {
                aMap.set(key, []);
            }

            aMap.get(key).push(str);
        }
        return Array.from(aMap.values());
    }
}
