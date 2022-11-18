/*********************** 배열과 객체 네스트 ************************/
// 배열 안에 넣고 싶은건 뭐든지 저장 가능하다.
// 다른 배열, 숫자, 문자열, 불리언 ...
// 객체 안에는 값으로 지정하고 싶은건 뭐든지 저장할 수 있고
// 숫자나 문자열, 불리언, null, undefined, 다른 객체랑 배열도 섞을 수 있다.
// -> 종종 배열과 객체를 같이 사용해서 작업하게 된다.

// 객체와 배열을 합치면 강력한 시너지가 나온다
// 가끔 순서가 있는 데이터인데 배열에 넣으면 안되는 경우
// or 키-값 쌍을 정했는데 일부가 순서가 있는 경우 -> 배열을 사용

// 객체 리터럴 : const user1 = { name : 'mike', job:'potter'}
// 배열 : const user2 = []
// 객체 배열 : const userPw = [{length: 8, isUpper:false}, {length:9, isUpper:true}]

// 여러 객체로 구성된 배열
const shoppingCart = [ //배열
   { //객체
      product: 'Jenga Classic',
      price: 6.88,
      quantity: 1,
   },
   {
      product: 'Echo Dot',
      price: 23.12,
      quantity: 3,
   },
   {
      product: 'Fire Stick',
      price: 36.99,
      quantity: 2,
   }
]


const student = { //객체
   firstName: 'David',
   lastName: 'Jones',
   strengths: ['Music', 'Art'], //배열 
   exams: { //중첩된 객체
      midterm: 92,
      final: 88
   }
}

const comments = [
   // 대부분 일정한 패턴을 원한다.
   { username: 'Tammy', text: 'lolololol', votes: 9 },
   { username: 'Jerry', text: 'lol', votes: 7 },
]
//Jerry에 접근하기 -> 배열이니까 []로 접근해야지 객체는 . or [""]로 접근하고
comments[1].text
comments[1]["text"]