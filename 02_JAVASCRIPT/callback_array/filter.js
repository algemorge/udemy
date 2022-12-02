//============================= filter =====================================
// 요소로 구성된 배열에서 필터링을 하거나 부분집합을 모아 새 배열을 만듦 -> 원본배열 변경 X
// 평점이 높은 아이템, 오래된 아이템, 새로운 아이템 등을 필터링 하려 할때 유용 -> 쇼핑몰 리스트

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
   return n % 2 === 1; // 참, 거짓 판별
   // 참일 경우 - n은 필터배열에 추가됨
})
// [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1]

//==================================================================
// 예시
// 평점 순위 별 배열 만들기 
// map 때 혼자 해봤던 건데 이렇게 나오는구나 

const movies = [
   {
      title: 'Amadeus',
      score: 98,
      year: 1984
   },
   {
      title: 'Sharknado',
      score: 35,
      year: 2013
   },
   {
      title: '13 Going On 30',
      score: 70,
      year: 2004
   },
   {
      title: 'Stand By Me',
      score: 85,
      year: 1986
   },
   {
      title: 'Waterworld',
      score: 62,
      year: 1995
   },
   {
      title: 'Jingle All The Way',
      score: 71,
      year: 1996
   },
   {
      title: 'Parasite',
      score: 95,
      year: 2019
   },
   {
      title: 'Notting Hill',
      score: 77,
      year: 1999
   },
   {
      title: 'Alien',
      score: 90,
      year: 1979
   },
]


const goodMovies = movies.filter(m => m.score > 80)
const badMovies = movies.filter(m => m.score < 70)
const recentMovie = movies.filter(m => m.year > 1990)

//==================================================================
// Map 과 filter 결합하기
// 좋은 영화들의 제목으로만 구성된 배열을 나오게 하기
const goodTitles = goodMovies.map(m => m.title)

// 한줄로 만들기
movies.filter(m => m.score > 80).map(m => m.title)


//==================================================================
// practice
// 사용자이름 배열을 담는 validUserNames 이라는 함수를 만들어보자
// 1. 새 배열에 반환되어야 함
// 2. 10글자 이하만 포함시킴

// 풀이1
function validUserNames(usernames) {
   let filterUsername = usernames.filter(function (username) {
      return username.length < 10;
   })
   return filterUsername
}

// 풀이2
function validUserNames(usernames) {
   return usernames.filter(function (username) {
      return username.length < 10;
   })
}
// 풀이3
function validUserNames(usernames) {
   return usernames.filter(function (username) {
      if (username.length < 10) {
         return username
      }
   })
}
