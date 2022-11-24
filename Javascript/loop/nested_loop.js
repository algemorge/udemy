/*********************************** 중첩 루프 **************************************/
// : for 문 안에 또 다른 for 문이 있는 것.
// 다른 루프도 중첩할 수 있음 
// e.g) while문 안의 while 문 / for문 안의 wihle문

// for 문 바디 안에 다른 for 문을 넣는다.
// 하지만 실제로는 바깥 루프를 각각 반복하는 것. 
// 5번 실행된다고 하면 안쪽 루프는 한번의 완전한 주기를 5번 도는것. 

// let str = 'LOL';
// for (let i = 0; i <= 4; i++) {
//    console.log("Outer: ", i);
//    for (let j = 0; j < str.length; j++) {
//       console.log('  Inner : ', str[j]);
//    }
// }

// 바깥쪽 루프 : 10번 실행
// 안쪽 루프 : i 가 반복할 때 마다 j 반복. 3번. 실제 안쪽 루프는 30번 반복
for (let i = 0; i <= 10; i++) {
   console.log(`i is : ${i}`);
   for (let j = 1; j < 4; j++) {
      console.log(`   j is : ${j}`);
   }
}

// 중첩된 루프 : 주로 중펍된 배열을 통과하거나 반복해야 할 때 사용
// 예시 : 좌석배치표
// 각 하위배열은 한 줄. 1,2,3 줄의 모든 학생을 출력하려면 어떻게 해야할까
const seatingChart = [
   ['Kristen', 'Erik', 'Namita'],
   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
   ['Yuma', 'Sakura', 'Jack', 'Erika']
]



// es6 템플릿 리터럴 활용 `${}`
// 내가 먼저 해봄
// for (let i = 0; i < seatingChart.length; i++) {
//    console.log(`${i + 1} row : ${seatingChart[i]}`);
// }

// 헐 진짜 내 방식이랑 똑같이 템플릿 리터럴 썻어 대박
for (let i = 0; i < seatingChart.length; i++) {
   // 하위 배열을 const row 에 넣어서 변수로 지정
   const row = seatingChart[i];
   console.log(`=============== ROW ${i + 1} =================`);
   for (let j = 0; j < row.length; j++) {
      console.log(`${j + 1}`, row[j]);
   }
}

// 아직 원리가 다 눈에 들어오지 않지만 뭔가 해내고 있다는 느낌이 온다.
// 꼭 그려서 확인하기 