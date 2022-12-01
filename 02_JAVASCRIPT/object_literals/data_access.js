/** 데이터 액세스 -> [""]
 * 객체에서 데이터를 불러오는 법
 * 배열에서는 대괄호와 숫자 사용 [0]
 * 객체에서 중괄호를 쓰는 유일한 경우는 객체를 생성할때 뿐.
 * 객체 리터럴은 대괄호와 따옴표를 쓴다. [""]
 */


const person = {
   firstName: 'Naomi',
   lastName: 'Scott'
};

/**** 액세스 방법 1. 키를 써서 잠금 해제 ****/
person["firstName"];

// const가 먼저 선언되어야 함. person 변수 보다 먼저 사용할 수 없음. 
console.log(person["firstName"]);

/**** 액세스방법 2. dot 사용 ****/
person.lastName
console.log(person.lastName);


/*********************** e.g ************************/
const palette = {
   red: '#eb4d4b',
   yellow: '#f9ca24',
   blue: '#30336b'
}

palette.red // 'eb4d4b'
palette['blue'] // '#30336b'
let color = 'yellow';
palette[color]; //'#f9ca24'

/**
 * 객체에서 만드는 모든 키들은 문자열로 변환됨 (* 기호 제외 *)
 * 1,2 접근법의 차이는 문자열로 바꾸는데 있는건가?
 */

/****** test *******/
// fullAddress 변수를 생성해서 name빼고 다 담기
// 다중접근
const restaurant = {
   name: 'Ichiran Ramen',
   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
   city: 'Brooklyn',
   state: 'NY',
   zipcode: '11206',
}

// 너무 일차원적이라 효율 떨어짐 -> 더 간단하게 중복없이 표현할수 없을까
const fullAddress = restaurant.address + restaurant.city + restaurant.state + restaurant.zipcode
