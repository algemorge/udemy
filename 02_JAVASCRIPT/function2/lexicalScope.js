// 렉시컬 범위

function bankRobbery() {
   const heroes = ['Black Widow', 'Wonder Woman', 'Batman', 'Superman']
   // 이 함수는 실행되지 않았기 때문에 undefined 
   //==========================================================
   function cryForHelp() {
      // 여러번 중첩 가능 -> 조부모 함수 범위도 액세스 가능. 상위 몇 레벨 위에 있든 상관없음. 
      // but 역방향 액세스는 불가능
      function inner() {
         for (let hero of heroes) {
            console.log(`PLEASE HELP ME ${hero.toUpperCase()}`);
         }
      }
      inner();
   }
   //==========================================================
   // cryForHelp() 실행 -> cryForHelp함수 안에서 heroes 참조 
   // heroes는 부모함수 안에 존재 -> 액세스 할수 있음 => 렉시컬 범위의 개념
   // : 부모 함수의 안에 중첩된 내부 함수는 해당 외부 함수의 범위에나 또는 범위 내에서 정의된 변수에 액세스 가능

   cryForHelp();
}

//=================================================================
// 연습
// 바깥 함수 = 부모 함수
function outer() {
   // 부모 함수에 선언된 변수 hero
   let hero = 'Black Panther';
   // 내부 함수 inner
   function inner() {
      // 부모 함수의 hero 참조하여 변수선언 -> 렉시컬 범위 적용
      // 부모 함수의 안에 중첩된 내부함수는 해당 외부 함수의 범위 or 범위 내에서 정의된 변수에 액세스 가능
      let cryForHelp = `${hero}, PLEASE HELP ME!`
      console.log(cryForHelp);
   }
   // 내부함수 실행
   inner();
}