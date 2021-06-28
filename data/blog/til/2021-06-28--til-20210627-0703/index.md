---
title: TIL-20210627~0703
createdDate: "2021-06-28 16:07:48"
updatedDate: "2021-06-28 16:07:48"
author: 정대화
tags:
  - til
draft: false
---

## TODO

- [ ] MockMvc 분석
  - 테스트 기본 인코딩이 이상함.
- [ ] 잭슨 리퀘스트 바디 파싱 분석
  - request시에 생성자 인식 못 함.
- [ ] 스프링 절대경로 서버주소 어떻게 인식하는지(어떻게 nginx 주소를 알 수 있나)?
- [ ] 우아한 객체지향
- [ ] 이런 REST로 괜찮은가

- 알고리즘
  - [ ] [후위표기식](https://www.acmicpc.net/problem/1918)
  - [ ] [스타트택시](https://www.acmicpc.net/problem/19238)
  - [ ] [마법사 상어와 파이어볼](https://www.acmicpc.net/problem/20056)
  - [ ] [행렬](https://www.acmicpc.net/problem/1080)
  - [x] [행렬 테두리 회전하기](https://programmers.co.kr/learn/courses/30/lessons/77485)
  - [x] [키패드 누르기](https://programmers.co.kr/learn/courses/30/lessons/67256)
  - [x] [땅따먹기](https://programmers.co.kr/learn/courses/30/lessons/12913)
  - [ ] [삼각달팽이](https://programmers.co.kr/learn/courses/30/lessons/68645)
  - [ ] [단어수학](https://www.acmicpc.net/problem/1339)
  - [ ] [다단계칫솔판매](https://programmers.co.kr/learn/courses/30/lessons/77486)

- OS
  - [ ] 4.5 + 문서 정리
  - [ ] 4.6

- [ ] AWS 강의듣기
  - [ ] IAM 정리하기
- [ ] 데브독스 넥스트(7월 첫주)
- [ ] 엘라스틱서치
- [ ] 서브넷 구분
- [ ] s3 이용
  - [ ] 구현하기
- [ ] 깃헙액션으로 aws 배포
- [ ] classForName 테스트

- 블로그
  - [ ] 디렉토리 구조 수정
    - blogs/{yyyy}/{mm}/{postname}
  - [ ] generator 수정
    - 각 분류 별로(til, post 등) 작성할 수 있도록
  - [ ] 허스키 수정
    - 현재 파이프라인이 제대로 동작하지 않아서 수정 날짜 후처리가 되지 않음

## 06.27

- 키패드 누르기가 통과를 못 해서 리뷰를 해보니, double때문에 판단이 제대로 되지 않는 것 같다는 생각이 들었다. 두 점 사이의 거리를 계산해야되는데, 슬빈님 코드를 보고 다시 생각해보니 정확한 거리를 측정하는 것이 아니기 때문에 거리 공식까지 필요없고 x축 거리와 y축 거리를 합친 만큼을 비교하면 되는 것이었다. 문제를 다시 보니 문제에도 힌트가 있었는데, 아쉽다.

  땅따먹기는 전형적인 DP문제 같아 내가 골랐다. 다른 분들 눈에는 그렇게 보이지 않았나 보다...  삼각달팽이는 풀이를 들어봤는데, 구현을 잘 하면 된다. 슬빈님은 아예 삼각형을 하나의 배열에 표현을 했는데 잘 생각해보고 풀어야겠다.

## 06.28

느긋하게 쉬엄쉬엄 보냈다. 주말에 하지 않았던 공룡책 정리를 했는데, 암묵적 스레딩이라는 파트다. 내용이 이해하기 어렵진 않은데, 양이 엄청 많다. 중요한 부분인가보다. 우선 나온 부분은 스레드풀인데 잘 알고 있는 내용이라 크게 어렵진 않았다. 이전 파트에 이어서 자바의 스레드를 활용하는 방법도 나오는데, 이는 추후에 읽으며 정리해봐야겠다.
