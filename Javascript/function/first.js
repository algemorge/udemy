/** 함수 사용법
 * 1. 함수를 정의
 * 2. 함수를 실행
 * 
 * funcName(): // 한번 실행
 * funcName(): // 다시 실행
 */

// e.g)
function grumpus() {
   console.log('leave me alone');
   console.log('for the last time..');
   console.log('I TOLD YOU SO');
}

// 콘솔에 sing 입력했을 때 바로 실행되지 않음
// 하지만 인지하고 있음 -> native code : 브라우저에 내장되어 JS와 함께 작동
function sing() {
   console.log("do");
   console.log("re");
   console.log("mi");
}

sing()
sing()
sing()
sing()
sing()
sing()
sing()
sing()