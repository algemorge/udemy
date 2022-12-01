/** 여러개의 인수를 전달하는 함수를 정의하는 방법
 * 
 * 
 */

function findLargest(x, y) {
   if (x > y) {
      console.log(`${x} is larger!`);
   } else if (x < y) {
      console.log(`${y} is larger!`);
   } else {
      console.log(`${x} and ${y} are equal!`);
   }
}

// 다중 인수 넣는 법 : 두개 이상의 매개변수를 넣고 쉼표로 구분
// 순서 중요!
function greet(firstName, lastName) {
   console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}


// 첫번째 인수에 문자열을 넣고 두번째 인수에 숫자를 넣어 반복시켜보자
function repeat(str, numTimes) {
   for (let i = 0; i < numTimes; i++) {
      console.log("HI");
   }
}
// HI
// HI
// HI
// HI
// HI

function repeat2(str, numTimes) {
   // 모든 인수를 한줄에 두려면 result라는 빈 문자열에 넣기
   let result = '';
   for (let i = 0; i < numTimes; i++) {
      // str을 rusult에 넣기. +=로 전달하는 문자열이 들어가게 함
      // 처음에는 결과가 없지만 특정횟수만큼 반복되면서 
      // 매개변수인 str 자리에 $기호가 계속 합쳐지는 결과 나옴
      result += str;
   }
   console.log(result);
}
// $$$$$