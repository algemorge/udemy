// 원주율
Math.PI //3.14...
// round - 반올림
Math.round(4.9) // 5
// absolute - 절댓값
Math.abs(-234) // 234
// power - 제곱
Math.pow(2, 5) // 32
// floor - 내림
Math.floor(3.9999) // 3
// ceil - 올림
Math.ceil(3.345) // 4

/******************************* Random numbers : 난수 *************************************/
// 0과 1사이의 소수점 숫자를 임의로 생성. *1은 제외*
Math.random();

/* 범위내 랜덤 자연수 생성하기 - 1~10 */
// 난수 생성
const step1 = Math.random();     // 0.25342692069
// 난수에 10곱해서 1의자리 실수 만들기
const step2 = step1 * 10;        // 2.5342692069
// 소수점 아래 내림으로 (floor) 절댓값 만들기
const step3 = Math.floor(step2); // 2
// 1은 왜 더하는거지? -> 1~10내 범위니까 10을 표현하기 위해!
const step4 = step3 + 1;         // 3

// 한줄로 표현하기 //
// 0~9
Math.floor(Math.random() * 10);
// 1~10
Math.floor(Math.random() * 10) + 1;
// 0~4
Math.floor(Math.random() * 5)
// 1~5
Math.floor(Math.random() * 5)
// 20~22 -> 20부터 22사이의 수를 곱하고 시작하는 수를 더하기 
Math.floor(Math.random() * 3) + 20

/************************ 에러메세지 ***************************/
// Uncaught ReferenceError: math is not defined
// 소문자 m을 써서 발생한 문제. 
// 대문자 M을 써서 Math.PI 입력하면 해결됨