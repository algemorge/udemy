/*********************************** for... of **************************************/
// 실제객체 = 객체 리터럴(키-값 쌍)을 반복시킬 때도 사용해보자
// 실제 객체 리터럴은 반복 가능한 객체로 인식되지 않는다.
// 시스템 상으론 배열, 문자열도 객체이긴 함

//========================================================================
// for.. in : 객체에서 반복

const testScore = {
   keenan: 80,
   damon: 90,
   kim: 99,
   shawn: 10,
   marlon: 70,
   dwayne: 60,
   nadia: 98,
   elcira: 45,
   diedre: 67,
   vonnie: 23
}

// 키가 나옴
for (let person in testScore) {
   console.log(`${person} scored ${testScore[person]}`);
}

//========================================================================
// 콘솔창에서 Object.keys(testScore) - 키 
// 콘솔창에서 Object.values(testScore) - 값
// 콘솔창에서 Object.entries(testScore) - 키-값 쌍
// 이 메서드들은 배열을 내보내므로 키에서 반복을 걸어야 하면 키에서 배열을 만들면 됨

//========================================================================
// for... of 루프가 배열에서 가능
// 배열의 값의 합이나 평균을 내고 싶을 때 사용
// let total = 0;
// for (let score of Object.values(testScore)) {
//    // 루프에 들어갈 때마다 차레로 배열의 첫번째부터 마지막까지 더하게 됨
//    total += score;
// }
// console.log(`total : ${total}`);


//========================================================================
// 평균 구하기 
// 객체에는 길이가 없음 .length를 해도 처리 안됨

let total = 0;
let scores = Object.values(testScore);
for (let score of scores) {
   total += score;
}
console.log(total / scores.length);