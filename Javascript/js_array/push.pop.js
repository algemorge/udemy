/*************************************** PUSH, POP *******************************************/
// 내장된 매서드
// PUSH : add to end : 배열 끝의 항목을 추가
// POP : 배열 끝의 항목을 제거

// 배열 끝에 항목 추가하기
// 배열의 끝이 어딘지 임의의 수(인덱스)를 알아야 함
let movieLine = ['tom', 'nancy`']
movieLine[2] = 'pablo'
// 그때 push() 사용
movieLine.push('oliver')
// movieLine이 업데이트 -> 나에게 넘겨줌(반환) -> 배열의 새 length를 반환

let cat = "blue"
cat.toUpperCase() // "BLUE" 
// 원래의 cat의 문자열은 바뀌지 않음

let person = movieLine.pop()
person // 'pablo'

// pop()에는 인수 필요없음. 배열의 맨 마지막 요소를 우리에게 주고 제거. 
// 체육관 바벨을 생각해보면 먼저 들어온것이 먼저 나가지 않는것처럼
// 나중에 추가된것이 먼저 제거된다. -> satck 과 queue의 개념 암시
// 종이탑처럼 위부터 빼낸다는 개념.  
let barbell = []
barbell.push(45)
barbell.push(45)
barbell.push(25)
barbell.push(10)
barbell.push(2.5)
barbell // (5) [45, 45, 25, 10, 2.5]
barbell.pop() //2.5
barbell.pop() //10
barbell.pop() //20
barbell.pop() //45
barbell.pop() //45
