/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

// 1) object를 생성해서 객체 생성 - 기본기 {}
const student = {
  name: 'kim',
  year: 2023,
}
console.log('{} 객체 :', student);

// 2) class를 인스턴스화해서 생성 - class와 OOP
class Student {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const student2 = new Student('lee', 2024);
console.log('클래스 사용 객체 :', student2);

// 3) function을 사용해서 객체 생성
function StudentFunction(name, year){
  this.name = name;
  this.year = year;
}
const student3 = new StudentFunction('park', 2025);
// function을 사용해 프로퍼티 할당하는 경우 new 키워드 사용
console.log('function 사용 객체 :', student3);