/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = '김';
console.log(name);

var age = 20;
console.log(age);

let name2 = '이';
console.log(name2);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

name2 = '박';
console.log(name2);

const name3 = '최';
console.log(name3);

// name3 = '민'; 
// 상수인 const는 변경 불가

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것
 * var name;
 * 
 * 2) 할당
 * name = '김';
 */

let Variable;
console.log(Variable); // undefined
// 변수를 선언후 값을 할당하지 않으면 초기값이 undefined로 할당

// const constVariabl; const는 선언만 불가능 값의 할당이 꼭 필요
