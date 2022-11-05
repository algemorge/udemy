/********************************************** Null *************************************************************/
/* js의 원시타입(Primitive) 
 * 문자열 or Boolean 아님
 * js의 실제 값
 * 일부러 값을 지정하지 않은 설정
 * 변수를 만들고 나서 그 변수를 null로 설정할수 있음 
 * 명시적으로 '여기엔 값이 없다'는 것 알림 -> 공사장이 비어있어도 작업장이라는것을 알수 있듯이 */

// 처음에는 로그인된 사용자가 없으므로
let loggedInUser = null;
// 유저가 로그인 하면
loggedInUser = 'Naomi Scott';

/********************************************** Undefined *************************************************************/
/* 
 * 
 */
// 인덱스 99는 없는 상태다
'hello'[99]
// 변수를 만들면 처음에는 undefined로 설정됨. 정의된 값이 없는 상태. 
let x;