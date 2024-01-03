/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  const recursion = (list, acc) => {
    if (!list?.val || !list["next"]) {
      // return if no data due to conditions
      return `${acc + (list?.val ? list.val : 0)}`;
    }

    let val = list.val;
    return recursion(list["next"], `${acc + list.val}`);
  };

  const firstList = recursion(l1, 0).split("").reverse().join("");

  console.log(firstList);

  const secondList = recursion(l2, 0).split("").reverse().join("");

  console.log(secondList);

  const outputStage1 = String(Number(firstList) + Number(secondList))
    .split("")
    .reverse();

  console.log(outputStage1);

  const reverseRecursion = (array, acc) => {
    if (!array?.length) {
      // return if no data due to conditions
      return acc;
    }

    console.log("acc", acc);

    // for (let keyNext in acc) {
    //   if (keyNext === "next") {
    //     if (!acc[keyNext]) {
    //       acc[keyNext] = { val: array[0], next: null };
    //     }
    //   }
    //   console.log("nextValue", keyNext);
    // }

    // if (!Object.keys(acc).length) { // for first init
    //   acc = { val: array[0], next: null };
    // }

    // could be the solution, but not completed
    array.shift();

    return reverseRecursion(array, acc);
  };

  const output = reverseRecursion(outputStage1, {});

  console.log("123", output);
  //   let l1Sum = l1
  //     .reverse()
  //     .reduce((acc, currentValue) => String(acc) + String(currentValue));
  //   let l2Sum = l2
  //     .reverse()
  //     .reduce((acc, currentValue) => String(acc) + String(currentValue));
  //   let finalArray = String(Number(l1Sum) + Number(l2Sum))
  //     .split("")
  //     .map((item) => {
  //       return +item;
  //     });
  //   console.log(finalArray);
  // wrong implementation, should be
};

const list1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const list2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

export { addTwoNumbers, list1, list2 };
