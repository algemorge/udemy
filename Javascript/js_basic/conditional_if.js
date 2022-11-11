/****************************************** if ******************************************************/
// 점수가 3점일때만 실행되는 조건문
let rating = 3;
if (rating === 3) {
   console.log("YOU ARE A SUPERSTAR!!");
}

// 그녀의 차가 소나타일때만 실행되는 조건문
let herCar = "sonata"
if (herCar === "sonata") {
   console.log("buy a new car")
} // buy a new car

let random = Math.random()
if (random < 0.5) {
   console.log("this is less than 0.5");
   console.log(random);
} // 50% 확률로 출력됨
if (random >= 0.5) {
   console.log("this is greater than 0.5");
   console.log(random);
}

// 조건이 틀리면 실행되지 않음
if (1 + 1 === "2") {
   console.log("math still works!");
}

// test : 짝수 출력하기
function isEven(num) {
   if (num % 2 === 0) {
      console.log("even");
   }
}