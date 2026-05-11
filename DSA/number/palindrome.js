const isPallindrome = (s) => {
  let n = s;
  let num = 0;

  while (n > 0) {
    let rem = n % 10;
    num = num * 10 + rem;
    n = Math.floor(n / 10);
  }

  return num === s;
};

console.log(isPallindrome(121));
