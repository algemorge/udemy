// 반환 함수
// 함수에 함수를 넣기
// 함수를 값으로 반환하기

function makeMysteryFunc() {
   const rand = Math.random();
   if (rand > 0.5) {
      return function () {
         console.log("Congrate, I am a GOOD FUNCTION");
      }
   } else {
      return function () {
         alert("HI Im BAD FUNCTION");
         alert("GOOD LUCK WITH THIS");
         alert("GOOD LUCK WITH THIS");
         alert("GOOD LUCK WITH THIS");
         alert("GOOD LUCK WITH THIS");
         alert("GOOD LUCK WITH THIS");
         alert("GOOD LUCK WITH THIS");
      }
   } // 저장된게 아닌 반환값인 함수를 보여줌
}

const mystery = makeMysteryFunc()

//==================================================================
// 두개의 인수를 전달하면 함수를 반환하여 최소, 최댓값 출력하기


// 입력한 수가 50~100 사이인지 알려주는 함수
function isBetween(num) {
   return num >= 50 && num <= 100
}

// 입력한 수가 1~10 사이인지 알려주는 함수
function isBetween2(num) {
   return num >= 1 && num <= 10
}

//==================================================================
// 팩토리 함수 : 함수를 만들어 주는 함수 
// 팩토리 함수는 함수를 반환하는데 그 함수에는 이름이 없음. 그냥 값으로 반환
function makeBetweenFunc(min, max) {
   return function (num) {
      return num >= min && num <= max;
   }
}

// makeBetweenFunc(100, 200) //함수가 반환됨 
const isChild = makeBetweenFunc(0, 18) //호출해서 변수에 저장
isChild(4); // true

const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);