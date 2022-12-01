/** Return
 * 지금까지 사용한 console.log()는 출력값이 아님 = 재사용, 저장 불가
 * toUpperCase() 나 indexOf() 같은 다른 내장 메서드에서는 변수 내의 값을 캡쳐해서
 * 다른 것으로 전달 가능. = 메서드들을 연쇄 할 수 있음
 * 
 * 하나의 값만 나온다.
 * 같은 배열일 수도 있고 객체일 수도 있으나 언제나 하나만 반환시킴
 * 
 * return이 실행되면 함수가 중단 -> 모든 함수가 중단되고 완료
 * 
 */

const yell = "I will end you.".toUpperCase();
yell; // "I WILL END YOU"
// indexOf() : 배열에서 인덱스 찾기, 없으면 -1 반환
const idx = ['a', 'b,', 'c'].indexOf('c');
idx; //2

// console.log 는 출력하기만 할 뿐 저장하고 보관하지 않는다.
// 저장, 보관 위해서는 반환키워드 return 이 필요!
// function add(x, y) {
//    console.log(x + y);
// }

//===================================================================
// return을 사용해서 함수 밖으로 내보내기
function add(x, y) {
   // x, y 둘 중 하나가 숫자가 아니라면 거짓이 나옴
   // typeOf : 자료형을 나타내는 문자열을 반환함
   if (typeof x !== 'number' || typeof y !== 'number') {
      return false;
   }
   let sum = x + y;
   return sum;
   // return을 사용해서 함수 실행 중단시키기 - return 위의 문장을 실행되지 않음
   console.log("END OF FUNCTION!");
}
// add(4,5)
// 9

//===================================================================
