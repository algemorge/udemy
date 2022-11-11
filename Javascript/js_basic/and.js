/*************************************** AND *******************************************/
// and : && : 문장 전체가 참이 되려면 왼쪽과 오른족이 다 참이어야 함
1 <= 4 && 'a' === 'a'; // true
9 > 10 && 9 >= 9; // true
'abc'.length === 3 && 1 + 1 === 4; // false

true && true // true
true && false // false
false && false // false
false && true // false

const password = prompt("Ender your password");
// 첫번째가 거짓이면 JS는 두번째를 그냥 지나친다 -> 단축평가. 비용낭비 않기 위함
if (password.length >= 6 && password.indexOf(" ") === -1) {
   console.log("Valid password");
} else {
   console.log("nooooo");
}