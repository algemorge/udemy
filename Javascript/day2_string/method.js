// method() : 메서드 실행하기 
let msg = 'I am king';
let yellMsg = msg.toUpperCase();
yellMsg // 'I AM KING'

// 비파괴 메서드 : 원본 angry는 그대로 변하지 않음. 새 복사본을 만들어 소문자로 만듦. 캡처할수 있음
let angry = 'LeAvE mE aLoNe!';
angry.toLowerCase(); //leave me alone!
angry //'LeAvE mE aLoNe!' 

// .trim : 문자열의 처음과 끝에 오는 공백을 전부 깎아내어 준다. 
// -> 사용자의 입력을 수용할 때 유용. 통제권이 없는 데이터 다루기, 추가 들여쓰기, 공백 지워서 문자열의 핵심만 뽑기 가능
// 문자열 좌우에 있는 공백이 아닌 문자만 보존. -> 중간 띄어쓰기 공백 보존됨
let userInput = "     hello im happy but still confused all the time"
userInput.trim(); // 앞 공백 제거
userInput // 공백 제거 안됌 -> 원본은 그대로
"   hi way to heaven    ".trim() // 공백 제거

// 메서드 연달아 사용하기
let greeting = "   do I know you??   "
greeting.toUpperCase().toUpperCase(); // "DO I KNOW YOU??"

// 상수 message를 공백제거, 소문자로 만들어 변수 whisper로 만들기
const message = "   TASTE THE RAINBOW!  ";
let whisper = message.trim().toLowerCase();