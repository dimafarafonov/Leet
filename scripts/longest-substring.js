/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const subStringArray = s.split("");

  let theLongest = "";
  let accumulator = "";
  for (let i = 0; i < subStringArray.length; i++) {
    // console.log('accumulator', accumulator)
    if (accumulator.includes(subStringArray[i])) {
      theLongest = theLongest.length >= accumulator.length ? theLongest : accumulator;
      accumulator = "";
    }
    accumulator += subStringArray[i];
  }

  // longestAcc = longestAcc.length? longestAcc : temp
  console.log("the longest", theLongest);
  // console.log("splited", splited);
};
// to hard
export { lengthOfLongestSubstring };

export const example1 = ["dvdf", "abcabcbb", "bbbbb", "pwwkew"]; // TODO: this example is not working

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
