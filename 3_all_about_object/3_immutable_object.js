/**
 * Immutable object
 */


/**
 * Extensible
 * 확장 가능 여부
 * true 프로퍼티 추가 가능
 * false 프로퍼티 추가 불가능, 삭제는 가능
 */
console.log('\n==== Extensible ====');

const student = {
  name: 'kim',
  year: 2013,
};

console.log(student);

console.log('---true---');
console.log('isExtensible :', Object.isExtensible(student)); // true 기본값
// 프로퍼티 추가 가능
student['major'] = '컴퓨터공학';
console.log(student);

console.log('---false---');
Object.preventExtensions(student);
// extensible false로 변경
console.log('isExtensible :', Object.isExtensible(student));
student['credit'] = 3.9; // 새로운 프로퍼티가 추가되지 않음
console.log(student);

delete student['major'];
console.log('프로퍼티 delete :', student);


/**
 * Seal
 * 1) false - 기본값
 * 2) true
 * 프로퍼티 추가, 삭제 불가
 * 값, 프로퍼티 애트리뷰트 변경 가능 configurable: false와 똑같다.
 */
console.log('\n==== Seal ====');

const student2 = {
  name: 'kim',
  year: 2013,
};

console.log(student2);

console.log('---false---')
console.log('isSealed :', Object.isSealed(student2)); // false 기본값

console.log('---true---');
Object.seal(student2);
console.log('isSealed :', Object.isSealed(student2)); // true 

// 프로퍼티 추가, 삭제 불가
student2['major'] = '컴퓨터공학';
delete student2['name'];
console.log(student2); 

// 값, 프로퍼티 애트리뷰트 변경 가능
Object.defineProperty(student2, 'name', {
  value: 'lee',
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(student2, 'name'));
// seal은 configurable: false와 똑같다.


/**
 * Freezed
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 * 1) false - 기본값
 * 2) true
 * 프로퍼티 추가, 삭제 불가
 * 값, 프로퍼티 애트리뷰트 변경 불가
 */
console.log('\n==== Freezed ====');

const student3 = {
  name: 'kim',
  year: 2013,
};

console.log(student3);

console.log('---false---')
console.log('isFrozen :', Object.isFrozen(student3)); // false 기본값

console.log('---true---');
Object.freeze(student3);
console.log('isFrozen :', Object.isFrozen(student3)); // true 

// 프로퍼티 추가, 삭제 불가
student3['major'] = '컴퓨터공학';
delete student3['name'];
console.log(student3);

// 값, 프로퍼티 애트리뷰트 변경 불가
// Object.defineProperty(student3, 'name', {
//   value: 'lee',
// });
console.log(Object.getOwnPropertyDescriptor(student3, 'name'));

console.log('---하위 오브젝트 Freezed---');
const student4 = {
  name: 'kim',
  year: 2013,
  student5: {
    name: 'park',
    year: 2010,
  }
};

Object.freeze(student4);
console.log('isFrozen 상위 :', Object.isFrozen(student4));
console.log('isFrozen 하위 :', Object.isFrozen(student4['student5'])); // false

// extensible, seal, freeze 모두 하위 오브젝트는 적용되지 않는다.