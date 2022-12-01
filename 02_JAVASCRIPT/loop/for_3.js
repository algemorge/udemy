/*********************************** for... of **************************************/
// ie 지원 불가
// 배열과 다른 반복 가능한(iterable) 개체에서 반복시키는 기능 개선

//========================================================================
const animals = ['cat', 'dog', 'fish', 'cow', 'horse', 'rab'];

// 기존의 for문으로 출력해보자
for (let i = 0; i < animals.length; i++) {
   console.log(`Do you like ${animals[i]}?`);
}

//========================================================================
// for... of 문법
// for (만들 변수 이름 of 반복가능한 개체){
//  statement
// }

// for (variable of iterable) {
//    statement
// }

// 변수의 이름을 만들어야 함. 이 변수가 배열에 있는 각각의 요소를 표시하게 됨
// 배열에 있는 각각의 요소를 저장해서 표시
// ani 같은 변수는 그저 루프에 들어갈 때마다 존재하는 변수
for (let ani of animals) {
   console.log(ani);
}

//========================================================================
// 인덱스가 필요한 경우에는 for 루프를 쓰는게 더 나음
// 중첩된 두개의 for 루프를 쓰는 경우의 예시

const seatingChart = [
   ['Kristen', 'Erik', 'Namita'],
   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
   ['Yuma', 'Sakura', 'Jack', 'Erika']
]
// 기존 for 문
for (let i = 0; i < seatingChart.length; i++) {
   const row = seatingChart[i];
   for (let j = 0; j < row.length; j++) {
      console.log(`${j + 1}`, row[j]);
   }
}

// for of 문
for (let row of seatingChart) {
   for (let student of row) {
      console.log(student);
   }
}

//========================================================================
for (let char of "hello world") {
   console.log(char);
}