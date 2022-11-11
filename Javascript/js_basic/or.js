/*************************************** OR *******************************************/
// 두 표현식을 합치는 연산자. 파이프 기호 ||
// 둘 중 하나가 참인지 구분
1 !== 1 || 10 === 10 // true
10 / 2 === 5 || null // true
0 || undefined //false


/*  나이에 따른 요금표 만들기  */
// 0-5 FREE
// 5-18 CHILD $10
// 18-65 ADULT $20
// 65+ SENIOR $10

// 음수를 넣어도 free가 되는 문제 발생
// AND : 숫자들 사이의 범위를 활용하거나 무언가 그 범위 안에 있는지 확인 
// AND 가 OR 보다 먼저 실행된다.
// 먼저실행되는 명령어를 괄호로 표현 가능

const age = -13;
if (age >= 0 && age < 5 || age >= 65) {
   console.log("FREE");
} else if (age >= 5 && age < 18) {
   console.log("You are a child, you pay $10");
} else if (age >= 18 && age < 65) {
   console.log("You are adult, You pay $20");
} else {
   console.log("INVALID AGE!");
}