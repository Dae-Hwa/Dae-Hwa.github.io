---
title: TIL-20210822~28
createdDate: "2021-08-24 04:43:23"
updatedDate: "2021-08-24 04:43:23"
author: 정대화
tags:
  - til
draft: false
---

## 08.22

컨디션이 좋지 않아 오전 스터디는 리뷰만하고 끝냈다.

억지 코드가 나오는 것 같으면 순서를 바꾼다던지 하는 접근을 하면 좋을텐데 막상 문제를 풀 때는 그런게 쉽지 않다. 방법이 있을까...

## 08.23

### 포스트스쿼드1

#### 롬복을 안 쓰는 방법?

롬복 대신 그루비나 코틀린을 사용할 수 없을까 생각해봤다. DTO의 경우 지저분한 코드가 계속 발생한다. 그리고 데이터를 담는 수단이기에 접근제한자 같은 것이 크게 중요하지는 않다고 생각한다. 당연히 내부에 로직도 담기면 좋지 않다. 객체가 아니니까.

개인적으로는 위의 용도라면 그루비가 더 적합할 것 같은데, 그루비는 MapStruct에서 사용할 수 있는지 정보가 많이 안 나와있다. 좀 더 찾아봐야 할 듯 하다.

#### PropertySource

프로퍼티를 어디서 가져오는지 추론이 안 돼어 찾아보니 PropertySource로 가져오는 부분이 있었다. 설명을 좀 찾아보니 공통 설정처럼 사용해야 하는 어노테이션이었던 것 같다. 내일 얘기해보면서 방법을 얘기해봐야겠다.

## 08.24

### was1

오늘도 리팩토링을 이어서 하기로 했다. 그런데 둘 다 쿠키보다는 전체적인 구조에 대한 생각을 많이 했다.

리팩토링을 해도 계속해서 제자리 걸음인 느낌이었는데, 구조 자체를 새롭게 나눠야 했던 것 같다. 노을도 비슷하게 느껴 얘기를 나누고 요구사항7까지 진행 후에 시작해보기로 했다.

### 포스트스쿼드2

회의를 꽤 오래 했다. 스토리보드를 보며 구체적인 API를 논의하게 됐는데, 생각보다 논의할 점이 많았다. 얘기를 해보니 요구사항도 시나리오를 기반으로 생각하기로 해서 세세한 비즈니스로직이 잡히지 않았던 것이 문제였던 것 같다. 따로 정리를 해봐야겠다.

### 알고리즘1

최소 환승 경로 문제를 풀었다. 접근은 다익스트라로 했는데, 시간 초과가 떴다. 내일 다시 봐야겠다.

## 08.25

### 포스트스쿼드3

기본적인 로그인을 거의 완성했다. 고민이었던 부분은 JWT 토큰을 생성하며 발생하는 중복 제거였다.

처음에는 범용성 있는 큰 유틸로 만들려했지만, 이전에 그런 식으로 했다가 미래에 필요 없는 코드가 되어버려 오히려 힘들어지는 경우가 많이 있었기 때문에 지금 필요한 것만 만들어놨다. 만약 더 커져야한다면 다른 곳에서 JWT를 사용하는 코드가 합쳐진 새로운 브랜치로 진행해야 더 잘 만들 수 있을 것이다.

다음으로 refersh 토큰을 어떻게 컨트롤러로 전달할 것인지가 문제였다. 중복을 제거해서 access 토큰은 서비스에서 만들어주지만, refresh 토큰은 리스폰스에 포함되지 않고 바로 쿠키로 들어갈 것이기 때문에 서비스에서 만드는게 마땅치 않아 보였다. 일단은 리스폰스 객체에 담고 json ignore 처리를 해줬다. 그러면서 또 생각을 했던 것은 아예 쿠키를 만들어서 담아버릴까 생각을 했다. 이유는 쿠키의 만료 시간이 토큰만료시간과 일치해야 될 것이라는 생각에서 시작된 것인데, 결론적으로 토큰이 계속 있어도 만료되면 더 이상 사용할 수 없을 것이기 때문에 쿠키에 max age는 넣지 않기로 했다. 그럼에도 json ignore처리보다 더 좋은 방법이 있을지 고민은 해봐야 할 것 같다.

### 알고리즘2

최소 환승 경로를 이어서 풀었다. 오늘은 역을 없애고 노선만을 노드로 만들어서 풀어봤다. 반복은 확실히 줄었을텐데, 메모리 초과가 뜬다. 내일 다시 도전해봐야겠다.

## 08.26

GET method의 body를 거의 다 작성했다. 이제 마무리 부분인데, 쓰다보니 또 캐싱을 잘 몰라 발목이 살짝 잡혔다. 대충 하고 다음에 마저 공부를 해야 글을 빨리빨리 쓸텐데, 고민이다. 일단 공부 목록에 넣어두고 넘어가는 쪽으로 마음이 기운다.

