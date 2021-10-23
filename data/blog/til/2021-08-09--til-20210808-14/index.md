---
title: TIL-20210808~14
createdDate: "2021-08-09 15:08:17"
updatedDate: "2021-08-09 15:08:17"
author: 정대화
tags:
  - til
draft: false
---

## 08.08

### 알고리즘 스터디

- 압축과 쿼드 압축 문제를 풀었다. 문제당 4~50분 정도 걸렸던 것 같다. 이전에 목표로 했던 난이도 2를 30분에 풀이하는 것이 점점 가까워지고 있는 것 같다. 열심히 하자

### Im-D

이번 주 부터는 토의 형식으로 진행됐다. 이번 주제는 신입 개발자에 관한 것이었다.

신입 개발자를 뽑는 기준에 대해 커밋에 관한 것도 나왔다.

당연한 것이긴 하지만, 커밋을 일정한 단위로 진행하는 것이 중요하다는 것도 주요 내용이었다. 그래서 궁금한 점들을 물어봤다.

- 커밋헤더를 잘 활용하면 분석해서 릴리즈노트 자동화에 활용할 수 있다.
  - 이게 아니라도 통일된 폼으로 작성해두면 어디에든 활용할 수 있다.

- 커밋 잘 묶이면 변경지점을 알 수가 있음(변경이 있을 때)
  - 중요한 부분인 것 같다. 일전에 커밋을 한꺼번에 하는 개발자는 뽑지 않는다 라는 말을 어디선가 들은 적 있는데, 이런 식으로 생각하니 엄청 중요한 것이었다.

이외에도 중요한 부분들을 물어봤는데 꽤 괜찮았다.
  
## 08.09

### was1

지난 주에 봤었던 GET 메소드의 바디 처리를 어떻게 할 것인가에 대해 공부했다. 애매했던 부분인데 공부해봐서 좋았다. 간만에 글도 준비하고 있다. 잘 적어서 자랑해야겠다.

### 포스트스쿼드1

기능을 어느정도 마무리하고, 에러 객체와 에러 어드바이스를 작성했다. 큰 어려움은 없었다.

테스트를 짜다 POST도 살펴보게 됐는데, POST의 결과는 201이 돼야하고, 추가된 리소스가 Location 헤더에 들어있어야 한다고 한다. 이슈로 남겨서 공유했다.

회의는 제이미가 작성해온 시나리오 문서를 위주로 진행됐다. 오늘 논의한 것을 토대로 스토리보드로 발전시킬 것이라한다. 토이 프로젝트인데도 꽤 체계적으로 진행되는 것 같아 신기하다.

백엔드 팀원들에게는 어제 들었던 커밋에 관한 얘기를 전해줬다. 일단 적어도 기능단위의 브랜치와 커밋 단위는 유지할 수 있도록 노력하기로 했다.

회의가 늦게 끝나 새벽에 pr 준비를 하려다 막히는 부분이 생겼다. 에러 객체 pr이 머지돼서 함께 적용했는데, RestAssured로 객체를 매핑하게되면 공통으로 설정했던 snake case가 제대로 적용되지 않는 모습이었다.

한참을 고민해봐도 잘 되지 않아, 자세히 살펴보니 내부에서 사용하는 ObjectMapper가 한 번 래핑되어 있었다. 때문에 내가 생각했던 것 처럼 동작하지 않았다.

일단은 테스트 클래스의 필드로 넣어서 해결했는데, 좋은 방법인지 고민을 해봐야겠다.

## 08.10

### was2

어제 공부한 내용을 토대로 구현을 이어나갔다. 노을의 TDD구현으로 시작했다. 많이 헤메는 것 같아 보였는데 내일은 이슈에 적었던 요구사항을 토대로 다시 얘기해보고 시작해보면 좋을 것 같다.

### 포스트스쿼드2

