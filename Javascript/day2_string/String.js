// string : 문자열. 텍스트 정보. 글자로 된 줄. 
// 문법 : 따옴표로 감싸기
let username = "danny";

// 문자열 인덱싱 : 문자열 안의 모든 문자는 관련된 숫자에 상응함 -> 좌측, 0부터 시작
let animal = "Blue Elephant";
animal[0] // "B"
animal[3] // "e"
animal[5] // "E"
// 없는 번호 입력 -> undefined

// 변수의 길이
animal.length; // 13

// 두 문자열 접합
"ap" + "ple" // "apple"
// e.g
let firstName = "Monica";
let lastName = "Barbaro"
firstName + lastName // 'MonicaBarbaro'
// 띄어쓰기 주기
let fullName = firstName + " " + lastName;
fullName //'Monica Barbaro'

// 숫자와 문자열 합치기 -> 둘다 문자열로 만들고 합친다 
let result = 1 + "win"
typeof result; // "string"

