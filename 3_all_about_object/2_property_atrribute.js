/**
 * Property Attribute
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다은 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티 getter, setter
 */

const student = {
  // 데이터 프로퍼티
  name: 'kim',
  year: 2023,
};

/**
 * Object 클래스의 static 함수 getOwnPropertyDescriptor
 * { value: 'kim', writable: true, enumerable: true, configurable: true }
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부, false인 경우 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능할지 여부 for...in 등을 사용할 수 있으면 true
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단. false의 경우 프로퍼티 삭제나 어트리뷰트 변경이 불가능, 단 writable이 true인 경우 값 변경과 writable을 변경하는건 가능
 */
console.log('name 프로퍼티 어트리뷰트 출력 :\n', Object.getOwnPropertyDescriptor(student, 'name'));
console.log('year 프로퍼티 어트리뷰트 출력 :\n', Object.getOwnPropertyDescriptor(student, 'year'));


console.log('\n모든 프로퍼티 어트리뷰트 출력 :', Object.getOwnPropertyDescriptors(student));

const student2 = {
  // 데이터 프로퍼티
  name: 'kim',
  year: 2013,

  // 엑세스 프로퍼티
  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log('\n',student2);
console.log('getter 사용 :', student2.age);
student2.age = 20; // setter 사용
console.log('setter 사용 결과 :', student2.year);

console.log('age 프로퍼티 어트리뷰트 출력 :\n', Object.getOwnPropertyDescriptor(student2, 'age'));
/**
 * {
 *   get: [Function: get age],
 *   set: [Function: set age],
 *   enumerable: true,
 *   configurable: true
 * }
 */

// 데이터 프로퍼티와 엑세스 프로퍼티는 getOwnPropertyDescriptor를 출력해보면 알수있다.


console.log('\n==== 프로퍼티 어트리뷰트 재정의 ====');
// student2.major = '컴퓨터공학'; // student2['major'] = '컴퓨터공학'; 두가지 방법이 있음
// console.log('major 프로퍼티 어트리뷰트 출력 :\n', Object.getOwnPropertyDescriptor(student2, 'major')); 
// 모두 자동으로 ture

Object.defineProperty(student2, 'major', {
  value: '컴퓨터 공학',
  writable: true, 
  enumerable: true, 
  configurable: true,
}); 
// 직접 지정하면서 프로퍼티를 추가할 수 있다.
// writable, enumerable, configurable 미지정시 false


/**
 * writable
 */
console.log('\n-- writable --');
Object.defineProperty(student2, 'major', {
  writable: false, 
}); 
console.log('writable만 false 재정의 :\n', Object.getOwnPropertyDescriptor(student2, 'major')); 
student2.major = '전자공학';
console.log('major 변경 확인 :', student2);


/**
 * enumerable
 */
console.log('\n-- enumerable --');
console.log(Object.keys(student2));
for(let key in student2){
  console.log(key);
}
Object.defineProperty(student2, 'name', {
  enumerable: false, 
});
console.log('enumerable false 재정의 :\n', Object.getOwnPropertyDescriptor(student2, 'name'));
console.log('name 변경 확인 :',Object.keys(student2)); // name 출력되지 않음
for(let key in student2){
  console.log(key);
}
console.log(student2);
console.log(student2.name); // name 값은 존재하지만 열거를 막은것


/**
 * configurable
 * 기본적으로 프로퍼티 애트리뷰트 재정의 불가능
 * writable가 true인 경우 값 변경 가능
 * writable를 false로 변경도 가능하지만 true로 변경하는 것은 불가능
 */
console.log('\n-- configurable --');

Object.defineProperty(student2, 'major', {
  writable: true,
  configurable: false,
});

console.log('configurable false 재정의 :\n', Object.getOwnPropertyDescriptor(student2, 'major'));

// Object.defineProperty(student2, 'major', {
//   enumerable: ture,
// });
// configurable을 false로 설정했기 때문에 재정의 불가

Object.defineProperty(student2, 'major', {
  value: '전자공학',
});
console.log('configurable false, writable true :\n', Object.getOwnPropertyDescriptor(student2, 'major'));
// writable가 true이기 때문에 값 변경 가능
Object.defineProperty(student2, 'major', {
  writable: false,
});
console.log('configurable false, writable false로 변경 :\n', Object.getOwnPropertyDescriptor(student2, 'major'));

// Object.defineProperty(student2, 'major', {
//   writable: ture,
// });
// true로 변경하는 것은 불가능