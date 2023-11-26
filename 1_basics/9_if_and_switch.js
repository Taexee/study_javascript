/**
 * If and Switch
 */

let num = 5;

console.log('==== if-else ====');
if(num % 2 === 0) {
  console.log('num 변수는 짝수입니다.');
} else {
  console.log('num 변수는 홀수입니다.');
}

console.log('==== if-else if ====');
if(num % 2 === 0) {
  console.log('2의 배수입니다.');
} else if(num % 3 === 0) {
  console.log('3의 배수입니다.');
} else if(num % 4 === 0) {
  console.log('4의 배수입니다.');
} else if(num % 5 === 0) {
  console.log('5의 배수입니다.');
} else {
  console.log('2, 3, 4, 5의 배수가 아닙니다.');
}

const englishDay = 'saturday';
let koreanDay;

console.log('==== switch ====');
switch(englishDay) {
  case 'monday' :
    koreanDay = '월요일';
    break;
  case 'tuesday' :
    koreanDay = '화요일';
    break;
  case 'wendsday' :
    koreanDay = '수요일';
    break;
  case 'thursday' :
    koreanDay = '목요일';
    break;
  case 'friday' :
    koreanDay = '금요일';
    break;
  default:
    koreanDay = '주말';
    break;
}
console.log('englishDay :', englishDay,', koreanDay :', koreanDay);