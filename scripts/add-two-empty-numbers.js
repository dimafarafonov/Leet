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
    if (list["val"] === undefined || !list["next"]) {
      // Wrong Answer 1565 / 1568 testcases passed
      // return if no data due to conditions
      return `${acc + (list.val ? list.val : 0)}`;
    }

    return recursion(list["next"], `${acc + list.val}`);
  };
  const reverseRecursion = (array, current, sum) => {
    if (!array?.length) {
      // return if no data due to conditions
      return current;
    }

    current.next = { val: array[0], next: null };

    // could be the solution, but not completed
    array.shift();

    return reverseRecursion(array, current.next);
  };

  const firstList = recursion(l1, 0).split("").reverse().join("");

  const secondList = recursion(l2, 0).split("").reverse().join("");

  const outputStage1 = String(BigInt(firstList) + BigInt(secondList)) // BigInt was the saver to represent 1e+43 number without exp annotation 
    .split("")
    .reverse();


  const head = { val: outputStage1[0], next: null }; // key point, solved with chatgpt help
  outputStage1.shift();

  reverseRecursion(outputStage1, head, {});

  console.log("head", head); // Wrong Answer 284 / 1568 testcases passed
  return head;
};

// const list1 = {
//   val: 1,
//   next: {
//     val: 0,
//     next: {
//       val: 9,
//       next: null,
//     },
//   },
// };

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

const list1 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 0,
                                next: {
                                  val: 0,
                                  next: {
                                    val: 0,
                                    next: {
                                      val: 0,
                                      next: {
                                        val: 0,
                                        next: {
                                          val: 0,
                                          next: {
                                            val: 0,
                                            next: {
                                              val: 0,
                                              next: {
                                                val: 0,
                                                next: {
                                                  val: 0,
                                                  next: {
                                                    val: 0,
                                                    next: {
                                                      val: 0,
                                                      next: {
                                                        val: 0,
                                                        next: {
                                                          val: 0,
                                                          next: {
                                                            val: 0,
                                                            next: {
                                                              val: 0,
                                                              next: {
                                                                val: 0,
                                                                next: {
                                                                  val: 0,
                                                                  next: {
                                                                    val: 0,
                                                                    next: {
                                                                      val: 0,
                                                                      next: {
                                                                        val: 0,
                                                                        next: {
                                                                          val: 0,
                                                                          next: {
                                                                            val: 0,
                                                                            next: {
                                                                              val: 0,
                                                                              next: {
                                                                                val: 0,
                                                                                next: {
                                                                                  val: 0,
                                                                                  next: {
                                                                                    val: 0,
                                                                                    next: {
                                                                                      val: 0,
                                                                                      next: {
                                                                                        val: 1,
                                                                                        next: null,
                                                                                      },
                                                                                    },
                                                                                  },
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export { addTwoNumbers, list1, list2 };

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
