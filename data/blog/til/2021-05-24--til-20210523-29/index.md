---
title: TIL-20210523~29
createdDate: "2021-05-24 10:47:34"
updatedDate: "2021-05-24 10:47:34"
author: 정대화
tags:
  - til
draft: false
---

## 05.23

- 간만에 알고리즘 스터디를 재개했다. 새로우 문제로 다시 시작하고 지난 문제는 다음 주 까지 해오기로했다. 이번 주 문제들은 크게 어렵지 않았고, 예전에 풀었던 문제들이라 쉽게 풀었던 것 같다. 토요일에 말아먹은 데브카니발에서도 느낀거지만, 이런 문제를 최대한 빨리 풀어야하는데 그게 힘들다. 풀이가 생각이 나지 않아 그런건지 아니면 빠르게 풀 수 있도록 체화를 시켜야 하는지 생각을 해봐야겠다.

- 이번 주 OS는 RPC부분이었다. 내용이 어려워 틈틈히 읽어뒀는데 그걸 토대로 준비하니 크게 어렵지 않고 금방 준비할 수 있었다. 미리 해놨어야 했는데, 당일에 준비하게돼서 아쉽다. 사실 준비는 다 돼있었는데 글만 오늘 쓴 것이긴 하지만... RPC 중 안드로이드의 바인드 프레임워크는 안드로이드의 핵심 사상 중 하나여서 중요하다고 한다. 코드레벨 예시가 있으니 stub이 뭔지 금방 이해됐다. 프록시 같은데 프록시가 서버와 클라이언트에 각각 따로 있는 느낌? 이렇게 설명하는게 더 어려운 것 같다. 중간에 grpc라는게 있다는 얘기가 나왔는데, 구글에서 만든 rpc 규격이라고 한다. msa에서 rest통신을 하면 느리니 그에 대한 대안으로 나온 것이라 한다. 느린 이유는 http프로토콜을 지켜야하고 데이터도 json으로 주고받아야하기 때문이라고 한다. grpc를 이용하면 같은 프로젝트에 있는 것 처럼 import 해서 모듈을 사용할 수 있다고 하는데 기회가 되면 살펴봐야겠다.

- 토끼책을 다 읽지 못했다. intension과 extension이 이해가 잘 가지 않았는데 알고보니 논리학에 있는 얘기였다... 분류가 구체적인 부분에 가까워질 수록 intenstion이 증가하고 extension은 감소한다고 한다. 예를 들어 동물이라는 개념으로 분류했을 때 보다 파충류나 포유류 같은 구체적인 개념으로 분류했을 때 intenstion이 더 증가한 것이다. 방향성이라고 생각해야될지... 어렵다.

