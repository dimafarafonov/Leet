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
var addTwoNumbers = function (l1, l2) {
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

  const list = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 5,
        next: null,
      },
    },
  };
};

export { addTwoNumbers };
