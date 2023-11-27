/**
 * Getter and Setter
 */

class PersonModel{
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * getter
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  /**
   * setter
   * 1) 값을 새로 저장할 때
   * 2) private한 값을 변경할 때
   */
  set setName(name) {
    this.name = name;
  }

  set setYear(year) {
    this.year = year;
  }
}

const student = new PersonModel('kim', 2023);
console.log('student getter :', student.nameAndYear);
student.setName = 'lee';
console.log('student.setName :', student);


class PersonModel2{
  // private
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const student2 = new PersonModel2('kim', 2012);
console.log('인스턴스 출력 :', student2); // private는 나오지 않는다.
console.log('getter 사용 :', student2.name);
// setter 사용해 name 변경
student2.name = 'park';
console.log('setter 사용 :', student2.name);