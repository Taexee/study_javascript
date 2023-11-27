/**
 * static keyword
 */

class StudentModel {
  name;
  year;
  static major = '컴퓨터공학';

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  static returnMajor() {
    return this.major;
  }
}

const student = new StudentModel('kim', 2023);
console.log('student :',student);

console.log('static 출력 :', StudentModel.major);
// 인스턴스에 귀속되는 것이 아니라 클래스에 귀속됨
// new 키워드가 필요없다.

console.log(StudentModel.returnMajor());
// 함수도 가능


/**
 * factory constructor
 */
console.log('\n==== factory constructor ====');
class StudentModel2 {
  name;
  year;
  static major = '컴퓨터공학';

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  // factory constructor
  static fromObject(object) {
    return new StudentModel2(
      object.name,
      object.year,
    );
  }

  static fromList(list) {
    return new StudentModel2(
      list[0],
      list[1],
    );
  }
}

// new 키워드 없이 객체를 생성
const student2 = StudentModel2.fromObject({
  name: 'lee',
  year: 2012,
});
console.log('fromObject 사용 :', student2);

const student3 = StudentModel2.fromList([
  'park',
  2022,
]);
console.log('fromList 사용 :', student3);
