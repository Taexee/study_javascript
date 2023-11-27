/**
 * Inheritance 상속
 * 객체들 간의 관계를 구축하는 방법
 * 수퍼 클래스 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다
 */

class StudentModel {
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

class FemaleStudentModel extends StudentModel{
  // 상속을 받을땐 프로퍼티와 생성자도 함께 상속
  sing() {
    return `여자 학생이 노래를 부릅니다.`
  }
}

class MaleStudentModel extends StudentModel{
  // 상속을 받을땐 프로퍼티와 생성자도 함께 상속
  dance() {
    return `남자 학생이 춤을 춥니다.`
  }
}

const student1 = new FemaleStudentModel('kim', 2023);
console.log(student1);

const student2 = new MaleStudentModel('lee', 2013);
console.log(student2);

console.log(student1.sing());
console.log(student2.dance());

console.log('student1 instanceof StudentModel :', student1 instanceof StudentModel); // true
console.log('student1 instanceof FemaleStudentModel :', student1 instanceof FemaleStudentModel); // true
console.log('student1 instanceof MaleStudentModel :', student1 instanceof MaleStudentModel); // false
console.log('--------------------------------------------');
console.log('student2 instanceof StudentModel :', student2 instanceof StudentModel); // true
console.log('student2 instanceof FemaleStudentModel :', student2 instanceof FemaleStudentModel); // false
console.log('student2 instanceof MaleStudentModel :', student2 instanceof MaleStudentModel); // true