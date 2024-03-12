/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 */

const input1 = [1, 2];
const input2 = [3, 4];

const input1_1 = [1, 3];
const input1_2 = [2];

export var findMedianSortedArrays = function (nums1 = [3], nums2 = [-2, -1]) {
  let inputSum = nums1.concat(nums2).sort((a, b) => a - b);

  console.log(inputSum);
  const lengthOfArray = inputSum.length;

  if (lengthOfArray % 2 === 0) {
    const indexOfFirstMedian = lengthOfArray / 2 - 1;
    const indexOfLastMedian = lengthOfArray / 2;

    return (
      (inputSum[indexOfFirstMedian] + inputSum[indexOfLastMedian]) /
      2
    ).toFixed(5);
  }

  if (lengthOfArray % 2 === 1) {
    const indexOfMiddle = Math.floor(lengthOfArray / 2);
    console.log(inputSum[indexOfMiddle]);
    return inputSum[indexOfMiddle].toFixed(5);
  }
};

// solved by brute force approach
// revisit this with binary search
