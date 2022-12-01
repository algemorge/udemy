/** TODO LIST
 * "new" - 새 할일 만들기
 * "list" - 전체 목록보기
 * "delete" - 특정 할일 삭제하기
 * "quit" - 앱 종료
 *
 * 사용자에게 입력하라는 메세지를 띄우는 prompt로 진행
 * 실제 현실에선 이런 명령어 줄을 기반으로 한 TodoList 많이 쓰지만 유용X
 * JS 콘솔이 아닌 Terminal, 텍스트 기반
 * 간단한 MVP 패턴
 */

// /hint/
// 질문(prompt)을 계속 반복하고 싶다 -> while
let input = prompt("명령어를 입력하세요");
// 할일을 구체적으로 배열로 만들기
const todos = ['6시 기상', '차 한 잔 마시기'];
// quit 이나 q를 입력해서 종료하고 싶을 때 
while (input !== 'quit' && input !== 'q') {
   // list를 입력해서 목록보기
   if (input === 'list') {
      console.log('******************');
      for (let i = 0; i < todos.length; i++) {
         console.log(`${i} : ${todos[i]}`);
      }
      console.log('******************');
      // new 를 입력해서 새 할일 추가하기
   } else if (input === 'new') {
      const newTodo = prompt("새 할 일을 입력하세요")
      todos.push(newTodo);
      console.log(`${newTodo}(이)가 추가되었습니다.`);
      // delete 를 입력해서 삭제하기
      // 삭제할 배열을 선택할 때 splice 사용 .splice : 시작 인덱스와 삭제할 개수를 명시
   } else if (input === 'delete') {
      const delTodo = parseInt(prompt("삭제할 인덱스를 입력하세요"));
      // 사용자가 유효하지 않은값을 입력할때를 대비해서 변환하기
      if (!Number.isNaN(delTodo)) {
         const deleted = todos.splice(delTodo, 1);
         console.log(`${deleted[0]}(이)가 삭제되엇습니다`);
      } else {
         console.log("유효하지 않은 값입니다.");
      }
   }
   input = prompt("명령어를 입력하세요")
}
console.log("앱을 종료합니다");