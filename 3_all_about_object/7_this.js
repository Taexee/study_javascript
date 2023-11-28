/**
 * this
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다.
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시정에 결정된다.
 */

const testFunction = function() {
  return this;
}
console.log(testFunction());
console.log(testFunction() === global);
// Object [global]에 맵핑

const kim = {
  name: 'kim',
  year: 2022,
  sayHello: function() {
    return `안녕하세요 저는 ${this.name}입니다.`
  }
}
console.log(kim.sayHello());
// this는 kim객체에 맵핑

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function() {
    return `안녕하세요 저는 ${this.name}입니다.`
  }
}
const lee = new Person('lee', 2002);
console.log(lee.sayHello());
// this는 lee 객체에 맵핑

Person.prototype.work = function() {
    return `${this.name} 걷는다.`
}
console.log(lee.work());
// prototype 함수여도 this는 lee 객체에 맵핑, 실행하는 대상 객체에 맵핑

Person.prototype.stop = function() {
  function stop2() {
    return `${this.name} 멈춘다.`
  }
  return stop2();
}
console.log(lee.stop());
// this는 undefined

/**
 * 상위레벨에 메서드를 선언하면 this는 실행하는 대상 객체로 맵핑
 * 그 외의 위치에 메서드를 선언하면 this는 global에 맵핑
 * 
 * this 키워드가 어떤걸 가르키냐는 3가지만 기억!
 * 1) 일반 함수 호출할땐 this가 최상위 객체(global 또는 window)를 가르킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가르킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가르킨다.
 */

/**
 * 원하는 this값으로 맵핑하는 방법
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName() {
  return this.name;
}
console.log(returnName()); // global

const park = {
  name: 'park',
  year: 2001,
}
console.log(returnName.call(park));
console.log(returnName.apply(park));

/**
 * 1) call -> 콤마를 기반으로 argument를 순서대로 넘겨줌
 * 2) apply -> argument를 리스트로 입력
 */
function mutiply(x, y, z) {
  return `${this.name} 결과값 : ${x * y * z}`;
}
console.log(mutiply.call(park, 2, 3, 4));
console.log(mutiply.apply(park, [2, 3, 4]));

/**
 * bind()
 * this를 바인딩하고 나중에 실행 가능 -> 함수처럼 실행
 */
const laterFunc = mutiply.bind(park, 2, 3, 4);
console.log(laterFunc); //[Function: bound mutiply]
console.log(laterFunc());