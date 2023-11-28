/**
 * Scope
 */

var num1 = 20;
function levelOne() {
  console.log(num1);
}
// levelOne();
// 함수를 실행할 때 상위 스코프 접근 가능

function levelOne() {
  var num1 = 40;
  console.log(num1);
}
// levelOne();
// 가장 가까운 스코프에 있는 변수 사용

// console.log(num1);
// 함수 스코프에서 같은 num1을 선언해도 상위 스코프를 덮어쓰지 않는다.

function levelOne() {
  var num1 = 10;
  function levelTwo() {
    var num1 = 50;
    var num2 = 99;
    console.log(`levelTwo : num1 = ${num1}, num2 = ${num2}`);
  }

  levelTwo();
  console.log(`levelOne : num1 = ${num1}`);
}
levelOne();
// 가장 가까운 스코프에 있는 변수를 사용한다.
// 상위에서 하위 스코프 변수를 사용할 수 없다.

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */

var num3 = 3; // global

function functionOne() {
  var num3 = 100;
  functionTwo();
}

function functionTwo() {
  console.log(num3);
}

functionOne(); // Lexical Scope인 자바스크립트는 global scope에서 가져옴 3
// Dynamic Scope는 functionOne에서 가져와 100

console.log('\n==== var와 let의 scope 차이 ====');
console.log('--- var ---');
var i = 999;
for(var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`);
// var의 경우 스코프가 새로 생기는 경우는 함수에서 사용할 때
// for, if, while 등 블록레벨 스코프에서는 글로벌 스코프 사용

console.log('--- let ---');
i = 999;
for(let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`);
// let 경우 함수말고도 for, if, while 등 블록레벨 스코프 생성

/**
 * var 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */