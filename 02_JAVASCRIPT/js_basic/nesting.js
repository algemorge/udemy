/****************************************** nesting ******************************************************/
// 조건문 안에 조건문 넣기
const password = prompt("please enter a new password");

// 비밀번호는 6자리 이상이어야 함 -> .length
// if (password.length >= 6) {
//    console.log("Long enough password!");
// } else {
//    console.log("PASSWORD TOO SHORT! Must be 6+ charactors");
// }
// // 비밀번호는 공백 포함하지 않음 -> indexOf
// // indexOf로 공백이 없으면 -1로 표현됨
// if (password.indexOf(' ') === -1) {
//    console.log("Good job! No space!");
// } else {
//    console.log("Pasword cannot contain spaces!");
// }



// 비밀번호는 6자리 이상이어야 함 -> .length
if (password.length >= 6) {
   if (password.indexOf(' ') === -1) {
      console.log("Valid password!");
   } else {
      console.log("Pasword cannot contain spaces!");
   }
} else {
   console.log("PASSWORD TOO SHORT! Must be 6+ charactors");
}