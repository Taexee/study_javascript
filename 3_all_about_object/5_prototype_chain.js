/**
 * Prototype
 */

console.log('\n==== Prototype ====');
const testObj = {};
// __proto__ 모든 객체에 존재하는 프로퍼티
// 부모 클래스
console.log(testObj.__proto__); // [Object: null prototype] {}

function StudentModel(name, year) {
  this.name = name;
  this.year = year;
}
console.log('prototype :', StudentModel.prototype); // {}
// 숨겨진 값 확인
console.dir(StudentModel.prototype, { 
  showHidden: true,
});


// circular reference 순환 참조 
console.log('\n==== circular reference 순환 참조 ====');
console.log('--- StudentModel과 student ---');
console.log(StudentModel.prototype.constructor === StudentModel); // StudentModel 함수와 StudentModel.prototype.constructor는 같은 객체, 동일하다

console.log(StudentModel.prototype.constructor.prototype === StudentModel.prototype);

const student = new StudentModel('kim', 2002);
console.log(student.__proto__);
console.log(student.__proto__ === StudentModel.prototype);
// student의 부모 클래스의미, student의 부모 클래스는 StudentModel
console.log(testObj.__proto__ === Object.prototype);
// testObj 부모 클래스의미, testObj 부모 클래스는 Object

console.log('\n--- StudentModel과 Function, Object ---');
console.log(StudentModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(StudentModel.prototype.__proto__ === Object.prototype);

console.log(student.toString()); 
console.log(Object.prototype.toString());
// Object에서 상속받은 메서드 

function StudentModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
  }
}

const student2 = new StudentModel2('lee', 1999);
const student3 = new StudentModel2('park', 2000);

console.log(student2.sayHello(), student3.sayHello());
console.log(student2.sayHello() === student3.sayHello()); // false

console.log(student2.hasOwnProperty('sayHello'));
// 상속받은 것이 아닌 student2 고유 프로퍼티


console.log('\n==== 공유 메서드 ====');
// 인스턴스마다 sayHello를 가지고 있음 -> 메모리 낭비
// 서로 공유하길 원함
function StudentModel3(name, year) {
  this.name = name;
  this.year = year;
}
StudentModel3.prototype.sayHello = function() {
  return `${this.name}이 인사를 합니다.`;
}
const student4 = new StudentModel3('lee', 1999);
const student5 = new StudentModel3('park', 2000);

console.log(student4.sayHello(), student5.sayHello());
console.log(student4.sayHello() === student5.sayHello()); // false

console.log(student4.hasOwnProperty('sayHello'));
// false 상속받은 것

StudentModel3.sayStaticHello = function() {
  return 'static 함수';
}

console.log('static 함수 :', StudentModel3.sayStaticHello());
// 인스턴스에는 존재하지 않음


/**
 * Overriding
 */
console.log('\n==== Overriding ====');

function StudentModel4(name, year) {
  this.name = name;
  this.year = year;

  // 오버라이딩 - 프로퍼티 셰도잉
  this.sayHello = function() {
    return '인스턴스 메서드';
  }
}
StudentModel4.prototype.sayHello = function() {
  return 'prototype 메서드';
}
const student6 = new StudentModel4('lee', 1999);
console.log(student6.sayHello());


/**
 * 자바스크립트 일반적인 OOP와 다른 점
 * 프로토값을 변경할 수 있다 -> 상속받는 클래스를 변경할 수 있다
 * 인스턴스를 생성하고 나서도 가능
 * 
 * getPorototypeOf, setPorototypeOf
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function StudentModel(name, year) {
  this.name = name;
  this.year = year;
}
StudentModel.prototype.sayHello = function() {
  return `prototype 메서드 - ${this.name}이 인사를 합니다.`;
}

function FemaleStudentModel(name, year) {
  this.name = name;
  this.year = year;

  this.sing = function(){
    return `인스턴스 메서드 - ${this.name}이 노래를 부릅니다.`;
  }
}

const kim = new StudentModel('kim' , 2004);
const lee = new FemaleStudentModel('lee', 2002);

console.log('--- getPrototypeOf ---');
console.log(kim.__proto__); // 프로토 메서드 sayHello 출력
console.log(kim.__proto__ === StudentModel.prototype); 
console.log(Object.getPrototypeOf(kim));
console.log(Object.getPrototypeOf(kim) === StudentModel.prototype);
console.log(Object.getPrototypeOf(kim) === kim.__proto__); 
// 결론! getPrototypeOf -> kim의 prototype을 가져옴

console.log('--- setPrototypeOf ---');
console.log(kim.sayHello()); // 상속받은 메서드로 실행 가능
console.log(lee.sing()); // 인스턴스 메서드로 실행 가능
// console.log(lee.sayHello()); 불가능 lee는 sayHello를 상속받지 않았다
Object.setPrototypeOf(lee, StudentModel.prototype); // 상속 변경 StudentModel
console.log(lee.sayHello());
console.log(lee.constructor === FemaleStudentModel); // false
console.log(lee.constructor === StudentModel); // true
// 상속이 StudentModel로 변경되어 생성자도 StudentModel

console.log('--- 함수의 prototype 변경 ---');
FemaleStudentModel.prototype = StudentModel.prototype;
const park = new FemaleStudentModel('park', 1999);
console.log(Object.getPrototypeOf(park) === FemaleStudentModel.prototype);
console.log(StudentModel.prototype === FemaleStudentModel.prototype);
// 프로토 타입을 직접 변경하면 new 생성할 때 변경된 프로토타입을 그대로 상속받기 때문에 모두 true 반환
// 객체만 프로토타입을 변경하면 프로토타입은 false