어제 고민했던 부분들을 공유했다. 제인과 새리의 어려움도 듣고 함께 고민해봤다. 전체적으로 잘 처리된 것 같다.

ObjectMapper 설정에 대해 제인의 얘기도 들어봤는데, 각 클래스에 어노테이션으로 설정해두면 Jackson 설정을 미리 해두는 것이 아니기 때문에 잘 동작한다고 했다.

하지만 세팅을 미리 해두는게 더 좋지 않나 하는 생각에 얘기해봤고, 일단 해당 내용에 따라 구현을 하다가 제인이 WebClient설정하는 것에서 착안해서 아예 미리 설정을 하는 방법을 선택했다. 훨씬 깔끔해져서 팀원들이 좋아하는 듯 하다...아닐 수도 있다. ㅋㅋ

내일은 pr 리뷰를 마무리해야겠다.

### 알고리즘1

오늘은 구현문제 위주로 풀게 됐다. 구현 문제가 확실히 시간이 오래 걸리는 것 같다. 전체적으로 다 훑고나면 마지막에는 구현문제 위주로 연습을 해야할 것 같다.

## 08.11

### was3

GetMessage에 쿼리파라미터 추가하지않고 기존 방식처럼 path를 header에서 직접 출력하도록 변경했다. 문제만 빠르게 해결하고 StatusLineAttributes를 리팩토링 해보기로 했다.

### 포스트스쿼드3

제인과 새리의 pr 리뷰를 마무리했다. 리뷰를 하다보니 항목이 많아졌는데, 부담스럽지 않을까 걱정된다.
아니나 다를까 제인이 지금 하고 있는 프로세스에 대해 의문을 제기했다.

답변을 해주면서 나의 태도나 생각도 정리가 살짝 된 것 같다. 결론적으로는 잘 얘기해서 서로 이해하며 좋게 마무리 됐다. 무작정 참고 가다가 마지막에 터지는 것 보다는 시간이 걸리더라도 계속 얘기하면서 같이 가는게 확실히 좋은 것 같다.

이외에 자잘한 설정과 Mapstruct 적용을 마쳤다.

### 알고리즘 2

오늘은 레벨1 2개 와 레벨 2 하나를 풀며 시작했다. 프로그래머스 프린트 문제는 처음에 정렬로 풀 수 있을 줄 알았는데, 추가적인 작업이 필요했다. 빠르게 푸는 것도 좋지만, 일단 문제 해결이 우선인걸 다시 생각해보자.

간만에 그래프 문제도 풀었는데, 기초적인 그래프 문제는 크게 어려움이 없는 것 같다.

## 08.12

### was4

StatusLineAttributes을 고치다 보니 Request와 Response의 status line이 서로 다르다는 것을 잊고 있었다는 사실을 확인했다. 이에 맞춰서 작업했고 내일 남은 부분을 마무리할 수 있을 것 같다.

패키지 정리도 했는데, 패키지 정리를 하려고 클래스 다이어그램을 보니 많이 지저분한 상태였다. 아마 할리우드 원칙을 위배하고 내부에 있는 클래스를 막 갖다 써서 그런게 아닌가 싶다. 노을에게 공유하고 내일 함께 확인해보기로 했다.

### 포스트스쿼드4

오늘도 자잘한 수정을 마무리 하고 이슈를 조금 줄였다. 제인과 객체 설계에 대해 얘기를 좀 나눴는데, 참 어려운 부분인 것 같다. 특히 내가 설계하지 않은 부분을 훈수두려니 더 어렵다 ㅋㅋ

새리의 파트에서 QueryParam에 Validator를 적용시키는 부분이 잘 동작하지 않았다. BeanValidator는 작동하지 않고, Spring Validator만 작동한다. 이유를 잘 모르겠다. 찾아봐야겠다.

새리의 깃 꼬인 부분도 같이 해결해줬다. 리베이스를 잘못해서 뭔가가 꼬인 느낌이었다.

