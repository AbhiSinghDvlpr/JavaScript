let arr = "race a car";

const validPalindrome = (s) => {
  let arr = s
    .trim("")
    .split("")
    .join("")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
  let str = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    str += arr[i];
  }
  return str == arr;
};

console.log(validPalindrome(arr));
