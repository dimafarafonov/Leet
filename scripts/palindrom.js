const palindrom = (initNum) => {
  if (initNum < 0) {
    return false;
  }

  let cpInitNum = initNum;
  let reverseNum = 0;

  while (cpInitNum !== 0) {
    let digit = cpInitNum % 10;
    reverseNum = +reverseNum * 10 + digit;
    cpInitNum = parseInt(cpInitNum / 10, 10);
  }

  // let digit = cpInitNum % 10;
  // reverseNum = +reverseNum * 10 + digit;
  // cpInitNum = parseInt(cpInitNum / 10, 10);

  // let digit1 = cpInitNum % 10;
  // reverseNum = +reverseNum * 10 + digit1;
  // cpInitNum = parseInt(cpInitNum / 10, 10);

  // let digit2 = cpInitNum % 10;
  // reverseNum = +reverseNum * 10 + digit2;
  // cpInitNum = parseInt(cpInitNum / 10, 10);

  console.log(initNum);
  console.log(reverseNum);
  console.log(initNum === reverseNum);
};

export { palindrom };
