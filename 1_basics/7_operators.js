/**
 * Operators
 */

/**
 * 1. 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log('==== 산술 연산자 ====');
console.log(
  10 + 10,
  10 - 10,
  10 * 10,
  10 / 10,
  10 % 3,
);
console.log(10 * (10 + 10));


/**
 * 증가와 감소
 */
console.log('==== 증가와 감소 ====');

let num = 1;
num++;
console.log(num);
num--;
console.log(num);


/**
 * 연산자의 위치
 */
console.log('==== 연산자의 위치 ====');

let result = 1;
console.log(result);

// 후위
// 코드 실행후에 증감 연산자 실행
result = num++;
console.log('후위 연산자 result :', result, ' num :', num);
result = num--;
console.log('후위 연산자 result :', result, ' num :', num);

// 전위
// 증감 연산자 실행 후 코드 실행
result = ++num;
console.log('전위 연산자 result :', result, ' num :', num);
result = --num;
console.log('전위 연산자 result :', result, ' num :', num);


/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
console.log('==== 숫자가 아닌 타입에 + - ====');
console.log('-- 문자열타입 숫자 --');
let sample = '9';
console.log(+sample); // 문자열이 숫자로 변환
console.log(typeof +sample);
console.log(typeof sample); // 원래 타입이 변경되는 것은 아님

console.log('-- boolean --');
sample = true;
console.log(+sample); // true가 숫자로 변환
console.log(typeof +sample);

console.log('-- 문자열 --');
sample = '자바스크립트';
console.log(+sample); // NaN 숫자가 아닌 숫자타입
console.log(typeof +sample); // 타입은 숫자로 나옴


/**
 * 할당 연산자 assignment operator
 * 연산을 수행하고 수행한 값을 할당
 */
console.log('==== 할당 연산자 ====');

let number = 100;
console.log(
  number += 10,
  number -= 10,
  number *= 10,
  number /= 10,
  number %= 3,
);


/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log('==== 비교 연산자 ====');

// 모두 true
console.log( 
  '값의 비교 == :', 
  5 == 5,
  5 == '5', // 문자열 5가 숫자로 변환되어서 비교
  0 == '',
  true == 1,
  true == '1',
  false == 0,
);

console.log( 
  '값과 타입의 비교 === :',
  5 === 5,
  5 === '5',
  0 === '',
  true === 1,
  true === '1',
  false === 0,
);

console.log( 
  '값이 다르다 != :', 
  5 != 5,
  5 != '5', // 문자열 5가 숫자로 변환되어서 비교
  0 != '',
  true != 1,
  true != '1',
  false != 0,
);

console.log( 
  '값과 타입이 다르다 !== :',
  5 !== 5,
  5 !== '5',
  0 !== '',
  true !== 1,
  true !== '1',
  false !== 0,
);


/**
 * 대소 관계 비교 연산자
 */
console.log('==== 대소 관계 비교 연산자 ====');

console.log( 
  '대소관계 연산자 :',
  100 > 1,
  100 < 1,
  100 >= 1,
  100 <= 1,
);


/**
 * 삼항 조건 연산자 ternary operator
 */
console.log('==== 삼항 조건 연산자 ====');

// 조건 ? 참 : 거짓
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');


/**
 * 논리 연산자
 * 1) && and
 * 2) || or
 */
console.log('==== 논리 연산자 ====');

console.log(
  '&& 논리 연산자 :', // && 조건은 모두 true여야 true
  true && true, 
  true && false,
  false && true,
  false && false,
);

console.log(
  '|| 논리 연산자 :', // || 조건은 하나만 true여도 true
  true || true, 
  true || false,
  false || true,
  false || false,
);

console.log(
  '논리 연산자 사용 예시 :',
  10 > 1 && 20 > 2,
  10 < 1 && 20 > 2,
  10 > 1 || 20 > 2,
  10 < 1 || 20 > 2,
);


/**
 * 단축 평가 short circuit evaluation
 * - &&
 * 좌측이 true면 우측 값 반환
 * 좌측이 false면 좌측 값 반환
 * - ||
 * 좌측이 true면 좌측 값 반환
 * 좌측이 false면 우측 값 반환
 */
console.log('==== 단축 평가 ====');

console.log(
  '&& 단축평가 :',
  true && '단축평가', // 단축평가
  false && '단축평가', // true
);

console.log(
  '|| 단축평가 :',
  true || '단축평가', // true
  false || '단축평가', // 단축평가
);

console.log(
  '단축평가 사용 예시 :',
  true && true && '단축평가', // 단축평가
  true && false && '단축평가', // false
  false && true && '단축평가', // false
  false || true || '단축평가', // true
);


/**
 * 지수 연산자
 */
console.log('==== 지수 연산자 ====');

console.log(2 ** 2);


/**
 * null 연산자
 * null이거나 undefiend일 때 값 대체
 */
console.log('==== null 연산자 ====');

let name;
name = name ?? 'null 연산자';
console.log('null 연산자 ?? :', name);

let name2;
name2 ??= '자바스크립트';
console.log(name2);