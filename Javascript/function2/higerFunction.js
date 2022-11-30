//======================= 고차함수 =========================
// : 다른 함수와 함께 작동하거나 다른 함수에서 작동하는 함수를 고급스럽게 표현
// 1. 다른 함수를 인수로 받아서 보통은 그 인수로 어떤 작업을 하는 함수
// 2. 함수를 반환할 수 있는 함수

let greet = function () {
   console.log("HI!");
}

//========================================================
// 인수로서의 함수
// 함수를 변수에 저장 가능 => 함수를 인수로 전달 가능

// 두번 실행
function callTwice(func) {
   func();
   func();
}

function laugh() {
   console.log("HAHAHAHHAAHHAHAHAH!!");
}

// 주사위 두개 굴리기 
function rollDie() {
   const roll = Math.floor(Math.random() * 6) + 1
   console.log(roll);
}
callTwice(rollDie);

//========================================================
// 열번 실행
function callTenTimes(f) {
   for (let i = 0; i < 10; i++) {
      f()
   }
}

callTenTimes(rollDie);