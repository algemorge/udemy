/*********************************** guess game **************************************/
// 숫자 맞추기 게임
// 숫자 범위 설정 e.g) 1~20
// 너무 낮음 / 너무 높음 메세지 띄우기
// 시도 횟수 표시
// q 눌러 종료

//========================================================================
// 사용자에게 최대 숫자를 입력하라고 전달, 변수에 저장
let maximum = parseInt(prompt("Enter the maximum number!"));
// 사용자가 숫자를 입력하지 않는다면? -> 모든 입력값을 숫자로 변환시켜야함
// parseInt를 이용하면 숫자가 아닌 값이 NaN으로 나옴
// '123' '123dkljs' 같은 정수가 포함된 입력값도 변환될수 있는 값이면 처리함
// -> 사용자가 입력하는 걸 확인해서 실제로 유효하고 파싱될 수 잇는 값을 입력하도록 해야함

//========================================================================
// 유효하지 않은 값을 입력하고 파싱하면 난수로 NaN이 나옴
// parseIntrk NaN을 출력하고 그걸 NaN에 곱했기 때문 -> 최종 결과값은 항상 NaN
// if 로 최대값이 없는 경우를 만든다.
// NaN은 False-y 
// 만약 최댓값이 false-y 면 이 줄을 다시 사용해서 유효한 값 입력 유도

// if (!maximum) {
//    maximum = parseInt(prompt("Enter a valid number!"));
// }

//========================================================================
// 문제는 유효검사를 한번만 한다는 것 -> while문 사용

while (!maximum) {
   maximum = parseInt(prompt("Enter a valid number!"));
}

//========================================================================
// max 숫자 까지 난수 생성 -> 최댓값 안에서 난수 생성
// floor 전체를 내림해줌
// 0 에서 1 사이의 소수에서 10을 곱한 후 소수 자리는 자르고 1을 더함
// Math.floor(Math.random() * 10) + 1;

const targetNum = Math.floor(Math.random() * maximum) + 1;

//========================================================================
// 추측해서 값을 입력하라는 메세지 띄우기
let guess = parseInt(prompt("Enter your first guess!"));

// 시도 횟수 카운트 하기
let attempts = 1;

// 이 루프 값으로 들어온 이상 두 값이 일치하지 않음 확인
// if 문으로 낮거나 높을때 메세지 띄우기
while (parseInt(guess) !== targetNum) {
   // q를 입력 ->  종료 but parseInt 로  q를 입력할 수 없음 
   // -> 바로 parseInt 하지 않고 추측값을 정답과 비교할 때 그 시점에 parseInt되게 함
   // q를 입력해도 guess변수의 안에서 문자열 q로 유지됨
   if (guess === 'q') break;
   attempts++;
   if (guess > targetNum) {
      guess = prompt("Too high! Enter a new guess : ");
   } else {
      guess = prompt("Too low! Enter a new guess : ")
   }
}
// q를 눌러 종료할때 카운트 메세지 빼기
if (guess === 'q') {
   console.log("OK, BYE!")
} else {
   console.log("CONGRATS YOU WIN!");
   console.log(`YOU GOT IT! It took you ${attempts} guesses`);
}

