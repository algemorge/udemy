/*************************************** slice *******************************************/
// : 배열의 일부를 복사
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'lemon', 'teal']
colors.slice()
// (10)['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'lemon', 'teal']
// slice() 로 복사 -> 완전히 새로운 배열이 만들어짐
// slice() 인자 값을 넣어서 시작점, 끝점 지정 가능
colors.slice(3, 7) // (4) ['green', 'blue', 'indigo', 'purple']
colors.slice(3)    // (7) ['green', 'blue', 'indigo', 'purple', 'pink', 'lemon', 'teal']

// 한색 지정 추출
let coolColors = colors.slice(3)
coolColors // (7) ['green', 'blue', 'indigo', 'purple', 'pink', 'lemon', 'teal']

// 난색 지정 추출
let warmColors = colors.slice(0, 3)
warmColors // (3) ['red', 'orange', 'yellow']

// 배열의 마지막 n개를 가져오기
// 인덱스를 음수로 넣기
let nonRainbow = colors.slice(-3);
nonRainbow // (3) ['pink', 'lemon', 'teal']


/*************************************** splice *******************************************/
// : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
// 삽입 or 결합
// 원본 배열 자체를 변경. 복사본 만들지 않음.

let month = ['Jan', 'Mar', 'April', 'June']
// (1,0,'Feb') = (어디서 시작해?, 몇개를 지워?, 무엇을 넣어?)
month.splice(1, 0, 'Feb')

// colors에서 무지개 중 남색 제거해 보자
colors.splice(5, 1)

// colors에서 red 와 orange 사이에 red-orange를 넣어보자
colors.splice(1, 0, 'red-orange')

// 2개 이상 삽입 가능
colors.splice(3, 0, 'yellow-green', 'forestgreen')


/*************************************** sort *******************************************/
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환.
// 기본 정렬 순서 = 문자열의 유니코드 코드 포인트
// 함수를 사용해서 배열 방법을 커스터마이징 할수 있음 (오름차순,내림차순,배열의 특정 기준 정렬)

let scores = [1, 70, 100, 2500, 9, -12, 0, 34]
scores.sort() // (8) [-12, 0, 1, 100, 2500, 34, 70, 9] -> 첫째자리 숫자만 계산하여 정렬


/*************************************** toString *******************************************/
// 배열을 문자열로 변환



/** TIL
 * 
 1. 커스터마이징이 곧 프로그래밍 아닐까 
 * 변수를 저장하고 값을 수정하고 반환하는 과정은 거의 같다
 * 
 2. value.method() 와 method(value)는 무슨 차이일까
 * 
 */