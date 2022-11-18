/*************************************** concat *******************************************/
// : merge arrays
// 접합. 2개의 배열을 합쳐서 새 배열을 만듦.
// 배열의 합치되 기존의

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

let cats = ['blue', 'kitty']
let dogs = ['whithe', 'puupy']
cats.concat(dogs) // (4) ['blue', 'kitty', 'whithe', 'puupy']
dogs.concat(cats) // (4) ['whithe', 'puupy', 'blue', 'kitty']
let comboParty = dogs.concat(cats)
comboParty // (4) ['whithe', 'puupy', 'blue', 'kitty']


/*************************************** includes *******************************************/
// : look for a value
// 배열이 특정 요소를 포함하고 있는지 판별.
// boolean 예시로 true, false 로 응답.
// 문자열 대소문자 가림

cats.includes('kitty') // true
cats.includes('Kitty') // false


/*************************************** indexOf *******************************************/
// : just like string.indexOf
// 문자열의 인덱스처럼 활용됨. 각 값의 인덱스 값 반환.
// 어떤 요소가 배열에 있는지 없는지를 쉽게 알아내는 방법.
"BLUE".indexOf('B') // 0
"BLUE".indexOf('e') // 3
"BLUE".indexOf('r') // -1

comboParty.indexOf('kay') // -1
comboParty.indexOf('kitty') // 3


/*************************************** reverses *******************************************/
// : reverses an array
// 배열을 뒤집음
// 그자리에서 작업이 이뤄진다 = 파괴메소드 = 원본을 바꿔버림
comboParty.reverse() // (4) ['kitty', 'blue', 'puupy', 'whithe']
