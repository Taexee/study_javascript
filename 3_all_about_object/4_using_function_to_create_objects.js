/**
 * Using function to create objects
 * 생성자 함수
 */

function StudentModel(name, year) {
  // console.log('this :', this);
  // console.log('new.target :', new.target);
  // new 키워드 없이 생성자 함수 사용하면 this는 global
  // target은 undefined

  // new 키워드 없이 생성자 함수 사용했을때 new를 붙여주는 조건문
  if(!new.target) {
    return new StudentModel(name, year);
  }

  this.name = name;
  this.year = year;

  // return {};
  // object를 반환하면 object 그대로 반환
  // 123 같은 원시타입을 반환하면 생성자 함수 사용가능

  this.age = function() {
    return `${this.name}의 나이는 ${new Date().getFullYear() - this.year}살 입니다.`
  }
}

console.log('\n==== 생성자 함수 사용 ====');
const student = new StudentModel('kim', 2001);
console.log('생성자 함수 사용 :', student);
console.log('생성자 함수 이용한 메서드 생성 :', student.age());


console.log('\n==== new 키워드 없이 생성자 함수 사용 ====');
const student2 = StudentModel('lee', 2001);
console.log('new 키워드 없이 :', student2); // undefined
// console.log('new 키워드 없이 생성자 함수 사용 this.name :', global.name); // global에 this


// arrow 함수는 생성자 함수가 아니기때문에 불가능
// const StudentModelArrow = (name, year) => {
//   this.name = name;
//   this.year = year;
// };
// const student3 = new StudentModelArrow('park', 2021);