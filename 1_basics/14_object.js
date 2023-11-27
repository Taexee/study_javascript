/**
 * Object 객체 
 */

// key: value
let person = {
  name: '홍길동',
  age: 20,
  dance: function() {
    return `${this.name}이 춤을 춥니다.`;
  }
}
console.log('==== 객체 다루기 기본 ====');
console.log('객체 출력 :', person);
console.log('값 가져오기1 :', person.name);
console.log('값 가져오기2 :', person['name']);

const key = 'name';
console.log('값 가져오기3 :', person[key]);

console.log('객체의 함수 호출 :', person.dance());


console.log('\n==== 변수이용한 객체 생성 ====');
const nameKey = 'name';
const nameValue = '홍길동';
const ageKey = 'age';
const ageValue = 20;

const person2 = {
  [nameKey]: nameValue,
  [ageKey]: ageValue,
}
console.log(person2);


console.log('\n==== 객체 값 변경 ====');
person2['age'] = 30;
console.log('age 변경 :', person2.age);

person2['language'] = 'ko';
console.log('새로운 프로퍼티 추가 :', person2);
// 존재하지 않는 프로퍼티를 넣으면 추가됨

delete person2['language'];
console.log('프로퍼티 삭제 :', person2);

/**
 * const 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

// person2 = {}; assignment to constant variable
// 객체 자체를 변경하는 것은 불가능


/**
 * 모든 키값 가져오기
 */

console.log('\n==== 모든 키-값 가져오기 ====');

// 리스트 형태로 반환
console.log('모든 키 가져오기 :', Object.keys(person2));
console.log('모든 값 가져오기 :', Object.values(person2));


console.log('\n==== 객체 생성 축약버전 ====');

const name = 'lee';
const person3 = {
  // name : name, // 키와 값 변수의 이름이 같으면 축약 가능
  name,
}
console.log('축약버전 :', person3);