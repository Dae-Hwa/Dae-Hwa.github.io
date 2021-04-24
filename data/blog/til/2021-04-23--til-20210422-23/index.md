---
title: TIL-20210422~23
createdDate: "2021-04-23 17:57:54"
updatedDate: "2021-04-23 17:57:54"
author: 정대화
tags:
  - til
draft: false
---

- 리팩토링을 진행하며 제네릭을 사용했다. 제네릭 메소드에서 생각하지 못해봤던 동작이 발생했다.
   ```java
  public static <E> List<E> test() {
      return somethingReturnList();
  }
  ```
  컴파일은 문제없이 되고, 실행도 잘 된다. 문제는 E의 타입이 정확하지 않아도 된다는 것이다.

  ```java
  public static void main(String[] args) {
      List<Integer> test1 = test();
      List<String> test2 = test();
  }
  ```
  둘 다 가능하다. 예상으로는 제네릭 타입이 명시되지 않았기 때문에 Object로 추론한게 아닌가 하는 생각이다.
  
- 예외에 관해서 브라이언이 발표를 해주셨다. 간단히 얘기하면 절대로 일어나지 말아야 하는 것이 예외 상황이라는 것이다. 도메인 내부에서 예외를 잘 사용하면 헷갈리는 일이 많이 없어질 것이라는 것. 즉 설계의 문제라는 것이다.

  이외에 상속을 잘 이용하면 계층을 구성할 수도 있다는 것. 나름의 정리를 좀 해봐야겠다.

- executable jar에서 파일을 불러오면 `jar:file:`로 url이 세팅된다. 그래서 그런건지 파일이 없는 것으로 나온다. 아마 url의 프로토콜이 file이 아닌 것으로 판단된 것이 아닌가 싶다. war로 배포할때는 이런 일이 없다고 한다.
