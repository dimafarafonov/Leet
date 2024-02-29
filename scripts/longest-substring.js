/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) { // sliding window technique
  const subStringArray = s.split("");

  let startWindowIndex = 0;
  let endWindowIndex = subStringArray.length;

  let accumulator = subStringArray[0];
  for (let i = 1; i <= subStringArray.length; i++) {
    if (accumulator.includes(subStringArray[i])) {
    }
  }
};

export { lengthOfLongestSubstring };

export const example1 = ["dvdf"];
// export const example1 = ["dvdf", "abcabcbb", "bbbbb", "pwwkew"];

// one more example: dvdf
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// coding to much on main work, resting
