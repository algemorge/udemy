// const 로 변수 만들기
// const : 상수. 변하지 않는다 == 변경할 수 없다
// let과 사용법이 같으나 업데이트 같은 재할당은 불가능

const myName = 'jane';
myName = 'suzy';
myName // jane

let herName = 'kate';
herName = 'dove';
herName // dove

// 왜 const를 사용할까?
// 변하지 않는 속성 -> 단위(km, pi, mile...) 에 사용될수 있음

// let : 변수. 변하는 값 -> 재할당 가능. 나이/점수/학년에 사용됨
// var : 변수. let과 사용법 같고 변경가능. 그러나 구식이라 현재는 잘 사용하지 않음 