- [인수테스트에서 테스트 격리하기](https://woowacourse.github.io/javable/post/2020-09-15-test-isolation/) 라는 글을 봤다. 여기서 힌트를 좀 얻을 수 있을 것 같다.

## 05.24~25

- 이번 수업은 DB에 관한 것이었다. 로우스토어와 컬럼스토어는 두 번째 보는 것 같은데 기억해두자. 클러스터링 인덱스가 전체적인 내용이었는데, 인덱스 페이지와 데이터 페이지를 합쳐 부르는 것이라 하면 된다고 한다.
  - 보통 B+트리를 사용한다. 자식에만 참조가 있다. B-트리와 다르다. B-트리는 바이너리트리와 다르다.
  - IO단위는 페이지
  - 오더가 자식의 최대 개수. 보통 1000개 정도로 잡아놓는다고 한다. pre-order, in-order, post-order를 이런 식으로 외우면 되겠다. 왜 모르고 있었을까... 한글로만 봐서 그런걸까
  - 세컨더리 인덱스로 외래키 유니크 인덱스 제약에 대한 인덱스 트리가 각각 만들어진다. 프라이머리를 참조한다.
  - 인덱스만 사용해서 쿼리를 구성할 수 있으면 커버링 인덱스라고 한다.

  나열해보니 아이템이 많다.

- 어제 오늘은 토끼책을 계속 읽어봤다. 뒷 부분은 훑어보다싶이 해서 다시 봐야할 것 같다. 메소드가 가장 중요하다는 말은 데이터 중심적 사고에서 벗어나야 하기 위함인 것 같다. 메세지를 보내면 객체가 메소드를 선택하게 해야 한다고 한다. 결국 중요한건 책임이다. 뒤의 설계부분은 다시 한 번 살펴봐야할 것 같다. 객체지향에 정리해보며 책 구석구석을 살펴보면 또 다른 힌트를 얻을 수 있지 않을까 한다.

## 05.26

- 작성했던 테스트코드 리뷰를 받았다. 요는 컨트롤러는 인수테스트가 더 어울린다는 것. 맞는 것 같다. 그래서 다 고쳤다.

  인수 테스트에는 RestAssured와 TestRestTemplate이 많이 쓰이는데, 후자가 스프링 기본이라 사용했다. 그런데 RestAssured를 더 많이 사용하는 것 같다. 대충 보니 더 편하게 만들어져있는 것 같다. TestRestTemplate은 파라미터 매핑이 조금 귀찮다. 코가 vs 펩시와 비슷한 구도라고... 일단은 써보고 나중에 느껴보기로 했다.

  고치면서 이해가 잘 안 갔던 부분은 RestTemplate에 객체나 맵으로 쿼리 파라미터를 넣으라고 시키면 넣어주지 않았던 점이다. 알고보니 `?param={value}`와 같은 식으로 매핑시켜줘야 하는 것이었다. 그래서 그냥 그만뒀다.

  한 가지 염려는 컨트롤러에서 모델 매핑을 시켜놔서 쿼리스트링임에도 스웨거에는 오브젝트로 보인다는 점. 물론 object(query)라고 적혀있긴한데 조금 찝찝하다. 그런데 어떻게 방법은 없는 것 같다. 아예 어노테이션으로 다 붙여줘야하나?

  이외에도 리뷰 내용 중에 스프링 프로필을 이용해서 목업과 도메인을 분리 시킬 수 있다는 피드백이 있었는데, 무슨 말인지 이해가 안 된다. 잘 정리해서 질문해봐야지..

- 조프로님 강의는 좋았다. 책으로는 와닿지 않았던 중요한 부분들을 잘 풀어주신 것 같다. 어제 책임이 가장 중요한 것 같다고 TIL에 써놨는데 조영호님도 책임이 가장 중요하다 하시니 책을 잘 읽은 것 같아 기분이 좋았다. 근데 책임 주도 설계이니 당연한거겠지?

  발표 내용은 책임, 역할, 협력의 사이클이 핵심이었던 것 같다. 그 외의 여러가지 부분이 있었는데, 정리해둔거 바탕으로 데브독스를 써봐야겠다. 너무 길어지면 이 정도로 끊으면 되겠다는 기준이 어느정도 생겼으니 주제로 충분할 것 같다.

- 헤로쿠 빌드가 잘 안 돼서 애를 먹었다. TIL에 적으니 글이 꽤 길어져 따로 작성하는게 좋을 것 같다. 결론은 로케일 문제였는데, 기술이 왜 생겼는지 생각하지 않고 막 쓰다 보니 해결하는데 시간이 오래걸린게 아닌가 싶다.

## 05.27~28

> 다음 집은 무조건 주차장과 CCTV가 있는 곳으로 간다. 그러니까 열심히좀 하자~...

- MockMvc의 리스폰스 인코딩이 UTF-8이 아니어서 생기는 문제들이 있었다. 그냥 넘겼는데, 좀 더 찾아보니 표준이 바뀌었고 브라우저들은 그 스펙을 지키는데 테스트 프레임워크는 아직 지키지 않아 발생하는 문제였던 것 같다. 어쩌면 컨트리뷰트를 할 수 있을 것 같기도 한데, 여유가 날까? 일단 프로젝트 다음 순위로 잡고 조금씩 찾아봐야겠다.

- 숙소 조회 목업을 짜면서 서비스와 로직이 섞여버렸다. 단위테스트가 아닌 통합테스트로 진행하니 발생한 단점이었던 것 같은데, 이걸 처음부터 잘 생각했어야 했던 것 같기도 하고. 그래서 나머지 테스트들은 모두 적당히 작성하고 말았다.

- 적당히 작성한 이유는 막상 서비스 테스트를 작성하려고 생각해보니 레포지토리와 독립적으로 진행해야 할 것 같다는 생각이 들었기 때문이다. 브라이언이 리뷰에 남겨줬던 프로필과 관련된 것이 이 부분 아닌가 싶다. 같은 이유로 서비스는 인터페이스로 바꾸고 목업과 도메인 개발용 구현체들을 만들어줬다.

  DB설계를 하며 도메인 로직과 DTO의 관계를 생각해보니 각각을 한 번에 생각하려고 했던 것이 그 간의 잘못된 점 아닌가 하는 생각이 들었다. 컨트롤러와 연결되는 DTO는 다른 영역이지만, 테이블과 객체가 맞지 않는 문제점을 해결하기 위한 방법이 ORM이다. 그런데 Data JDBC나 쿼리매퍼들은 부자연스러운 부분이 생긴다. 그러면 이 부분을 직접 매핑해줘야 좀 더 좋은 객체 설계가 나올 수 있는게 아닌가 싶다.

  그래서 현재 목표는 DB와 앱서버 간의 엔드포인트를 이어줄 엔티티 객체와 서비스 로직을 담당할 도메인 객체를 분리해서 작성하려고 한다. 그러면 서비스는 레포지토리와 느슨해지기때문에 편하게 단위테스트 작성이 가능해진다. 단점은 당연히 시간과 정성이다... 그런데 이렇게 하지 않으면 야구게임 프로젝트와 같은 대참사가 발생할 것 같다. 다음주에 최대한 빨리 끝내버리자.

## TODO

- [ ] MockMvc 분석
- [ ] AWS 강의듣기
- [ ] 우아한 객체지향
- [ ] 객체지향 정리(호눅스 과제)
- [ ] 이런 REST로 괜찮은가
- 알고리즘
  - [ ] [후위표기식](https://www.acmicpc.net/problem/1918)
  - [ ] [스타트택시](https://www.acmicpc.net/problem/19238)
  - [ ] [마법사 상어와 파이어볼](https://www.acmicpc.net/problem/20056)
  - [ ] [행렬](https://www.acmicpc.net/problem/1080)
  - [x] [카드 문자열](https://www.acmicpc.net/problem/13417)
  - [x] [방문 길이](https://programmers.co.kr/learn/courses/30/lessons/49994)
  - [x] [수리공 항승](https://www.acmicpc.net/problem/1449)

### ~ 05.23

- [x] 일요일 발표 준비 3.8.2 Remote Procedure Calls

### ~ 05.24

- [x] 토끼책 읽기 - 읽고 발표할 수 있을지 생각해보기
- [x] 데브독스 정리해서 올리기
- [x] 알고리즘 정리해서 올리기
- [x] 테스트 코드 작성 완료하고 pr 날리기

### Optional

- [ ] 엘라스틱서치
- [ ] 서브넷 구분
- [ ] s3 이용
- [ ] 깃헙액션으로 aws 배포
- [ ] classForName 테스트
