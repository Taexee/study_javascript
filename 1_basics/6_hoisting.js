/**
 * Hoisting은 무엇인가?
 * 모근 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

// 변수 선언전에 호출하면 undefined
console.log(name);
var name = 'min';
console.log(name);

/**
 * var name;
 * console.log(name);
 * name = 'min';
 * console.log(name);
 */

console.log(min);
let min = '민'; 

// 선언문이 있을 때 - 초기화하지 않았기 때문에 접근 불가 에러
// Cannot access 'min' before initialization
// 선언문이 없을 때 - 정의되지 않아 불가 
// min is not defined

/**
 * var와 let, const의 차이
 * var, let, const 모두 hoisting 발생
 * 
 * - var
 * 선언과 동시에 초기화 진행
 * undefined 할당
 * 
 * - let, const
 * 초기화 없이 선언만 진행
 * 초기화가 필요한 별도의 상태로 관리
 * hoisting시 초기화 없이는 접근이 불가능 하다는 에러를 띄운다
 */