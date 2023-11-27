/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference 
 */

console.log('==== copy by value ====');
let original = '안녕하세요';
let clone = original;
console.log('original :', original, ' clone :', clone);

clone += ' 홍길동입니다.';
console.log('original :', original, ' clone :', clone);

console.log('original === clone :', original === clone);

console.log('\n==== copy by reference ====');
let originalObj = {
  name: '홍길동',
  age: 20,
}
let cloneObj = originalObj;
console.log('originalObj :', originalObj, '\ncloneObj :', cloneObj);

console.log('- originalObj 변경');

originalObj['age'] = 30;
console.log('originalObj :', originalObj, '\ncloneObj :', cloneObj);
// originalObj를 변경하면 clone도 변경
console.log('originalObj === cloneObj :',originalObj === cloneObj);


/**
 * Spread Operator
 * 1) copy by value
 * 2) 프로퍼티 추가시 위치 중요
 */
console.log('\n==== Spread Operator ====');
const person = {
  ...originalObj,
};
console.log('Spread Operator :', person);
console.log('originalObj === person :',originalObj === person);
// Spread Operator는 copy by value

const person2 = {
  name: '김이박',
  ...originalObj,
};
// 김이박이 originalObj의 name값으로 변경
console.log('Spread Operator 프로퍼티 추가 :', person2);

const person3 = {
  ...originalObj,
  name: '김이박',
};
// originalObj의 name이 김이박으로 변경
console.log('Spread Operator 프로퍼티 추가 순서 변경 :', person3);

const person4 = {
  ...originalObj,
  language : 'ko',
};
// 새로운 프로퍼티 추가 가능
console.log('Spread Operator 프로퍼티 추가 :', person4);

const num = [1, 2, 4];
const num2 = [
  ...num,
  10,
];
console.log('Spread Operator 리스트 추가 :', num2);
