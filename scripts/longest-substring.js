/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // sliding window technique
  let maxSize = 0;
  let leftPointer = 0;
  // let rightPointer = 0;
  let runningValue = new Set();
  for (let rightPointer = 0; rightPointer < s.length; ) {
    const letter = s[rightPointer];
    if (!runningValue.has(letter)) {
      runningValue.add(letter);
      maxSize = Math.max(runningValue.size, maxSize); // need to finish
      rightPointer++;
    } else {
      runningValue.delete(s[leftPointer]);
      leftPointer++;
    }
  }

  console.log("runningValue", runningValue);
  // console.log("", runningValue);
  console.log("size", maxSize);
};

export { lengthOfLongestSubstring };

export const example1 = ["pwwkew"];
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


// Results: we done runtime 82ms beats - 62.79%, memory 53.61mb - beats 47.15$ 
// but range of runtime could be from 69 up to 88 - strange
