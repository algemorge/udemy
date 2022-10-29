// console창 단축키 - cmd+opt+j
// repl - read evaluate print loop

// float 같은 소수를 저장하는데는 메모리가 많이 든다. 
// js에는 숫자타입이 한개 존재 - 음수, 양수, 정수, 소수 모두 포함됨 

// Numbers:
1;
-99;
0.345345;

// NaN : Not a Number
0 / 0;
NaN * NaN;

// typeof : 피연산자(숫자) 필요
typeof 4;       // "number"
typeof 5.234;   // "number"
typeof 1632431; // "number"
typeof NaN;     // "number", 숫자가 아닌 값을 나타내나 숫자로 간주한다

// quiz
(13 % 5) ** 2; // 13에 5를 나눈 값을 제외한 나머지의 지수 연산 = 9
200 + 0 / 0; // 0은 나눌 수 없으므로 NaN, NaN은 계산할수 없으므로 NaN


