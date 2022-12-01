// 변수 variable : 나중에 언급하여 사용할수 있게 이름붙이고 값을 준 것
// 변수에는 숫자, 문자 등 다양한 타입을 저장할수 있다.

// let 으로 변수를 만들어보자
let numberOfFriends = 1;
let numApple = 4;
let numLemon = 2;
let totalFruit = numApple + numLemon; // 6
// numApple 이나 numLemon의 값을 변경해도 totalFruit의 값은 변경되지 않음 
// 순서를 변경해서 값을 수동으로 변경한다해도 연결된것이 아니라 스냅샷처럼 순간이 저장된것뿐이다.

// 변수 업데이트하기
// += Incrementing : 값을 중첩시켜보자
score = 5;
score += 30; // 35
score -= 20; // 15
score *= 2; // 30
score /= 3; // 10

// 게임 목숨 증감 예시
let numLives = 10;
numLives -= 1;
// 위의 -=를 --로 표현할수 있다. -- : 왼쪽에 오는 모든것을 줄여줌
numLives--;
numLives--;
numLives++;
numLives++;
numLives++;
numLives++;
numLives