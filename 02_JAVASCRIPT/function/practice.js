//===== return Value Practice===================================================
// 숫자인 두개의 인수를 곱하는 multiply라는 함수를 만들어보자

function multiply(num1, num2) {
   let sum = num1 * num2;
   return sum
}

//===== isShortsWeather Function ===============================================
// 반바지를 입을 날씨인가 고민이다.
// 하나의 인수를 갖는 함수 temperature 를 만든다.
// temperature는 75보다 크거나 같으면 true, 아니면 false.

function isShortsWeather(num) {
   if (num >= 75) {
      return true
   } else {
      return false
   }
}

//===== Last Element Exercise ==================================================
// 하나의 배열 인수를 가진 lastElement라는 함수가 있다.
// 이 함수는 배열의 마지막 인자를 *지우지 않고* 반환해야 한다. 
// 배열이 비어있다면 null을 반환해야한다.

function lastElement(arr) {
   return arr[arr.length - 1] || null;
}

function lastElement(array) {
   if (array.length === 0) return null;
   return array[array.length - 1];
}
// 참고 페이지
// https://stackoverflow.com/questions/66764095/homework-assistance
// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-4.php

let last = function (array, n) {
   if (array == null)
      if (array == null)
         return 0;
   if (n == null)
      return array[array.length - 1];
   return array.slice(Math.max(array.length - n, 0))
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

//===== Capitalize Exercise =================================================
// 문자열 인자를 갖는 capitalize 라는 함수를 정의한 후 첫 문자를 대문자로 변환해보자

// 첫문자를 선택한다? 배열인가?
// 입력한 문자의 첫번째 배열[0]을 대문자로 변환.toUpperCase()
// + slice(1) 로 입력한 문자의 인덱스 1부터 끝까지 잘라 붙인다.
function capitalize(str) {
   return str[0].toUpperCase() + str.slice(1)
}


//===== sum array Exercise ===================================================
// 하나의 인수(숫자 배열)를 갖는 함수 sumArray를 작성해보자
// 함수는 배열의 모든 숫자의 합을 반환한다.

function sumArray(arr) {
   let total = 0;
   // i 가 0일때, i 가 배열의 최대 크기보다 작다면 i는 1만큼 증가
   // i 는 증감을 1에서 부터 배열의 최대 크기까지 반복
   for (let i = 0; i < arr.length; i++) {
      // 배열의 1부터 배열의 최대 크기까지 접근하여 전부 더하고 그걸 total에 할당
      total += arr[i]
   }
   return total
}

// for of 로 바꾸기
function sumArray(arr) {
   let total = 0;
   for (let num of arr) {
      total += num;
   }
   return total
}

//===== Days Of The Week Exercise ==============================================
// returnDay 라는 함수
// 1~7 사이의 숫자인수를 하나 갖는다.
// 1은 월, 2는 화 ...
// 만약 숫자가 1보다 작고 7보다 크면 null 반환

// 일주일을 배열에 저장하자
// 함수가 호출되면 숫자로 배열 혹은 객체에 연결할수 있게해보자

// js object access by index
// days의 요소 + 1 해서 인덱스를 만들고 그 인덱스를 access해서 days 문자열을 출력
const days = {
   Monday: 1,
   Tuesday: 2,
   Wednesday: 3,
   Thursday: 4,
   Friday: 5,
   Saturday: 6,
   Sunday: 7
}

function returnDay(num) {
   for (let day of days) {
      return day
   }
}
// for (let person in testScore) {
//    console.log(`${person} scored ${testScore[person]}`);
// }


let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function returnDay(day) {
   if (0 >= day || 7 < day) {
      return null;;
   } else {
      return day = week[day - 1];
   }
}