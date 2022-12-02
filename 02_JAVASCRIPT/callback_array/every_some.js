//============================= every =====================================
// 둘다 불리언 메서드 - 참 거칫 반환
// 배열 내의 모든 요소가 every를 통해 테스트를 거치는데 일단 함수를 전달
// 모든 요소가 해당 함수로 전달되어 참을 반환하면 
// 호출된 전체 every 함수가 참을 반환

const words = ['dogs', 'dig', 'log', 'bag', 'wag']
words.every(word => {
   return word.length === 3;
}) //true
words.every(word => word[0] === 'd'); // false
words.every(w => {
   let last_letter = w[w.length - 1];
   return last_letter === 'g'
}) // true



//=========================================================================
// 75점 이상을 출력할 때 
const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

// exams의 모든 요소가 every() 콜백으로 전달됨
// 이중 하나가 콜백에서 거짓을 반환하면 전체 - every 가 거짓이 됨 *&& 같이*
exams.every(score => score >= 75) // false



//============================= some =====================================
// every 와 작동되는 방식이 비슷하나 
// 요소 중 *하나 또는 일부*가 테스트를 통과하는지 여부를 테스트함
// every 처럼 모든 각각의 요소가 해당 콜백에서 참을 반환하는지는 중요X
exams.some(score => score >= 75) //true


const words2 = ['dogs', 'jello', 'log', 'cupcake', 'bag', 'wag']
words2.some(word => {
   return words2.length > 4;
}) //true

words2.some(word => word[0] === 'Z') // false

words2.some(w => w.includes('cake')) // true



//=========================================================================
// 2015년 이후 제작된 영화가 *있는지* 알아보자
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

// 존재함?
movies.some(movie => movie.year > 2015) //true

//============================================================
// practice
// 한 숫자배열을 담는 allEvens라는 함수를 정의하고 
// 모든 배열의 숫자가 짝수이면 true,
// 아니면 false

// 풀이 1
function allEvens(nums) {
   return nums.every(num => num % 2 === 0)
}

// 풀이 2
function allEvens(nums) {
   let evenNums = nums.every(function (num) {
      return nums.every(num => num % 2 === 0)
   })
   return evenNums
}

// 풀이 3
function allEvens(nums) {
   return nums.every(function (num) {
      if (num % 2 === 0) {
         return num
      }
   })
}
