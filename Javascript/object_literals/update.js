/*************************************** object literals *******************************************/
// 학생들의 중간고사 점수 확인
const midterms = {
   // danielle, thomas는 문자열로 변환됨. js에서는 불가능하지만 객체안에선 가능. 
   danielle: 97,
   thomas: 89
}
console.log(midterms);

// thomas의 점수를 87점으로 수정하기
midterms.thomas = 87

// const라는 키워드를 써서 변수인 객체를 선언하는 배열의 경우처럼
// 여기서는 객체 자체는 그대로 유지돼야 하지만 안쪽은 교체될수 있다.

//update : 키-값 쌍이랑, 점 구문을 사용하고 대괄호를 쓴 후에 새 값을 지정
midterms.thomas = 'C+'
midterms['danielle'] = 'A+'
midterms.ezra = 'B+'
midterms['Zoe'] = 'A-'
