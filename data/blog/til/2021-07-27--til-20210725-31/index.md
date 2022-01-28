---
title: TIL-20210725~31
createdDate: "2021-07-27 03:31:01"
updatedDate: "2021-07-27 03:31:01"
author: 정대화
tags:
  - til
draft: true
---

## 07.25

휴식하며 알고리즘 풀이를 했다. 몇 가지 모르던 부분을 알게 됐다. 코테 합불 여부를 떠나서 주력 언어로 알고리즘을 풀 수 있다면 푸는게 좋은 것 같긴 하다.

예전에 계수 정렬과 기수 정렬을 하며 stable한 정렬에 대해 본 적이 있었는데, 관련한 문제가 나왔다. 내가 직접 정렬 순서를 맞춰줘도 엇나는 부분이 생기는 것 같았다. Arrays.sort는 퀵 소트를 사용하지만 Collections.sort는 머지소트를 사용한다고 한다. 인덱스 순서를 맞춰야하기 때문인 것 같다. 정수와 같이 stable이 필요 없으면 퀵 소트를 사용한다고 한다.

이외에도 Comparator를 사용할 때 메소드체이닝을 사용하면 훨씬 깔끔하게 구현이 된다. 찾아보기 귀찮아서 보지 않고 있었는데, 진작에 볼걸 그랬다.

## 07.26

### was1

지난 주에 이어서 쿠키와 세션에 대해 살펴봤다. 오늘도 헷갈렸던 부분은 세션의 정의에 관한 것인데, 세션은 로그인~로그아웃과 같은 단위 혹은 기기간의 정보교환을 뜻한다. 예를 들어, 깃헙에 로그인 하면 로그인 세션이 시작된다. 로그인 하면 내 정보를 볼 수 있다. 즉 서버와 내 컴퓨터 간에 정보를 주고받는다. 그리고 로그인하면 세션이 종료된다.

쿠키에도 종류가 있다. 세션 쿠키와 영속(permenent) 쿠키이다. 세션 쿠키는 만료날짜를 적지 않으면 생성되는데, 브라우저가 닫히면(브라우저 세션 종료) 사라진다. 하지만 대부분의 브라우저에서 브라우저 세션(브라우저가 열려있는 동안의 세션)을 복구하는 기능을 가지고 있기 때문에 쿠키를 따로 지워주거나 하기 전 까지는 유지가 된다. 영속 쿠키는 만료일을 지정해줄 경우 생성되는 쿠키인데, 만료일 전 까지는 브라우저를 아무리 종료해도 사라지지 않는다.

이외에도 stick session과 로드밸런싱을 살짝 살펴봤다. stick session은 최초 접속 이후 was에 딱 붙어있는 것이다. 이는 l4스위치가 커넥션을 관리해주기 때문인데, 클라이언트와 서버간의 커넥션을 계속해서 유지시켜주는 것이라 한다. l7은 http 패킷을 분석해서 로드밸런싱이 가능하다고 한다. sticky session도 http의 쿠키 기반으로 할 수 있는 등의 기능을 제공한다. 그렇다고 7레이어의 기능만 한다고 오해하면 안 된다.

l4에서 쿠키나 db를 이용해 stick session을 구현할 수 있다는데, 잘 모르겠다. 컨디션 난조로 일찍 끝냈는데, 내일 마저 찾아봐야겠다.

### 포스트스쿼드1

- 쿼리 dsl을 훑었다. JPQL을 래핑한 프레임워크인데, JPQL을 알아야 정확히 이해할 수 있을 것 같다. 더 공부해보기로 했다.

- 요구사항 정리를 이어서 했다. ATDD를 하기로 했으니 인수테스트에 조금 더 도움이 되도록 유스케이스 폼으로 작성했다. 엄격하게 작성하지는 않았고 테스트 메소드 명과 api를 정의한다는 생각으로 진행했다. 이대로 내일 피드백을 받을텐데 오늘 얘기하며 빠진 부분들이 많이 생각나서 처럼 숨어있는 요구사항들을 잘 찾아냈으면 좋겠다.

## 07.27

### 포스트스쿼드2

유즈케이스 피드백

용어정리

git-cz

### 알고리즘1

방금그곡

- 날짜 계산

## 07.28

### 포스트스쿼드3

유스케이스

api 문서

### 알고리즘2

## 07.29

### was2

- 페어프로그래밍

### 포스트스쿼드4

- api
  - 버저닝 전략
    - uri에 표현
    - 쿼리 스트링으로 표현
    - 헤더에 표현
      - 커스텀 헤더
        - 컨텐츠 네고에이션이 불가
        - 컨텐츠 네고에이션 : 가장 적합한 데이터를 찾아오는 기술
          - 예를 들어, 한글이 지원 안 되면 다음 우선순위를 영어로 적용한다.
          - 버전 측면에서 생각해보면 버전3가 안 되면 버전2를 달라고 할 수도 있겠다.
          - 큰 의미가 없어보이긴 한다.
      - accept type

- 환경설정

### 알고리즘3

## 07.30

### was3

- reflog, rebase

### 포스트스쿼드5

- DTO 작성

## 07.31

### 그런 REST로 괜찮은가

- HTTP와 REST는 하이퍼링크를 기반으로 설계된 프로토콜

- HTML에서 REST는 잘 지켜지고 있다.

- 우리가 REST API라고 부르는 것은 REST를 잘 만족하지 못 하고 있다.
  - 자기 표현
    - 결과만 보고 필드와 값이 어떤 의미고 어떻게 사용되는지 알 수 있어야함 -> 각 컬럼이 어떤건지 알 수 있어야 한다 -> HTML은 시각적으로 표현되며, 태그에 정보가 나와있음
    - accepttype 만들기(등록도 해야된다)
    - api문서 만들어서 참조하기

  - HATEOAS
    - 가장 어렵고 애매한 부분
    - 링크 태그를 추가해주기
      - 표현의 한계가 있다.
    - 바디에 넣어주기
      - 여러가지 스팩이 있다(JSON API, HAL 등)
      - 개발 전반적으로 영향을 미친다(침투적이라고 표현함)

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
  - [ ] 4.6
  - [ ] 4.7

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