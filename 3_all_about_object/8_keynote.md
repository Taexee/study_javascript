## Execution Context?
- 실행 하려는 JS코드와 코드를 실행할 때 필요한 정보를 담고있는 특수한 환경.
- 코드 실행에 필요한 모든 데이터를 들고 있는 환경이라 생각
#### Global Context 
- 최상위 Execution Context. 코드를 실행 하려면 무조건 생성되는 context로 웹에서의 window객체나 nodeJS에서의 global 객체를 생성하고 들고있는다.
#### Function Context
- 함수가 실행될 때마다 함수별로 실행되는 context. 함수 실행에대한 모든 정보를 갖고 있는다.

## Execution Context Stack
#### Creation Phase
- Global Object를 생성, window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성
- this를 window 또는 global에 바인딩
- 변수화 함수를 memory heap에 배정하고 기본값을 undefined로 저장
#### Execution Phase 
- 코드를 실행, 필요하다면 새로운 Execution Context 생성
