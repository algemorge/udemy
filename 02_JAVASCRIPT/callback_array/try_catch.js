//=================================== try catch ========================================
// JS의 오류, 예외 처리
// 오류를 잡아내서 코드 실행이 정지되거나 중단되지 않도록 하는 역할

// 오류가 날것같으면 try catch 문으로 감싸주기
try {
   hello.uoUpperCase()
} catch {
   console.log("ERROR!!");
}

console.log("AFTER");

//===============================================================================
// 메세지가 문자열이 아닌 상황을 처리하기
function yell(msg) {
   try {
      console.log(msg.toUpperCase().repeat(3));
   } catch (e) {
      console.log("문자를 입력하세요.");
      alert("문자를 입력하세요.");
   }
}