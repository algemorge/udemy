/********************************************** thing.method(arg) ***************************************************/
// arg : argument : 인수란 메서드로 전달되어서 메서드의 동작을 변경하는 입력 값
"jkflsda".toUpperCase(); // 현재 작업하는 실제 문자열 외에 다른 입력값이 없기 때문에 변경할게 없음

/********************************************** indexOf() ***********************************************************/
// 문자열에서 주어진 인수가 나타나는 문자열 인데스와 그 자릿수를 반환함
let tvShow = 'catdog';
// 맨 앞에 있는것 반환. 처음으로 나타나는 지점 찾음
tvShow.indexOf('cat'); //0
tvShow.indexOf('dog'); //3
tvShow.indexOf('z'); //-1 (not found)
// e.g
"haha that is so funny!".indexOf('h') // 0
"haha that is so funny!".indexOf('!') // 21
"haha that is so funny!".indexOf('z') // -1

/********************************************** slice() *************************************************************/
// : 문자열의 일부를 추출하거나 잘라내서 그 부분을 새로운 문자열로 반환
// 두개의 숫자를 전달해서 문자열을 자르려는 인덱스를 지정
// 한개 이상의 인수 받을수 있음 -> beginIndex : 필수, endIndex : 옵션
// 음수를 전달하면 그 음수는 문자열의 길이에 시작하는 인덱스를 더한 값으로 취급.
// 원래의 문자열에 영향 X, 새로운 문자열이나 복사본 만듦 
let str = 'supercalifragilisticexpialidocious'
// 0 : beginIndex 시작지점, 5 : endIndex 종료지점, 바로앞에서 끝남
str.slice(0, 5); // 'super'
str.slice(5); // 'alifragilisticexpialidocious'

// e.g
let msg = 'haha that is so funny!'
// that만 나오게 추출
msg.slice(5, 9); // 'that'
// 음수값 추출 -> 뒷글자부터 나옴
msg.slice(-1) // '!'
msg.slice(-5) // 'unny!'
msg.slice(-2) // 'y!'

/********************************************** replace() *************************************************************/
// : 정규 표현식 이용해 패턴에 매칭시켜서 특정한 문자열 대신 패턴교체 가능

let annoyingLaugh = 'teehee so funny! teehee!';
// 첫번째 인수 : 교체될 대상, 두번째 인수 : 교체하는 대상. 첫번째 인스턴스만 교체가능.
annoyingLaugh.replace('teehee', 'haha') // 'haha so funny! teehee!'
annoyingLaugh.replace('h', 'H') // 'Haha so funny! teehee!'
// replaceAll()모든 인스턴스 바꾸기 -> Edge, IE, Opera에서 실행되지 않음

/********************************************** repeat() *************************************************************/
// 인수에 반복하고 싶은 수 넣기 
"lol".repeat(3); //'lollollol'

// 메서드는 어떤 것(thing) 이다. 
// 어떤 메서드는 입력값이 필요 없어서 빈괄호를 사용, 어떤 메서드는 인수를 요구하는데 괄호 사이에 쓴 입력값이 동작을 바꾼다.
// *메서드는 뭔가를 호출하는 이름을 가진 작업. 문자열을 호출하는것은 그 일부. */