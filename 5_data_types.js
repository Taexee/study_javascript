/**
 * Data Types
 * 
 * 6개의 원시타입 Primitive Type
 * 1개의 오브젝트 타입 Object Type
 * 
 * Primitive Type
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(참과 거짓)
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * Object Type
 * 1) Object(객체)
 *    - Function
 *    - Array
 *    - Object
 */

// 1) Number
console.log('===== Number 타입 =====');

const age = 30;
const tempature = -10;
const pi = 3.14;
console.log('age의 타입 : ', typeof age);
console.log('tempature 타입 : ', typeof tempature);
console.log('pi 타입 : ', typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;
console.log('infinity 타입 : ', typeof infinity);
console.log('nInfinity 타입 : ', typeof nInfinity);

// 2) String
console.log('===== String 타입 =====');

const str1 = '홍길동';
console.log('name 타입 : ', typeof str1);

const str2 = "'작은' 따옴표";
console.log('작은 따옴표 출력 : ', str2);

const str3 = '"큰" 따옴표';
console.log('큰 따옴표 출력 : ', str3);

/**
 * 2-1) Template Leteral 
 * - Escaping Character
 * newline -> \n
 * tab \t
 * 백슬래시를 string으로 표현하고 싶다면 두번 입력
 * 
 * - 템플릿 리터럴 사용
 * ` 백팁 사용해 이스케이프 문자없이 줄바꿈, 탭, 백슬래시, 따옴표 사용 가능
 */ 

const str4 = '줄\n바꿈'
const str5 = '탭\t입력';
const str6 = '\\'
const str7 = '작은 따옴표 \' 하나 출력'
console.log('줄바꿈 : ', str4);
console.log('탭 : ', str5);
console.log('백슬래시 : ', str6);
console.log('작은 따옴표 하나 : ', str7);

const str8 = `   \ ' "" 템플릿 리터럴 줄
바꿈`;
console.log('템플릿 리터럴 사용 : ',str8);

const str9 = '변수';
console.log(`템플릿 리터럴 변수 -> ${str9}`);

// 3) Boolean
console.log('===== Boolean 타입 =====');
const isTrue = true;
const isFalse = false;
console.log('isTrue 타입 : ', typeof isTrue);
console.log('isFalse 타입 : ', typeof isFalse);

// 4) undefined
// 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
// 직접 undefined로 값을 초기화하는 것은 지양해야한다
console.log('===== undefined 타입 =====');

let noInit;
console.log(noInit); // 그냥 출력해도 undefined
console.log('noInit 타입 : ', typeof noInit);

// 5) null
// undefined와 마찬가지로 값이 없다는 뜻이나 JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용
console.log('===== null 타입 =====');

let init = null;
console.log(init); // 출력하면 null
console.log('init 타입 :', typeof init); // object 타입, 버그지만 이미 object타입인 것으로 개발된 것들이 있어 그대로 유지되고 있다.

// 6) Symbol
// 유일무이한 값을 생성할 때 사용
// 다른 원시타입 값들과 다르게 Symbol 함수를 호출해서 사용
console.log('===== Symbol 타입 =====');

const test1 = '1';
const test2 = '1';
console.log('변수 비교 :', test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log('symbol 비교 :', symbol1 === symbol2); // 같은 값을 넣어도 유일무이한 값이기 때문에 false

// 7) Object
// - Map
// 키:값의 쌍으로 이루어져 있다. key:value
console.log('===== Object 타입 =====');
const dictionary = {
  red: '빨간',
  orange: '주황',
  yellow: '노랑',
};
console.log('object 출력 :', dictionary);
console.log('object 타입 :', typeof dictionary);
// 원하는 특정 키의 값을 가져올 수 있다.
console.log('특정 요소 가져오기 :', dictionary['red']);
console.log('특정 요소 가져오기 :', dictionary['orange']);
console.log('특정 요소 가져오기 :', dictionary['yellow']);

// - array
// 값을 리스트로 나열할 수 있는 타입
// index 0부터 1씩 올라간다
const isArray = [
  '빨강',
  '주황',
  '노랑',
  '초록',
  '파랑',
  '남',
  '보라',
];
console.log('isArray 출력 :', isArray);
console.log('isArray 타입 :', typeof isArray);
console.log('1번 인덱스 :', isArray[1]);

// 특정 인덱스 값 변경
isArray[0] = 'red';
console.log('0번 인덱스 변경 :', isArray[0]);

// - function
// 추후 자세히 다룸

/**
 * static typing : 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시
 * dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 값에의해 타입을 '추론'한다
 */