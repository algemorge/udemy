//================== 함수 표현식 ====================
// 함수에 지정된 이름이 없이 괄호가 옴 
// =기호 뒤에 오는 오른쪽 부분이 함수를 만들고 그 함수를 왼쪽 변수 안에 저장
// -> 객체, 배열, 숫자등을 저장하듯이 함수 저장 
const square = function (num) {
   return num * num;
}
square(7); //49

// 원래는 함수의 이름을 사용하는데 이번에는 함수의 이름을 사용하지 않음 -> 변수 이름 사용
// 함수에 이름이 없고 엄밀히 함수는 내부적으론 객체인 것
// 모든 함수에는 자신에게 연결된 이름을 지정할 수 있는 옵션 존재 

// 함수는 JS에서는 값이다.

// 함수를 변수에 저장 -> 함수를 인수로 전달, 함수를 반환값으로 반환