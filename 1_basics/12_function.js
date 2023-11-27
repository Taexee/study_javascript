/**
 * function -> 함수
 */

/**
 * 만약에 2부터 5까지 * 10 / 2 % 3 연산 결과를 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * D Don't
 * R Repeat
 * Y Yourself
 */

console.log('==== function ====');
/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 실제 입력하는 값은 argument라고 한다.
 */
function calculate(number) {
  console.log((number * 10 / 2 % 3).toString());
}

// 2~5까지 연산 함수로 간편하게 사용
for(let i = 2; i <= 5; i++) {
  calculate(i);
}


console.log('==== Parameter 여러개 사용  ====');
function multiply1(x, y) {
  console.log(x * y);
}
multiply1(2, 4);


console.log('==== Default Parameter ====');
function multiply2(x = 3, y = 10) {
  console.log(x * y);
}
multiply2();
multiply2(2);
multiply2(2, 5);


console.log('==== return 반환받기 ====');
function multiply3(x, y) {
  return x * y;
}
let result1 = multiply3(2, 4);
console.log('return :', result1);


console.log('==== Arrow 함수 ====');
const multiply4 = (x, y) => {
  return x * y;
}
let result2 = multiply4(5, 3);
console.log('Arrow 함수 :', result2);

const multiply5 = (x, y) => x * y;
let result3 = multiply5(6, 3);
console.log('Arrow 함수(간결) :', result3);

const multiply6 = x => x * 2;
let result4 = multiply6(2);
console.log('Arrow 함수(파라미터 1개) :', result4);

const multiply7 = x => y => z=> `x: ${x} y: ${y} z: ${z}`;
let result5 = multiply7(7)(5)(7);
console.log('Arrow 함수(함수 여러개) :', result5);

function multiply8(x) {
  return function(y) {
    return function(z) {
      return `x: ${x} y: ${y} z: ${z}`;
    }
  }
}
console.log('Arrow 함수 일반 함수로 변환 :', multiply8(7)(5)(7));

const multiplyTwo = function(x, y) {
  return x * y;
}
console.log('변수에 함수 할당 :', multiplyTwo(4, 5));


console.log('==== argument ====');
const multiplyThree = function(x, y, z) {
  console.log('arguments :', arguments);
  return x * y * z;
}
console.log('arguments 출력 :', multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
  // arguments에 있는 value 값들을 하나씩 곱해서 반환해줌
}
console.log('arguments reduce :', multiplyAll(1, 2, 3, 4));


console.log('==== 함수 바로 실행 ====');
(function(x, y) {
  console.log('immediately invoked function :', x * y);
})(4, 5)


console.log('==== 함수의 타입 ====');
console.log('typeof :', typeof multiply1);
console.log('instanceof :', multiply1 instanceof Object);