---
title: TIL-20210305
createdDate: "2021-03-05 11:05:27"
updatedDate: "2021-03-05 11:05:27"
author: 정대화
tags:
  - til
draft: false
---

- index 페이지에 특정 도메인에 대한 뷰를 보여줘야 하는 요구사항이 마음에 들지 않았다. 요구사항을 지키면서 수정할 수 있는 방법을 생각해보다 리디렉트를 해주는 식으로 수정을 해놨었는데, 생각을 해보니 포워딩이 더 적절하다고 판단했다. 간만에 차이점도 다시 한 번 봤다. 단어의 의미를 생각해보면 그리 어렵지 않은데, redirect는 말 그대로 다시 보내는 것이다. 목적지를 바꾸어 다시 보내준다. 반면 포워딩은 전달해주는 것이다. 다시 보내주는 것인지, 전달만 해주는 것인지에 따라 차이가 생기는데, 여기서 서블릿 스코프를 다시 생각해보게 됐다. 네 가지 스코프가 있는데 각각 페이지, 리퀘스트, 세션 어플리케이션이다. 얼마 전에도 리퀘스트 스코프에 대해 인지를 하지 못하여 잘못 생각한 적이 있었는데, 생각해보니 스코프 자체를 잊고 있었던 것 같다. 아무튼 리디렉트는 다시 보내는 것이니 새로운 리퀘스트 스코프가 시작된다. 기억해두자.

- 템플릿 엔진을 사용하면 빌드 과정에서 페이지를 미리 만들어 놓을 것이라 생각했는데 아니었다. 여러 문서에도 너무 잘 나와있지만 런타임에 파싱한다. 이게 이해가 잘 되지 않았었는데, 결국은 뷰 리졸버에서 뷰를 가져올때 컴파일 하여 보내준다. 컨트롤러에서 모델과 뷰를 넣고 디스패쳐 서블릿은 이 것을 뷰 리졸버로 보낸다. 뷰 리졸버는 13개의 구현 객체가 있다는데 아무튼 여기에서 적절한 처리를 해서 결과를 리턴한다. 복잡해 보이지만 그림을 보면서 생각해보면 심플하다.
  ![dispatcherservlet](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/images/mvc.png)
  > [spring docs에서 발췌](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html)

  위에서 뷰 리졸버는 구현 객체가 따로 있다고 했는데, 템플릿 엔진은 뷰 리졸버의 구현을 커스터마이징 한다. 그리고 뷰 클래스도 따로 정의해줘야 하는 것 같다. 위에서도 말했듯, 이게 어떻게 돌아가는지 이해가 잘 가지 않아 직접 이것 저것 뜯어봤는데 `HandleBarsView`라는 클래스와 전용 리졸버가 따로 있는 것을 확인했다.

- toString. 메소드 설명에 다음과 같이 나와있다.
  ```text
  Returns a string representation of the object. In general, the toString method returns a string that "textually represents" this object. The result should be a concise but informative representation that is easy for a person to read. It is recommended that all subclasses override this method.
  ```
  `It is recommended that all subclasses override this method.` 웬만하면 오버라이드 해주자.

- 알고리즘을 풀었다. 완전 탐색 문제도 dp만큼이나 까다로운 것 같다. 수학을 잘 해야 한다... 예전에 풀었던 탑이라는 문제를 다시 풀었는데 제대로 풀지 못했다. 예전에 풀었던 문제들도 잘 살펴보며 넘어가야 할 것 같다. 특히 난이도 있는 문제들은 더더욱.

- TIL이 쌓여가는데, 매일매일 작성하다보니 너무 많아졌다. 원래는 년 단위나 반년 정도의 텀을 두고 정리를 해볼까 했는데 분기별로 정리해봐야겠다. 사실 이 것도 엄두가 안 나긴 하는데, 월말의 나에게 맡겨두자. 잘 할거야! ㅋㅋㅋ