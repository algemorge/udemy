// 변수가 있는 초기 표현식이 있고 변수는 카운터와 비슷한 것.
// 얼마나 오랫동안 혹은 언제까지 루프를 실행할지 명령하는 조건이 있음.
// 증감 표현식. 증가,감소,곱셈,나눗셈 가능

console.log("------------------even---------------------");
// 0 ~ 20 까지 짝수를 출력해보자
for (let i = 2; i <= 20; i += 2) {
   console.log(i);
}
console.log("-------------------odd--------------------");

// 0 ~ 20 까지 홀수를 출력해보자
for (let i = 1; i <= 20; i += 2) {
   console.log(i);
}

console.log("-------------------100--------------------");
// 100~0 까지 10씩 차감
for (let i = 100; i >= 0; i -= 10) {
   console.log(i);
}
console.log("-------------------1000--------------------");
// 10~1000 곱하기 10
for (let i = 10; i <= 1000; i *= 10) {
   console.log(i);
}