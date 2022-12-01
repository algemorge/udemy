//================================ 메서드 =================================
// 메서드를 만드려면 함수와 객체가 어떻게 만나는지 알아보자 
// 메서드 : 객체에 종속된 특성으로 함수에 포함되는 개념
// 사용법 : 메서드 이름 앞에 점을 찍어서 사용 e.g) .indexOf, .toUpperCase
// 모든 메서드는 함수이지만 모든 함수가 메서드인 건 아니다.

// 메서드를 객체에 추가 가능
const myMath1_1 = {
   multiply: function (x, y) {
      return x * y;
   },
   divide: function (x, y) {
      return x / y;
   },
   square: function (x) {
      return x * x;
   }
}

myMath1_1.divide(6, 3) //2

//=======================================================================
// 속기법
// 콜론, function 구문 삭제 가능
const myMath1_2 = {
   multiply(x, y) {
      return x * y;
   },
   divide(x, y) {
      return x / y;
   },
   square(x) {
      return x * x;
   }
}

const myMath2 = {
   blah: 'HI!',
   add(x, y) {
      return x + y;
   },
   multiply(x, y) {
      return x * y;
   }
}
myMath2.add(50, 60) // 110


//=======================================================================
// 정사각형 넓이(area), 둘레(perimeter) 구하기 
const square = {
   area(x) {
      return x * x;
   },
   perimeter(x) {
      return x * 4;
   }
}

square.area(10) // 100
square.perimeter(6) //24