---
title: TIL-20210105
createdDate: "2021-01-05"
updatedDate: "2021-01-05"
author: 정대화
tags:
  - til
draft: false
---

- 릴레이가 논리 회로의 기본 원리라니 낫 놓고 기억자를 모르고 있었다... 다음에 네비게이션 설치할 때 큰 도움이 될 것 같다.

- 논리 회로를 직접 그려봤는데 어제 구현한걸 바탕으로 그려보니 전보다 훨씬 이해가 잘 됐다.

- IF(Instruction Fetch)와 프로세스 실행 과정을 다시 한 번 생각해보게 됐는데 누가 좋은 비유를 해줬다. 책상위에 책을 펼치는 것 같다는 것이었는데 간단하게 설명하기 너무 좋은 것 같다. 정리해보자면 아래와 같다.

  1. 책장(디스크)에서 책(실행파일)을 꺼내서 책상(메모리)에 올려 놓는다.
  2. 현재 눈(포인터)으로 보고 있는 부분을 우리는 읽을 것이다.
  3. 풀이를 위해 연습장(레지스터)에 식을 옮겨 적는다.
  4. 연습장에 정리한 문제를 머리(CPU)로 계산해서 결과를 연습장에 적는다.
  5. 연습장에 푼 결과를 책에 옮겨 적는다.

- 리틀 엔디언과 빅 엔디언을 다시 한 번 살펴봤다. 항상 이름때문에 헷갈리는데 빅과 리틀만 생각하는게 편한 듯 하다. 빅 엔디언은 사용자가 보기 쉽고, 리틀 엔디언은 기계가 읽기 쉽다. 이번에 직접 구현해보니 구현도 훨씬 편리했다.

- 어제 하기로 했던 그레들 설정을 익혔다. 팀원을 도와주며 메이븐 프로젝트도 덤으로 익혔다.

- cs10 step1을 마무리 지었다. 코드 리뷰를 하며 팀원들에게 junit도 설명해주게 됐는데 그 내용을 바탕으로 포스팅도 해놨다.

- cs지식을 활용할 일은 천에 하나 혹은 만에 하나 정도일 가능성이 높지만, 그 문제를 해결할 수 있는것이 좋은 개발자의 기준 중 하나라고한다. 너무 당연한 말이지만 남이 물어볼때 답하기 용으로 너무 좋은 대답인 것 같다.

## 아쉬운 일

- 2의 보수로 음수 변환을 시켜주는 동작을 작성해보려했는데 비트가 고정되어 있지 않으니 너무 헷갈려 결국 실패했다. 조만간 다시 한 번 봐야겠다.

## 내일 할 일

- 블로그 css를 살펴봐야할 것 같다. 가독성이 좋지 않아서인데, 내일 완성은 못 시킬것 같다. 시간을 조금 투자해보고 정 안되면 프로젝트랑 TODO에 기록해둬야 할 것 같다.

- 내일 알고리즘을 풀기로 한 날인데 컨디션이 괜찮으면 밀린 스터디 알고리즘도 마저 풀어봐야겠다.
