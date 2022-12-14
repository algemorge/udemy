/*************************************** object literals *******************************************/
// 객체도 배열처럼 일종의 구조에 여러 데이터 조각을 저장함. 
// but, 배열에서는 첫번째, 두번째, 세번째 하는 데이터 '순서' 가 중요
// 객체는 그렇지 않고, 키-값 쌍 or 프로퍼티라는 걸 이용해서 데이터 저장
// 프로퍼티 (property) : 두개의 정보가 모인 것 레이블과 같은 키(key), 값(value)로 구성됨.
// 이 키-값 둘이 쌍을 이루게 되고 객체는 이 쌍들의 집합이다.
// 데이터 조각들인 프로퍼티가 순서나 우선수위 없이 구불거리고 형체가 없는 자루 덩어리 안에 있다고 상상. 
// 키-값 예시 -> age:20 / city:seoul / isAdmin:true / zip:01928
// 이런 정보는 종류에 관게없이 키-값 쌍으로 구성된다.
// 그 쌍을 어디 밑이든 상관없이 객체에 넣고는 커스텀 키를 써서 다시 불러울 수 있음

// 활용도 : 운동일지를 쓸때 유용함. 정보에 레이블 지정해서 이름 부여. 순서 필요없음
// e.g) 걸음수:8000, 칼로리:5000, 계단수:1800
// 배열을 사용할 때 인덱스를 쓰는것과 마찬가지로 값을 반환

const fitBitData = {
   totalSteps: 30928,
   totalMiles: 211.6,
   avgCalorieBurn: 5939,
   workoutsThisWeek: '5 of 7',
   abgGoodSleep: '2:13'
};

// 만약 특정한 데이터가 있는 배열인 경우엔 인덱스를 써서 인덱스0, 인덱스2 등으로 해당 데이터를 액세스한다.
// 하지만 객체가 있으면 이렇게 데이터에 액세스 할 수 있음!


/**
 * 객체리터럴이 뭔지 설명만으로는 애매했는데 예시를 보니 단박에 편리함이 보인다.
 * 저걸 잘 사용해보고 싶다. 이제 진짜 자바스크립트 문법같음.
 */