/*************************************** NOT *******************************************/
// 논리 연산자. 
// 두 표현식을 결합하지 않지만 표현식에 작용해서 값을 반전시킴
// 거짓인 표현식 앞에 넣으면 참으로 나옴

!null // true
!(0 === 0) // false
!(3 <= 4) // false
!false //true

let firstName = prompt("enter your first name");
if (!firstName) {
   // 입력안하면 나오는 메세지. 반복되지는 않음
   firstName = prompt("TRY AGAIN!");
}

// 입장료 무료관람 나이 뒤집기
const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
   console.log("You are not a baby or senior");
} 