/**
 * class
 * 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀
 */

// 클래스
class PersonModel {
  name;
  year;
  // 자바스크립트는 클래스 속성 정의는 옵션!이지만 정의하는 것이 룰

  // constructor 생성자
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 메서드
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`
  }
}

console.log('==== 클래스 인스턴스 생성 ====');
const kim = new PersonModel('김', 2023);
console.log(kim);

const lee = new PersonModel('이', 2003);
console.log(lee);

const park = new PersonModel('박', 2013);
console.log(park);


console.log('\n==== 인스턴스 다루기 ====');
console.log('kim.name :', kim.name);
console.log('lee.year :', lee.year);
console.log('park 메서드 :', park.sayName());

console.log('\n==== 클래스 타입 ====');
// 클래스는 function 인스턴스는 object
console.log('typeof PersonModel :', typeof PersonModel);
console.log('typeof kim :', typeof kim);