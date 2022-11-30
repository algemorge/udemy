/** 함수 범위 scope
 * 범위는 '변수 가시성'을 참조
 * 기본적으로 변수를 JS의 어느 부분에 정의하느냐가 액세스 지점을 결정
 * 
 * [ 선택 ]
 * 변수와 함수를 열린 공간에 넣기 or 함수 안의 중첩 함수에 넣기
 * -> 이 선택이 나중에 어디서 변수를 쓰느냐에 큰 영향을 미침
 */

// 계란 줍기 게임
// function collectEggs() {
//    let totalEggs = 6;
//    console.log(totalEggs);
// }

// // console.log를 함수 밖으로 빼고 실행 -> 결과 없음 -> 함수 자체가 싫행되지 않아서
// function collectEggs() {
//    let totalEggs = 6;
// }
// console.log(totalEggs);

// // 함수를 실행하고 출력해보자 -> totalEggs가 초기화 -> 다시 정의되고 6값 출력 
// // -> 예상했으나 여전히 totalEggs가 정의되지 않음 => *함수 범위 문제* 
// // 우리가 실제로 let키워드를 사용해서 그 값을 정의한 함수 안에서 정의한 변수들은 
// // 그 함수로 범위가 한정되어 있으므로 이후에 totalEggs로 액세스 할수 없음
// // {} 안의 함수는 비유적으로 유리구슬 속 작은 세상. totalEggs는 거기서만 유효하다.
// function collectEggs() {
//    let totalEggs = 6;
// }
// collectEggs();
// console.log(totalEggs);


// 정말 totalEggs에 액세스 하고 싶다면 전역변수 사용 -> 흔하지 않음
// 보통은 내부 변수 사용
// 대부분의 함수는 일종의 독립된 기계처럼 입력값을 취하고 출력값을 내놓음
// 그것들을 캡처할 수 있는 출력 값을 내놓을 때 외에는 주변세계에 그다지 영향X

let totalEggs = 0;
function collectEggs() {
   totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
// 0 6 출력

//=================================================================================
// 함수 범위 예시
// msg는 함수 범위 안에서 선언됨 -> 함수 범위 밖에서 액세스 할수 없는 변수
function helpMe() {
   let msg = "I'm on fire!";
   msg; // "I'm on fire!"
}

// msg; // NOT DEFIEND!

//=================================================================================
// 예시 
let bird = 'Scarlet Macaw';
function birdWatch() {
   let bird = 'Great Blue Heron';
}
console.log(bird);// Scarlet Macaw

// 예시2
let bird2 = 'Scarlet Macaw';
function birdWatch2() {
   let bird2 = 'Great Blue Heron';
}
birdWatch2() // Scarlet Macaw
console.log(bird2); // Scarlet Macaw

// 예시3
let bird3 = 'Scarlet Macaw';
function birdWatch3() {
   let bird3 = 'Great Blue Heron';
   console.log(bird3);
}
birdWatch3() // Great Blue Heron

// 예시4
// 함수 안에 변수를 삭제 -> 외부에 정의된 전역변수와 함수 안의 bird라는 접점이 생김
// 즉, JS는 유리구슬 속에 한정된 함수 안에 같은이름으로 정의된 변수가 있을 경우
// 그 변수를 먼저 참조.-> Great Blue Heron
// but, 함수 안에 bird가 없으면 다른 곳의 bird 변수를 찾음-> Scarlet Macaw
let bird4 = 'Scarlet Macaw';
function birdWatch4() {
   // let bird4 = 'Great Blue Heron';
   console.log(bird4);
}
birdWatch4() //  Scarlet Macaw


//=================================================================================
// 예시

let birds = 'duck';
//===========================//
function birdFly() {
   let birds = 'goose'
   birds; // goose
}
//===========================//
bird; // duck;