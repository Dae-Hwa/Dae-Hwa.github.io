---
title: TIL-20210801~07
createdDate: "2021-08-07 17:14:45"
updatedDate: "2021-08-07 17:14:45"
author: 정대화
tags:
  - til
draft: false
---

## 08.04

### was1

페어프로그래밍을 이어서 했다. 기존에 했던 구현을 쭉 이어서 하는 것이라 크게 무리는 없었다.

테스트를 진행하다 소켓의 IP가 겹쳐 발생하는 BindException의 원인을 알게 됐다. 10000번대 이후에는 잘 사용하지 않는다고 알고 있었는데, 그래서 거의 끝에 가까운 50000~60000 사이의 대역을 사용하고 있었다. 그런데, 나와 비슷한 이유로 해당 대역을 여러 프로그램에서 사용하고 있었다. 대표적으로 줌, 크롬, 카카오톡이 사용하고 있었는데, 아마 각각의 소켓을 열어야 하는 경우 해당 대역을 사용하는게 제일 깔끔하니 이렇게 구현을 한듯 하다.

### 포스트스쿼드1

롬복을 이용할때, 상속을 받으면 빌더를 임의로 만들어 사용하거나, SuperBuilder 어노테이션을 이용하여 처리할 수 있다. 편의성과 자유성의 대결인데 결정이 쉽지 않아보인다.

이외에 RestAssured를 잠시 살펴보고, 회의를 진행했다. 와이어프레임을 보며 프로세스에 대한 논의와 API에 대한 논의를 마무리했다. API의 주요 부분들은 프런트 작업이 시작돼야 알 수 있지만, 그 외에 중요한 프로세스들은 어느정도 확정 됐다.

### 알고리즘1

괄호 뒤집기 문제를 풀었다. 조금 어수선하고 집중이 잘 되지 않아 한 문제만 하고 접었다.

## 08.05

### was2

로그인 기능을 마무리했다. 이후 어제 찾았던 소켓의 문제점을 해결했다. 이외에 소켓을 닫아주지 않으면, 프로그램이 종료되기 전까지 계속해서 포트가 활성화돼있는 모습을 확인했는데, close는 습관적으로 꼭 시켜줘야할 것 같다.

### 포스트스쿼드2

테스트를 어떻게 진행할건지 논의했다. 어제 봤던 부분들과 각자 해온 부분을 얘기해봤다. 기존에 내가 하던것과 거의 유사하게 가기로 했는데, 내일 구현한뒤 맞춰보며 다시 얘기해보기로 했다.

### 알고리즘2

parallelStream과 StringBuilder를 이용한 스트링 변환을 테스트해봤다. 우선 그냥 스트림은 제일 느렸다. 그 외에는 케이스가 커질수록 parallelStream이 빨랐다. 반면 케이스가 적으면 StringBuilder가 훨씬 빨랐다. 즉, 속도의 편차는 parallelStream이 훨씬 좋다. 실 구현을 하게 되면 어떻게 해야될까? 최악의 경우를 피하는 것 vs 최악의 상황은 거의 없을 것이라 가정하는 것의 차이인데, 애플의 m1이 후자같은 선택을 하여 성능을 비약적으로 올린 것으로 알고 있다. 물론 특수한 상황이긴 하지만, 생각해볼 거리가 많은 포인트 같다.

## 08.06

### was3

DB가 매 테스트마다 초기화되지 않아 이전 데이터를 가지고 테스트가 진행되는 문제를 해결했다. 해결하고 나니 GET Mapping 시 쿼리 스트링 분리가 제대로 되지 않아 발생하는 문제가 있었다. 이슈를 남겨놓고 다음주에 다시 해결해보기로 했다.

### 포스트스쿼드3

테스트하며 이상했던 부분들을 처리했다. 로그인 로직에 관한 부분도 얘기가 됐다. 많이 헷갈리는 부분이다보니 얘기하는데 시간이 좀 걸렸다. 에러 형식이나 브랜치 규칙도 어느정도 정리하고 문서화했다. 체계적으로 잘 관리해야 될텐데... 그래도 팀원들이 적극적이여서 다행이다.

이외에 DTO Mapper 라이브러리도 사용해보기로 했다. 적용이 마냥 쉽지 않았던 것으로 기억하는데 다시 한 번 테스트를 잘 해봐야겠다.

### 알고리즘3

약수 구하기 알고리즘을 봤다. 수학적 접근이 확실이 조금 어려운 것 같다. 어려운 문제는 일반적인 약수 구하기 방법으로는 풀리지 않았는데 일단은 여기서 멈추려고 한다. 이해가 잘 되지 않아서 나중에 다시 봐야 할 것 같다.

## TODO

- [ ] MockMvc 분석
  - 테스트 기본 인코딩이 이상함.
- [ ] 잭슨 리퀘스트 바디 파싱 분석
  - request시에 생성자 인식 못 함.
- [ ] 스프링 절대경로 서버주소 어떻게 인식하는지(어떻게 nginx 주소를 알 수 있나)?
- [ ] 우아한 객체지향
- [ ] 이런 REST로 괜찮은가
  - [ ] 듣기
  - [ ] 정리

- OS
  - [x] 4.6

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
