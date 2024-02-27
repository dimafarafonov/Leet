/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longUnique = "";
  let theLongest = ""
  let temp = "";
  s.split("").filter((item) => {
    if (temp.length >= longUnique.length) {
      longUnique = temp;
      temp = "";
    }

    if (longUnique.includes(item)) {
      temp += item;
      longUnique = item;
    } else {
      longUnique += item;
    }

    theLongest = theLongest.length <= longUnique.length ? longUnique : theLongest
    // console.log("temp", temp);
    // console.log("longUnique", longUnique);

    return true;
  });

  // longUnique = longUnique.length? longUnique : temp
  console.log("ergergre", theLongest);
  // console.log("splited", splited);
};
// to hard
export { lengthOfLongestSubstring };

export const example1 = "dvdf"; // TODO: this example is not working


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
