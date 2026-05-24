class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left, right, maxLen = 0, 0, 0
        charSet = set()

        while right < len(s):
            if s[right] in charSet:
                while s[right] in charSet and left < right:
                    charSet.remove(s[left])
                    left += 1
                charSet.add(s[right])
                right += 1
            else:
                charSet.add(s[right])
                maxLen = max(maxLen, right - left + 1)
                right += 1

        return maxLen