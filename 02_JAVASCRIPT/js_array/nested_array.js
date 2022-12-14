/*************************************** 다차원 배열 *******************************************/
// 배열은 원하는 대로 저장할수 있다.
// 문자열,  숫자, 불리언, null, undefined같은 원시타입 넣기 가능 
// 배열을 추가로 저장 가능 
// 객체 저장 가능 

// 두 단게로 이루어진 배열. 상위 단게는 색상. 
// 이 배열 안에는 여러 배열이 중첩.
// 각 배열은 동일 색상 게통의 한 쌍. 
const colors = [
   ['red', 'crimson'],
   ['orange', 'mandarin'],
   ['yellow', 'golden rod'],
   ['green', 'olive'],
   ['blue', 'navy'],
   ['pruple', 'violey']
]

// 중첩 배열을 이용해 만든 틱택토 게임 판
const board = [
   ['O', null, 'X'],
   [null, 'X', 'O'],
   ['X', 'O', null],
]

// 이 게임판 중앙에 뭐가 있는지 알고 싶다.
// 3개의 게임판 중 두번째요소[1]
const boardGame = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']]
// 두번째 요소의 두번째요소[1]
boardGame[1][1]