/*************************************** ARRAY *******************************************/
// 데이터를 넣으면 문자열과 마찬가지로 각 요소에 인덱스가 할당됨
// 모든 요소에는 인덱스라는 배정된 수사자가 있으니 값을 꺼낼 수 있다.
// 문자열의 경우 모든 문자에 인덱스가 있음
// 인덱스는 어떤 요소를 찾을 수 있기 때문에 중요함

let days = ['Monday', 'Tuesday', 'Wednesday'];
days[2] // 'Wednesday'
days[1][0] // 'T' : 인덱스의 인덱스 중첩가능


// 배열 수정하기
let colors = ['red', 'orange', 'green', 'blue'];
colors[0] = 'red';

colors[2] = 'yellow';
colors[3] = 'green';

colors[4] // undefined
colors[4] = 'blue';

// 일반변수에서는 바꿀수 없는 것을 배열에서는 바꿀수 있음
let firstName = 'shin';
firstName[0] // 's'
firstName[0] = 'S';
firstName[0] // 's'

let fruits = ['orange', 'apple', 'fineapple', 'banana']
fruits[2] = 'pineapple'; //'orange', 'apple', 'pineapple', 'banana'
// 길이가 늘어난 만큼 Empty가 채워진다. 값이 없는 배열은 undefined.
fruits[10] = 'indigo' //['orange', 'apple', 'pineapple', 'banana', empty × 6, 'indigo']

// 배열을 추가할 때 빈배열을 만들지 않고 추가하려면 배열의 길이를 알아야 한다. 더 쉽게 할수 있을까?