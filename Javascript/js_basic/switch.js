/*************************************** SWITCH *******************************************/
// 일치하는 항목을 찾는다. 
// break : 중단지점. 모든 케이스에 break 필요. 없으면 이후의 명령문이 실행됨.
// default : 기타 값이 입력외어 아무것도 일치하지 않을때 해당.
const day = 6;
switch (day) {
   case 1:
      console.log("MONDAY!");
      break;
   case 2:
      console.log("TUESDAY!");
      break;
   case 3:
      console.log("WEDNESDAY!");
      break;
   case 4:
      console.log("THURSDAY!");
      break;
   case 5:
      console.log("FIRDAY!");
      break;
   // 둘이 같다면 앞에 오는 case6는 내용 없어도 됨
   case 6: // "weekend!"
   case 7:
      console.log("weekend!");
      break;
   default:
      console.log("INVALID NUMBER!");
}

// if 문과 대조해보기 (시나리오)

const date = 3;
if (date === 1) {
   console.log("MONDAY!");
}
else if (date === 2) {
   console.log("TUESDAY!");
}
else if (date === 3) {
   console.log("WEDNESDAY!");
}
else if (date === 4) {
   console.log("THURSDAY!");
}
else if (date === 5) {
   console.log("FIRDAY!");
}
else {
   console.log("INVALID NUMBER!");
}