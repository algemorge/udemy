/*********************************** while 문 **************************************/

// while 문법
// while 구문 하나와 괄호 안에 조건문이 하나 있음
// 참이라고 판별되면 게속해서 반복 - 거짓이라 판별되면 반복 안함
let num = 0;
while (num < 10) {
   console.log(num);
   num++;
}
//========================================================================
// {}안에 어떤 코드가 들어 오든지 루프를 통과하면 반복됨
// {}안에 조건문 작성 가능
// 초기값이 있으면 while문
let count = 0;
while (count < 10) {
   count++;
   console.log(count);
}

// 위와 같은 식의 for문
// for (let i = 1; i <= 10; i++) {
//    console.log(i);
// }
//========================================================================


// 반복횟수가 정해져 있지 않을때 while 문이 유용
// 몇 번을 반복할지 알 수 없고 사용자의 입력값을 포함할 수 있음
// e.g) 사용자에게 암호를 만들게 해보자

// 상수 SECRET은 비밀번호 BabyHippo
const SECRET = "BabyHippo";
// 변수 guess에 prompt를 띄우게 지정
let guess = prompt("enter the secret code.");
// 사용자가 암호를 틀리면(guess의 prompt에 SECRET을 입력하지 않으면) 사용자에게 계속 요청
// 맞는 비밀번호를 입력하면 조건문이 거짓이라 판별해서 반복문이 종료됨
while (guess !== SECRET) {
   guess = prompt("enter the secret code.");
}
// 종료되면 축하메세지 띄우기
console.log("CONGRATS YOU GOT THE SECRET!");
