/*********************************** break keyword **************************************/
// 몇번을 반복해야 할지 모르는 while 문에서 자주 사용됨
// 루프 안에 break 키워드를 작성해야 실행됨

//========================================================================
// 문법 
// 사용자가 입력해야 하는 수 === 맞춰야 하는 수 -> break로 빠져나옴

// let targetNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (true) {
//    guess = Math.floor(Math.random() * 10);
//    if (guess === targetNum) {
//       console.log(`CORRECT! Guessed: ${guess}& target was: ${targetNum}`);
//       break;
//    }
//    else {
//       console.log(`Guessed ${guess}...Incorrect!`);
//    }
// }

//========================================================================

let input = prompt("Hey, say something!")
// while 조건이 참
while (true) {
   input = prompt(input);
   // break를 같은 줄에 넣을 수 있음
   if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN!");


// break는 반복을 멈추려고 사용하기 때문에 for문에서는 어색하다
for (let i = 0; i < 1000; i++) {
   console.log(i);
   if (i === 100) break
}