/**
 * Super and Override
 */

class StudentModel {
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`
  }
}

class FemaleStudentModel extends StudentModel{
  major;

  // 부모에게 상속받은 생성자를 오버라이드
  constructor(name, year, major){
    super(name, year); // 부모 클래스의 생성자를 실행
    this.major = major;
  }

  // 부모에게 상속받은 메서드도 오버라이드 가능
  sayHello() {
    // return `안녕하세요 ${this.name}입니다. 전공은 ${this.major}입니다.`
    // name => super 키워드가 아닌 this 키워드를 사용해야함
    return `${super.sayHello()} 전공은 ${this.major}입니다.`
    // 안녕하세요 ${this.name}입니다. => 부모 클래스와 중복됨  부모클래스 메서드 호출
  }
  
}

class MaleStudentModel extends StudentModel{
  
}

const student1 = new FemaleStudentModel('kim', 2023, '컴퓨터공학');
console.log(student1);

const student2 = new StudentModel('lee', 2013);
console.log(student2.sayHello());
console.log(student1.sayHello());