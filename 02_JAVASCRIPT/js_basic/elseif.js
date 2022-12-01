/****************************************** else if ******************************************************/
// if 문이 선행되어야만 함
// if 문이 거짓일 때 else if 문이 작용

// 변수 random에 난수 생성
let random = Math.random()
// 난수값이 0.5보다 작으면 "this is less than 0.5"
if (random < 0.5) {
   console.log("this is less than 0.5");
   // 난수값이 0.5보다 크거나 같으면 "Your number is greater than 0.5!!"
} else {
   console.log("Your number is greater than 0.5!!");
}
// 그리고 어떤 결과든 그 값을 로그에 출력하기
console.log(random);


// 입력창 띄우기 + 사용자의 입력 중 대문자 제거
const dayOfWeek = prompt('Enter a day').toLocaleLowerCase();
if (dayOfWeek === 'monday') {
   console.log("UGHHHHH I HATE MONDAYS");

}   // if 문 뒤에 계속 else if 문을 추가할 수 있다.
else if (dayOfWeek === 'saturday') {
   console.log("I LOVE SATURDAY!");
} else if (dayOfWeek === 'wednesday') {
   console.log("WEDNESDAY SHOULD BE HOLIDAY");
}

// else if (dayOfWeek === 'tuesday') {
//    console.log("MEH");
// } else if (dayOfWeek === 'sunday') {
//    console.log("MEH");
// } else if (dayOfWeek === 'thursday') {
//    console.log( "MEH");
// } -> 조건없는 나머지는 else 로 처리 가능

/****************************************** else ******************************************************/
// 나머지를 표현. 무조건 끝에 온다. 조건에 매치되는 것이 없으면 마지막 항목으로 적용됨. 
// 사실 아무말이나 써도 else로 넘어감 -> 유효성 검사 필요
else {
   console.log("MEH");
}


/*  나이에 따른 요금표 만들기  */
// 0-5 FREE
// 5-18 CHILD $10
// 18-65 ADULT $20
// 65+ SENIOR $10

const age = 8;
// 순서에 유의. 앞의 코드가 거짓이어야 뒤의 else if문이 실행되기 때문.
if (age < 5) {
   console.log("You are a child. You get in for free!");
} else if (age < 18) {
   console.log("You are a child, you pay $10");
} else if (age < 65) {
   console.log("You are adult, You pay $20");
} else if (age >= 65) {
   console.log("You are senior, free old man");
};