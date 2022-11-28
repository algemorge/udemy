/** 함수 개요
 * 코드의 재사용 가능한 일부로서 언제든 사용할 수 있도록 이름 붙여 놓은것
 * 코드 중복을 줄이는데 유용
 * 코드 가독성을 높임
 */

// e.g 주사위의 눈 1~6을 얻어야 하는 상황
// 게임을 하려면 주사위를 계속 굴려야 함
// 이런 귀찮은 짓 하고 있을 시간이 없어
let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;
let die6 = Math.floor(Math.random() * 6) + 1;

// 이런 함수로 대체할 수 있어야 한다
// 함수로 함수를 불러오고 또 다른 함수를 불러오는 과정 학습
let die7 = rollDie();