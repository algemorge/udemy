/** Argumenst : 인수
 * 인수는 함수()에 입력하는 값
 */


// 인수를 정의하는 법
// 함수의 괄호 안에 변수 이름을 넣는다. (=매개변수)
// 매개변수는 JS에서 허용하는 이름이어야 함
// 매개변수와 인수는 식별 능력이 없음 -> 그냥 전달받은걸 내보낼 뿐
// 주어져야 할 인수가 정해지지 않으면 undefined가 기본값
function greet(firstName) {
   console.log(`firstName is : ${firstName}`);
   // console.log(`HI, ${person}`)
}