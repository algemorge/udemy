// 화살표 함수
// 함수를 정의하는 최신 구문 / IE 실행 불가 / 기존 함수 표현식보다 간결한 특징
// function 키워드 없이 함수 입력 가능

//============================================================================
// 기존 함수
const add = function (x, y) {
   return x + y;
}
// 화살표 함수 
const sum = (x, y) => {
   return x + y;
}

// 전달인수가 하나일때 괄호 생략가능 / 0개 혹은 2개이상일때는 불가
const square = x => {
   return x * x;
}

// 인수가 없는 화살표 함수
// 결정할 인수나 매개변수가 없다해도 () 그 자리는 필요함
const rollDie = () => {
   return Math.floor(Math.random() * 6) + 1
}


//============================================================================
// practice
// greet 라는 화살표 함수를 만들어 인수를 넣으면 '안녕 (인수)'가 출력되게 해보자
const greet = (이름) => {
   return `안녕, ${이름}!`
}