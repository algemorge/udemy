// true or false 는 50/50 의 관계.
// 숫자 98이든 null값이든 고유한 truthness, falseness 가 있다.
// JS의 모든 값은 다음 경우를 제외하면 모두 truthy 다. 
// fasle, 0, ""(empty string), null, undefined, NaN 

// const userInput = prompt("Enter something");
// if (userInput) {
//    console.log("TRUTHY");
// } else {
//    console.log("FALSEY");
// }

if (0) { //null, undefined, NaN, fasle 을 넣어도 마찬가지
   console.log("TRUTHY");
} else {
   console.log("FALSEY");
}