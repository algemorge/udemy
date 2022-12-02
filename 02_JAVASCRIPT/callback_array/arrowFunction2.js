// Map, forEach 복습하며 arrow function 사용해서 더 짧고 간결한 코드 연습

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

// 영화점수를 10점 만점으로 만들어보자
// 기존 함수 map 함수 사용
const newMovies = movies.map(function (movie) {
   return `${movie.title} - ${movie.score / 10}`
})

// arrow function 사용, 한줄도 가능하지만 너무 길어짐
const newMovies2 = movies.map(movie => (
   `${movie.title} - ${movie.score / 10}`
))

