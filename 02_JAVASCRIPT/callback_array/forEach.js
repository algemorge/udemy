// forEach 배열 매서드 : 함수를 인수로 받아들임
// forEach 는 for of 루프가 등장히기 전에는 훨씬 자주 사용됨
// 기본적으로 forEach는 배열 안의 아이템 각각에 대해 함수와 코드를 한번씩 실행
// -> 어떤 함수를 넣든 상관없이 함수가 아이템별로 한번씩 호출되고 각각의 아이템이 함수에 자동 전달

// e.g
// 숫자를 각각 출력해보자
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function (n) {
   console.log(n * n);
   // 81, 65, 49, 36, 25, 16, 9, 4, 1 출력됨
});

nums.forEach(function (el) {
   if (el % 2 === 0) {
      console.log((el));
      // 8, 6, 4, 2 출력됨
   }
})

console.log('==============================================');
//============================================================================
// 과정 예시

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 이런방식으로도 가능
// function print(element) {
//    console.log(element);
// }
// numbers.forEach(print)

//============================================================================
// 보통은 이렇게 작성 -> 대부분 이순간만을 위해 존재하는 함수를 전달하기 때문
numbers.forEach(function (el) {
   console.log(el);
})

//============================================================================
// for of 로 출력하기 
for (let el of numbers) {
   console.log(el);
}

console.log('==============================================');
//============================================================================
// 배열의 짝수 출력
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers2.forEach(function (el) {
   if (el % 2 === 0) {
      console.log(el);
   }
})


//============================================================================
// 데이터 구조와 영화의 배열
// 안에는 객체가 들어 있음

const movies = [
   {
      title: 'Amadeus',
      score: 89
   },
   {
      title: 'Stand By Me',
      score: 85
   },
   {
      title: 'Forest Gump',
      score: 96
   },
   {
      title: 'Parasite',
      score: 99
   }
]

// 'Alien - 90/100' 이런 식으로 제목-점수 출력해보자
// 이 배열의 각각의 요소에 대해 함수 호출
// 이 목적만을 위해 존재하는 익명함수 사용 -> ()에 매개변수 지정
movies.forEach(function (movie) {
   console.log(`${movie.title} - ${movie.score} / 100`);
})

// 함수를 정의 O, 실행 X
const f = function (movie) {
}