### was2

각자 코드 리뷰를 하고 어떤 식으로 합칠지 얘기를 했다. 둘 다 생각이 비슷해서 크게 리뷰할 요소는 많이 없었던 것 같다.

거기에 둘 다 리팩토링을 하고싶은 마음이 있어서 일단 현재 요구사항은 잠깐 미뤄두고 리팩토링을 먼저 진행하기로 했다.

### 포스트스쿼드4

현재 요구사항을 완료하고 pr을 보냈다. 구현 내용에 비해서 너무 오래 걸린 듯 하다. 내일부터는 세부 로직을 점검해갈듯하다.

깃헙 액션으로 자동 테스트를 걸어둔건 너무 잘 한 것 같다. 오늘도 깜빡하고 그냥 넘어갈뻔한 에러들을 잡아줬다. 다만, secret을 넣지 않아 에러가 났었던 것은 로그만 보고 유추하기 힘들었다. 디버그 모드를 넣기에는 로그가 너무 많아지고, 그렇지 않으면 유추가 힘든 이런 상황이 생긴다. 고민을 해봐야겠다.

제인의 리뷰에서 `@ConfigurationProperties` 를 사용했으면 좋겠다고 남긴 것이 있었는데, 나도 찬찬히 살펴보니 꽤 괜찮은 기능인 것 같다. 스프링 부트에서는 별도의 설정 없이 POJO에도 적용이 가능하다고 한다. 용량이나 날짜 같은 경우는 자동 바인딩도 해준다고 하니 JWT토큰 유효기간을 프로퍼티로 관리해볼 수도 있을 것 같다.

### 알고리즘3

오늘도 안 풀린다. 오늘은 다른 사람의 답안을 보면서 작성해봤는데 기존과 크게 다르지 않다. 어딘가 단축 시키는 부분이 잘못된 것 같은데, 아침에 다시 찾아봐야겠다.

## 08.27

### 알고리즘4

최소 환승 경로를 풀었다. 포인트는 가능한 모든 부분에서 단축을 시켜야 한다는 점이었다.

추가로 제자리에서 제자리로 이동하는 경우도 포함을 해서 생각을 해야 했다... 역시 지문을 잘 읽어야 한다.

### 포스트스쿼드5

오늘은 컨벤션에 대해 추가로 얘기해봤다. 각자 취향이 다르니 이런 부분이 오히려 제일 어려운것 같다. 테스트코드에서 필드 인젝션을 써야할지에 관한 것이 오늘의 가장 큰 논의 포인트였다. 가장 중요한 포인트는 테스트코드도 이상적이게 유지할 것인가, 편의성을 올릴 것인가 였다. 트레이드오프다.

테스트 클래스에서 Autowired를 반드시 사용해야하는 이유. 나중에 읽어보자 <https://github.com/spring-projects/spring-framework/issues/22286#issuecomment-490076419>

### was3

그동안 짐이었던 content-length를 해결했다. 원인은 역시 os마다 다른 줄바꿈 형식! 노을은 깃 글로벌 설정에 crlf를 자동으로 하도록 추가해놨었던 것이 원인이었다. 속이 시원하다 ㅎㅎ

## TODO

- 포스트스쿼드
  - 리프레쉬토큰 사용 방법 검토
    - 레디스
    - ip, userAgnet?
  
- [ ] MockMvc 분석
  - 테스트 기본 인코딩이 이상함.
- [ ] 잭슨 리퀘스트 바디 파싱 분석
  - request시에 생성자 인식 못 함.
  - gradle은 잘 되는데, intellij의 경우 안되는 부분이 있음
- [ ] 스프링 절대경로 서버주소 어떻게 인식하는지(어떻게 nginx 주소를 알 수 있나)?
- [ ] 우아한 객체지향
- [ ] 그런 REST로 괜찮은가
  - [x] 듣기
  - [ ] 정리

- OS
  - [ ] 5.1

- [ ] AWS 강의듣기
  - [ ] IAM 정리하기
- [ ] 서브넷 구분
- [ ] s3 이용
  - [ ] 구현하기
- [ ] 깃헙액션으로 aws 배포
- [ ] classForName 테스트
- [ ] sticky session
  - [x] 스티키 세션과 세션 클러스터링
  - [x] l4 와 l7 스티키 차이?
  - [ ] 정리 해서 글 쓰기
- [ ] clustered index
- [ ] ACID
- [ ] LocalDateTime.of nano sec
- [ ] 트랜잭션
- [ ] 영속성컨텍스트(와 트랜잭션)
- [ ] ATDD
- [ ] 인수테스트 데이터 삽입(초기화)
- [ ] 인텔리j 이클립스 해쉬함수 생성 차이점
- [ ] redis
- [ ] redis repository equals와 어노테이션 확인해보기
- [ ] ISO 7레이어
- [ ] Collections.sort
