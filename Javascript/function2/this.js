//================================ this =================================
// this : 메서드에 있는 객체를 가리킬때 사용
// 객체에 여러 가지 특성이 있거나 정보와 메서드가 다양하고 여러 기능이 있을 때 사용
// 메서드가 객체에 있는 데이터에 접근해야 함

//=======================================================================
// 예시1
const person = {
   first: 'Robert',
   last: 'Han',
   fullName() {
      return `${this.first} ${this.last}`
   }
}
person.fullName(); // "Robert Han"
person.last = "Park";
person.fullName(); // "Robert Park"


//=======================================================================
//예시2
const cat = {
   name: 'Blue Steele',
   color: 'grey',
   breed: 'Scottish fold',
   meow() {
      console.log("MEOW MEOW");
   }
}

// 예시2에 this 사용
const cat2 = {
   name: 'Blue Steele',
   color: 'grey',
   breed: 'Scottish fold',
   meow() {
      console.log(`${this.name} says MEOWWW`);
   }
}

//=======================================================================
// this값은 보통 객체를 가리키지만 바뀔수도 있음
// -> 사용된 함수의 호출 컨텍스트에 따라 값이 달라짐 = 함수를 호출하는 방법에 따라 달라진다는 뜻

const meow2 = cat2.meow;
meow2();    // says MEOWWW
cat2.meow(); // Blue Steele says MEOWWW
