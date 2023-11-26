/**
 * 타입 변환 Type Conversion
 * 1) 명시적
 * 2) 암묵적
 */

let age = 30;
console.log('age 타입 :', typeof age);


console.log('==== 명시적 변환 ====');
let stringAge = age.toString();
console.log('명시적 타입 변환 :', typeof stringAge);


console.log('==== 암묵적 변환 ====');
let test = age = '';
console.log('암묵적 타입 변환 :', typeof test);
console.log( // + 제외하고 모두 숫자로 변환되어 계산
  '암묵적 타입 변환 :',
  '98' + 2,  // 2가 문자열로 변환
  '98' * 2,
  '98' - 2,
  '98' / 2,
  '98' % 2,
); 


console.log('==== 명시적 변환 여러방법 ====');
console.log(
  'toString() :' , 
  typeof (99).toString(), 
  (99).toString(),
  typeof (true).toString(), 
  (true).toString(),
  typeof (Infinity).toString(), 
  (Infinity).toString(),
);

console.log(
  'parseInt() :' , 
  typeof parseInt('0'),
  parseInt('0'),
);

console.log(
  'parseFloat() :' , 
  typeof parseFloat('0.99'),
  parseFloat('0.99'),
);

console.log(
  `+'1' 문자열에 +연산자 :` , 
  typeof +'1',
  +1,
);


console.log('==== Boolean 타입 변환 ====');
// 문자열안에 문자가 있으면 boolean true
console.log(`'' =`, !!'', ` 'x' =`, !!'x');

// 0 = false 0 < true 
console.log('0 =', !!0, ' 1 =', !!1);

// undefined -> false
// null -> false 
console.log('undefined =', !!undefined, ' null =', !!null);

// object, array 비어있던지 무언가 있던지 무조건 true
console.log('{} =', !!{}, ' [] =', !![]);

/**
 * boolean 타입변환
 * - false
 * 1) 아무 글자도 없는 String 
 * 2) 값이 없는 경우
 * 3) 0
 */