아무 생각없이 나도 리베이스를 해서 올렸는데, 포스푸쉬를 하면 안됐는데 해버렸다. 포스푸쉬를 하니 작업했던 내역이 다시 처음부터 올라가는 것을 확인했다. 앞으로는 절대 하면 안되겠다.

결론 - 협업에서는 머지가 더 좋다

### 08.13

### was5

헐리웃 원칙을 알아봤다. 헐리웃 원칙은 어제 생각했던 것과는 달리 DI나 IoC와 관련된 것이었다. 이 부분은 잘 지키고 있는 듯 하다. 하지만, 디미터 법칙이 제대로 준수되지 않은 부분들때문에 다이어그램이 복잡해보였던 것 같다. 실제로 오늘 작업을 좀 수행하고 나서 다이어그램을 다시 리버스해보니 꽤 깔끔해진 것을 확인할 수 있었다.

구조는 다 잡았고 이제 테스트를 돌려보며 수정을 하는데, 생각보다 변경해야될 부분이 꽤 많아서 시간이 오래걸렸다. 다음주까지 이어지겠다.

오후에 노을이 getting Stuck에 관해 보내줬는데 나중에 들어봐야겠다.

### 포스트스쿼드5

오늘은 스크럼을 하며 그간 밀렸던 이슈 안건들을 처리했다. 가장 큰 변화는 github의 discussion 기능을 활용하기로 한 부분인데 제인이 엄청 좋아했다. ㅋㅋㅋ

이외에 컨벤션을 잡아가고 기타 논의사항을 처리했다.

새벽에는 github 액션과 자동 머지를 잡아놨다. 자동 머지는 지금 당장 머지할 수 없는 것만 설정이 가능하다고 돼있었는데, 이게 무슨 말인지 이해를 못해 한참 걸렸다. 쉽게 말하면 브랜치 머지 룰이 있어야 가능한 것이었다.

깃헙 액션은 프로퍼티를 따로 저장하지 않아서 계속 오류가 반복적으로 발생했다. 찾느라 시간이 좀 걸렸는데 글로 풀어서 정리해봐야겠다.

## 08.14

### 토스코테

쉬워보이면서 어려웠다. 문제를 많이 풀어본 사람에게는 쉬운 문제들이었을 것 같다. 더군다나 서술형은 부족함을 많이 깨닫게 해줬다. 다음 주 부터는 좀 더 계획적으로 접근해야겠다.

## TODO

- [ ] MockMvc 분석
  - 테스트 기본 인코딩이 이상함.
- [ ] 잭슨 리퀘스트 바디 파싱 분석
  - request시에 생성자 인식 못 함.
  - gradle은 잘 되는데, intellij의 경우 안되는 부분이 있음
- [ ] 스프링 절대경로 서버주소 어떻게 인식하는지(어떻게 nginx 주소를 알 수 있나)?
- [ ] 우아한 객체지향
- [ ] 이런 REST로 괜찮은가
  - [ ] 듣기
  - [ ] 정리

- OS
  - [ ] 4.6

- [ ] AWS 강의듣기
  - [ ] IAM 정리하기
- [ ] 데브독스 넥스트
- [ ] 엘라스틱서치
- [ ] 서브넷 구분
- [ ] s3 이용
  - [ ] 구현하기
- [ ] 깃헙액션으로 aws 배포
- [ ] classForName 테스트
- [ ] sticky session
  - [x] 스티키 세션과 세션 클러스터링
  - [ ] l4 와 l7 스티키 차이?
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

- 블로그
  - [ ] 디렉토리 구조 수정
    - blogs/{yyyy}/{mm}/{postname}
  - generator 수정
    -[ ] 각 분류 별로(til, post 등) 작성할 수 있도록
    -[ ] til에 날짜별 구분과 toc 추가해주도록
  - [ ] 허스키 수정
    - 현재 파이프라인이 제대로 동작하지 않아서 수정 날짜 후처리가 되지 않음