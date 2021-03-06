---
title: TIL-20210120
createdDate: "2021-01-20"
updatedDate: "2021-01-20"
author: 정대화
tags:
  - til
draft: false
---

- 오늘 엄청나게 늦잠을 자버렸다. 우려하던것이 일어난 듯 하다. 그래도 다행히 알고리즘 데이여서 큰 피해는 없었다. 더욱 다행히 문제도 다 쉬운 것들이여서 금방 해결 할 수 있었다.

- 오후에는 밀린 잠을 마저 자버렸다. 푹 쉰 느낌이다. 아마 1월 말까지는 계속 비슷한 패턴으로 흘러갈 것 같은데 걱정이다. 욕심을 조금 내려놓아야 할 것 같다.

- 네트워크 강의를 들었다 아직 초반부여서 크게 무리는 없는데 일찍 일어나 부지런히 들어야 겠다. 스케줄을 보니 이번 주에 끝내도록 되어있다.

- 남는 시간에 pass by value 매커니즘을 좀 살펴봤다. 원리는 생각보다 간단한듯하다.

  ```java
  class A {
      public static void main(String[] args) {
          // #1
          A a = new A();
          // #2
          call(a);
      }

      public void call(A parameter) {
        // #3
        parameter = new A();
      }
  }
  ```

  - \#1 에서 변수 a에 인스턴스가 할당된다.
  - \#2 에서 메소드의 argument로 a가 넘어간다. 이 때, 메소드의 로컬 변수에 참조가 복사된다(shallow copy).
    - 복사된다는것은 다음과 같다. `parameter = a`
  - 따라서 \#3 에서 parameter의 참조가 변해도 a는 그대로다.
    > 물론 parameter를 리턴한다면 예상하는 결과가 나올 것이다.

  이거 해보려고 별 짓 다해봤는데 원리는 참 간단했다. 디컴파일 시켜봐도 로컬 변수가 새로 생성되어있는데 이 점을 간과하고 있었던 것 같다.

  가장 큰 착각은 값이 복사가 된다고해서 객체가 복사될 것이라 착각했던 것이다. 하지만 객체는 복사되지 않는다. 실제로 인스턴스 주소를 찍어보면 같은 주소가 나온다. 해쉬값도 똑같다.

  call by sharing이라는 말을 이래서 사용하는 것 같다. deep copy가 아니라서 call by value만으로 설명하기에는 직관적이지 않다고 느껴진다.

## 아쉬운 점

- OS 공부를 안했다. 내일은 미션을 좀 미루고서라도 조금씩 해봐야 할 것 같다. 내일은 전체적인 퀄리티는 좀 낮추고 미션 내용에 집중해보려고 한다. 잘 될지는 모르겠다.🤔
