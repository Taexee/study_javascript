/**
 * Loops
 * 1) for
 * 2) while
 */

// 1) for
console.log('==== for ====');
for(let i = 0; i < 10; i++) {
  console.log(i);
}


console.log('==== 이중 for ====');
for(let i = 0; i < 3; i++) {
  for(let j = 3; j > 0; j--) {
    console.log('i =', i, 'j =', j);
  }
}


console.log('==== 6*6 정사각형 출력 ====');
let square = '';
let side = 6;
for(let i = 0; i < side; i++){
  for(let j = 0; j < side; j++) {
    square += '*';
  }
  square += '\n';
}
console.log(square);


/**
 * for...in
 */
console.log('==== for...in object ====');
const person = {
  name: '홍길동',
  birth: 2023,
}

// 키 출력
for(let key in person) {
  console.log(key);
}


console.log('==== for...in array ====');
const array = ['가', '나', '다', '라'];

// array 인덱스 출력
for(let key in array) {
  console.log(`${key}:${array[key]}`);
}


console.log('==== for...of array ====');
// array 값 출력
for(let value of array) {
  console.log(value);
}


// 2) while
console.log('==== while ====');

let number = 0;
while(number < 10) {
  number++;
}
console.log('while :', number);


console.log('==== do-while ====');
number = 0;
do {
  number++;
} while(number < 10)
console.log('do while :', number);
// do를 실행하고 while 조건을 판단, 실무에선 사용하지 않음


console.log('==== break ====');
for(let i = 0; i < 10; i++) {
  if(i === 5) {
    break;
  }
  console.log('for break :', i);
}

number = 0;
while(number < 10) {
  if(number === 5) break;
  number++;
}
console.log('while break :', number);


console.log('==== continue ====');
for(let i = 0; i < 10; i++) {
  if(i === 5) {
    continue;
  }
  console.log('for continue :', i);
}
// i가 5일 때 continue때문에 log 스킵

number = 0;
while(number < 10) {
  number++;
  if(number === 5) continue;
  console.log('while continue :', number);
}
// number가 5일 때 continue때문에 log 스킵
