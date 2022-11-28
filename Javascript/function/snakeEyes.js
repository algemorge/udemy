/** Snake Eyes 게임
 * 두개의 주사위를 굴려 둘 다 1이 나오게 하는 게임.
 * 2개의 인수를 가진 함수 isSnakeEyes를 만들어보자.
 * 
 * 1,1 이 되면 Snake Eyes!
 * 1,1 이 안되면 Not Snake Eyes! 출력하기.
 */

function isSnakeEyes(num1, num2) {
   if (num1 === 1 && num2 === 1) {
      console.log("Snake Eyes!")
   } else {
      console.log("Not Snake Eyes!")
   }
}