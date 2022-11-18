/*************************************** SHIFT, UNSHIFT *******************************************/
// shift : remove from start : 배열의 시작에서 뺌 : 선입선출 개념
// unshift : add to start : 배열의 시작에서 추가
// 맨 처음 시작 부분에 작용하는 한 쌍 
// 인자 필요없음
// 빈 배열에서 사용 ->  오류 X, undefined.

let movieLine = ['tom', 'nancy', 'sofia', 'mike', 'jane', 'maria']
movieLine.shift() // 'nancy', 'sofia', 'mike', 'jane', 'maria'
// 제거된 요소를 나에게 전해줌
let nextPatron = movieLine.shift()
nextPatron // 'nancy'

movieLine.push('kate', 'monica', 'bibi', 'amy')
movieLine.unshift('VIP') //(8) ['VIP', 'jane', 'maria', 'bob', 'kate', 'monica', 'bibi', 'amy']
