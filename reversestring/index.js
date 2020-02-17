// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   //   return str
//   //     .split("")
//   //     .reverse()
//   //     .join("");
//   return reversed;
// // }
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
// console.log(reverse("ijqe"));
// // 'cathy'
// // const t = ['c','a','t','h','y'] ['y','h','t','a','c']
// function reverse(str) {
//   const data = str
//     .split("")
//     .reverse()
//     .join("");
//   return str === data;
// }
// console.log(reverse("noon2"));
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - i];
  });
}
console.log(palindrome("noon"));
