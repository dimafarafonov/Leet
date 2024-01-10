/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let accumulator = "";
  let theLongestSequence = "";
  s.split("").map((item, index) => {
    if (accumulator.includes(item)) {
      theLongestSequence = accumulator;
    }

    accumulator = accumulator + item;
  });

  console.log(accumulator); // something is unclear here but made the approach
};
// to hard
export { lengthOfLongestSubstring };

export const example1 = "abcabcbb";
// preparing for next func, hard day, but small step is done
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
