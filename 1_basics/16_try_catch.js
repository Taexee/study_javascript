/**
 * try...catch
 * 1) 발생시킬때 던진다고함 => throw
 * 2) 명시적으로 인지할 때는 잡는다고함 => catch
 */

function runner() {
  try {
    console.log('Hello');
    throw new Error('에러 발생');
    // 에러가 발생하면 에러 발생 이후 코드는 실행되지 않는다.
    console.log('World');
  } catch (e) {
    // try-catch로 감싸면 에러 발생 후 catch문으로 이동 
    console.log('--- catch ---');
    console.log(e);
  } finally {
    // finally문은 에러가 발생 여부와 상관없이 무조건 실행
    console.log('--- finally ---');
  }
}

runner();