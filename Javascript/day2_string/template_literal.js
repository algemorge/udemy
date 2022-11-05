/********************************************** template literal *************************************************************/
// 템플릿 리터럴이 없다면
let product = 'Artichoke';
let price = 3.66;
price = 2.34;
let qty = 5; // qyt = quantity = 수량
// You bought X a = 아티초크를 몇개 샀는가? -> 계 = price * qty
"You bought " + qty + " " + product + ". Total is : " + price * qty; //'You bought 5 Artichoke. Total is : 11.7'

// 템플릿 리터럴을 사용하면 
`I counted ${3 + 4} sheep`; // 'I counted 7 sheep'
// *백틱기호* 사용 : `` , 백틱기호로 문자열도 사용가능
// *달러사인 : $, 중괄호{}* 사용 -> ${} : 이 증괄호 안에 들어가는 건 모두 표현식으로 취급, 평가 -> 문자열이 아닌 js로 평가
`hello ${1 + 2 + 6}` //'hello 6'

   // 템플릿 리터럴로 js 입력
   `You bought ${qty} ${product}. total is : $${price * qty}` //'You bought 5 Artichoke. total is : $11.7'
   // 대문자 메소드 사용하기
   `You bought ${qty} ${product.toUpperCase()}. total is : $${price * qty}` //'You bought 5 ARTICHOKE. total is : $11.7'
