---
title: TIL-20210408
createdDate: "2021-04-09 10:05:30"
updatedDate: "2021-04-09 10:05:30"
author: 정대화
tags:
  - til
draft: false
---

- 목업 API 만들기가 끝났다. 다른 조를 보니 db연결에서 애를 많이 먹는 것 같았다. 특히 Spring Data JDBC의 aggregate 설정이 어려운 듯 하다.. 잘 기억해둬야겠다.

- 디스패쳐 서블릿에 관한 얘기가 나왔다. 내가 생각할때는 하나의 빈으로 관리되어도 무방할 것 같은데, 스레드 풀처럼 저장이 되지 않겠느냐는 의견이 있었다. 한 번 찾아봐야겠다.

- 리액트는 단방향으로 흘러간다고 한다. 파이로가 이것을 브라우저(엔진이라고 해야할지)와 뷰(실제 랜더링되는)로 나누어 설명해줬는데, 이런 사상 때문에 뷰 단의 코드에서 모든걸 해주는 듯한 코드가 나오는 것 같다는 생각이 들었다. https://velog.io/@kyusung/React-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0#%EB%8B%A8%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%9D%90%EB%A6%84

- 엄격한 함수형은 statement와 expression의 차이가 중요하다고 한다. 파이로에게 들은 설명이다. 리엑트의 블록에서 조건을 주고 싶으면 반드시 expression을 사용해야 하는 부분들이 있었는데 이것으로 설명해줬다. if-else와 같은 statement는 리턴이 보장되지 않는다는 것이 포인트인 것 같다. 아마도 사이드 이팩트를 감지할 수 없기 때문이 아닌지 추측해봤다. 