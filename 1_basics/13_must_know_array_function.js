/**
 * Array Functions
 */

let rainbow = [
  '빨강',
  '주황',
  '노랑',
  '초록',
  '파랑',
  '남색',
  '보라'
]
console.log('rainbow :', rainbow);

console.log('\n==== array를 직접 변경하는 함수 ====');
// push() - array에 직접 추가
console.log('1. push()');
console.log('push() 반환값 :', rainbow.push('무지개')); // 추가 후 길이 반환
console.log(rainbow);


// pop() - array의 마지막 요소를 제거
console.log('2. pop()');
console.log('pop() 반환값 :', rainbow.pop()); // 제일 마지막 요소를 제거하면서 반환
console.log(rainbow);


// shift() - array의 첫번째 요소를 제거
console.log('3. shift()');
console.log('shift() 반환값 :', rainbow.shift()); // 제일 첫번째 요소를 제거하면서 반환
console.log(rainbow);


// unshift() - array의 첫번째에 추가
console.log('4. unshift()');
console.log('unshift() 반환값 :', rainbow.unshift('빨강')); // 제일 첫번째 요소를 추가하면서 길이 반환
console.log(rainbow);


// splice() - 지정한 인덱스 범위 요소 제거
console.log('5. splice()');
console.log('splice() 반환값 :', rainbow.splice(0, 3)); // 0번부터 2번까지 삭제하면서 삭제한 요소 반환
console.log(rainbow);


// 배열 초기화
rainbow = [
  '빨강',
  '주황',
  '노랑',
  '초록',
  '파랑',
  '남색',
  '보라'
]


console.log('\n==== array를 직접 변경하지 않는 함수 ====');
// concat() - 새로운 array에 요소 추가
console.log('1. concat()');
console.log('concat() 반환값 :', rainbow.concat('무지개')); // 무지개를 마지막에 추가한 새로운 array 반환
console.log('rainbow :', rainbow);

// slice() - 지정한 인덱스 범위로 새로운 array 생성
console.log('2. slice()');
console.log('slice() 반환값 :', rainbow.slice(0, 3)); // 0번부터 2번까지 array 반환
console.log('rainbow :', rainbow);


console.log('\n==== spread operator ====');
let rainbow4 = rainbow;
console.log('rainbow === rainbow4 :', rainbow === rainbow4); // 같은 array

let rainbow2 = [
  ...rainbow,
]
console.log('1. spread ... :', rainbow2);
console.log('rainbow === rainbow2 :', rainbow === rainbow2);
// 요소는 동일해도 완전히 새로운 array 생성

let rainbow3 = [
  rainbow,
]
console.log('2. spread 사용안함 :', rainbow3); // [[]] 리스트 안에 리스트 형태로 생성


console.log('\n==== join() ====');
// 요소들을 string으로 반환
// 구분자를 지정할 수 있다.
console.log('rainbow.join() :', rainbow.join());
console.log('rainbow.join(/) :', rainbow.join('/'));


console.log('\n==== 정렬 ====');
console.log('1. 오름차순 sort()');
rainbow.sort(); // 반환값이 없고 array를 직접 변경
console.log('오름차순 정렬 :', rainbow)

console.log('2. 내림차순 reverse()');
console.log('내림차순 정렬 :', rainbow.reverse()) // 정렬이 된 array를 반환 array를 직접 변경

console.log('3. sort() 심화');
let num = [
  1,
  4,
  2,
  9,
  5,
]
// a와 b를 비교했을 때
// 1) a를 b보다 나주에 정렬하려면(뒤에 두려면) 0보다 큰 숫자 반환
// 2) a를 b보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자 반환
// 3) 원래 순서 그대로 두려면 0 반환
num.sort((a, b) => { return a > b ? 1 : -1; }); // 오름차순
console.log('1번 정렬 :', num); 

num.sort((a, b) => { return a < b ? 1 : -1; }); // 내림차순
console.log('2번 정렬 :', num); 


console.log('\n==== map() ====');
// array 요소를 변경할 수 있는 함수
// 새로운 array 반환
console.log('map()-그대로 반환:', rainbow.map((x) => x));
console.log('map()-템플릿 리터럴 사용 :', rainbow.map((x) => `무지개: ${x}`));
console.log('map()-조건 :', rainbow.map((x) => {
  if(x === '주황') {
    return `무지개: ${x}`;
  } else {
    return x;
  }
}));


console.log('\n==== filter() ====');
// 조건에 맞는 array 요소를 모두 찾는 함수
// 새로운 array 반환 
num = [1, 8, 7, 6, 3];
// array를 순회하면서 filter 조건 true인 요소를 모두 반환
console.log('filter() :', num.filter((x) => x%2 === 0));


console.log('\n==== find() ====');
// 처음 조건에 맞는 array 요소 한개 반환
console.log('find() :', num.find((x) => x%2 === 0));


console.log('\n==== findIndex() ====');
// 처음 조건에 맞는 array 요소 인덱스를 반환
console.log('findIndex() :', num.findIndex((x) => x%2 === 0));


console.log('\n==== reduce() ====');
console.log('reduce() :', num.reduce((p, n) => p + n, 0)); // 모든 요소의 합

/**
 * reduce(콜백함수, 초기값)
 * reduc((p, n) => p + n, 0)
 * 1. 초기값 0이 p에 입력
 * 2. array에 첫번째 요소값이 n에 입력
 * 3. 함수 실행 결과값 반환 0 + array[0]
 * 4. 결과값을 p에 입력
 * 5. array에 두번째 요소값이 n에 입력
 * ... (반복)
 * n. 모든 값을 더한 결과값이 반환
 */