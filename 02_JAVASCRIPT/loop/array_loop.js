/*********************************** 배열루프 **************************************/
// 여럿 숫자를 루프하고 생성해서 출력하는 건 아주 유용하진 않지만
// 배열을 다룰때는 항상 루프를 쓴다.

// for 루프를 사용해서 i 를 배열에 연결하는 방법. 

// i 는 0부터 시작
// i 는 animals.length보다 작음
// i++ : i를 1씩 증가시킴
// animals에 []에 숫자인덱스를 넣으면 각 배열이 출력된다.
// ? 근데 왜 [i]를 넣으면 모든 요소가 출력될까 ? 

// 요소 자체를 생성하지 않음. i를, 숫자를 배열에 연결해야 함
// .length :  animals 안의 요소가 우리 눈으로 셀수 없다면 그걸 일일이 세기보다 .length로 크기를 재보자.
// 300개의 요소가 있다면 최대 인덱스는 299. 하나가 적어야 한다.(인덱스는 0부터 세기 때문!)
// 그렇지 않으면 끝이 확실하게 정의되지 않아서 매번 i에 1을 더해야 할 것. 
// 매번 새로운 인덱스가 루프를 거쳐 그 인덱스에 해당하는 동물을 본다.
// 좀 엣날 방식이긴 하지만 많이 쓰였다.

for (let i = 0; i < animals.length; i++) {
   console.log(i, animals[i]);
}
// 위 반복문을 거꾸로 가보자
// 첫번째 조건문 : 인덱스의 조건 : 인덱스는 무조건 배열의 요소보다 1 작다.(-1)
// 두번째 조건문 : 실제 사용되는 인덱스 중에 0이 있어야 함
// 반드시 [i] 로 배열에 access 해야 함.
// -> 여러 숫자, 즉 인덱스를 생성한 다음엔 그걸 배열에 연결해야 한다.
for (let i = animals.length - 1; i >= 0; i--) {
   console.log(animals[i]);
}

const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
   console.log(i, animals[i]);
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'

// 배열을 반복시키는 방법 
// 1. 배열의 각 요소에 뭔가를 한다.
// 2. for 루프를 사용하고 i라는 숫자를 생성한다. 
// * i는 배열 속 요소의 인덱스를 참조할 때 쓴다. *
// 3. 인덱스는 0에서 시작해 마지막 두번째 자리까지 올라간다.
// 4. 위 요소 3개 중 가장 높은 인덱스는 2 이다.
// 5. 0에서 1로, 1에서 2로 루프한 다음 그 인덱스를 사용해서 배열의 요소에 access 할수 있다.