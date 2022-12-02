//============================================================================
// map : 콜백 함수를 수령해서 배열의 요소당 1번씩 실행한다는 점에서 forEach와 비슷
// 차이점 : 그 다음에 그 콜백의 반환값을 이용해서 새로운 배열을 생성한다는 것
// => 배열을 다른 상태로 매핑

//============================================================================
// 소문자로 이뤄진 텍스트 배열
// texts.map을 불러내서 콜백함수를 입력하고 t를 매개변수로 return t.toUpperCase()
// 이 콜백 함수에서 돌아오는 반환 값이 무엇이든 Map은 그걸 받아서 새로 생성한 배열에 추가하고 반환
// 그걸 사용자가 변수 caps에 저장
const texts = ['hi', 'im', 'good', 'cloud']
const caps = texts.map(function (t) {
   return t.toUpperCase();
})
texts; // ['hi', 'im', 'good', 'cloud']
caps;  // ['HI', 'IM', 'GOOD', 'CLOUD']


//============================================================================
// 각 요소를 전부 두배로 늘리기
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// 모든 요소에서 이 함수를 불러냄 -> 새로운 배열에 들어감 = 기존배열 변겅없음
const doubles = numbers.map(function (num) {
   return num * 2;
})

//============================================================================
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

// 영화 제목만 있는 배열 만들기 
const movieName = movies.map(function (movie) {
   return movie.title
})
// arrow function 화 하기 
const movieName2 = movies.map(m => m.title)

// 평점 90점이 넘는 영화만 출력하기
const movieScore = movies.map(function (movie) {
   if (movie.score > 90) {
      return `${movie.title} - ${movie.score}`;
   }
})


/* 배열에서 빈값, undefined 제거 하는 방법은 없을까 */
// goodMovies에 90점이 넘는 배열을 넣어놓고
// movieTitle 로 goodMovies 제목 뽑아오기 -> 실패!!
const goodMovies = movies.map(m => m.score > 90)
const movieTitle = goodMovies.map(m => m.title)

// map 배열을 map으로 불러오기 실패
// filter 배열을 map으로 불로오기 성공!!
const goodMovies2 = movies.filter(m => m.score > 90)
const movieTitle2 = goodMovies2.map(m => m.title)

// 한줄로 만들기
movies.filter(m => m.score > 90).map(m => m.title)

// 한줄이 너무 길어보일때 들여쓰기
movies
   .filter(m => m.score > 90)
   .map(m => m.title)


//============================================================================
// practice
// 배열 fullNames에서 first네임만 있는 firstNames 배열을 만들어보자
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (first) {
   return first.first
})
