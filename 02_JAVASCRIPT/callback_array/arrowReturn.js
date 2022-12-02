// 화살표 함수를 더 간결하게 만드는 방법
const square = x => {
   return x * x;
}

const singASong = () => {
   return "LA LA LA LA LA LA"
}

//============================================================================
// 기존 함수 
const isEven = function (num) {
   return num % 2 === 0;
}

// arrow function = function 구문 삭제가능
const isEven2 = (num) => {
   return num % 2 === 0;
}

// () 삭제가능
const isEven3 = num => {
   return num % 2 === 0;
}

// return 구문 삭제가능, {} -> () 변경
const isEven4 = num => (
   num % 2 === 0
)

// 암시적 반환을 사용한 한줄 요약
const isEven5 = num => num % 2 === 0;

//============================================================================
// 암시적 반환 예시2

// rollDie 라는 화살표 함수는 하나의 값을 반환
const rollDie = () => {
   return Math.floor(Math.random() * 6) + 1
}

// rollDie2 에서 return 삭제, {} -> () 바꿈 = 화살표 함수를 포함한 새로운 구문이 암식적 반환을 만듦
const rollDie2 = () => (
   Math.floor(Math.random() * 6) + 1
)

//============================================================================
// 한줄 요약 예시
const add = (a, b) => (
   a + b
)

const add2 = (a, b) => a + b


//============================================================================
// 암시적 반환에 : return 삭제 가능
// 함수의 바디에 표현식이 딱 하나만 있어야 함
const add3 = (a, b) => (
   // let msg = 'hi' // 오류 발생 '괄호를 닫으세요'
   a + b
)