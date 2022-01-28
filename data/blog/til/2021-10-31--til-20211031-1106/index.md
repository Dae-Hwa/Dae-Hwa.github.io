---
title: TIL-20211031~1106
createdDate: "2021-10-31 23:20:36"
updatedDate: "2021-10-31 23:20:36"
author: 정대화
tags:
  - til
draft: false
---

## 10.31

### 포스트스쿼드1

오늘 작업은 다사다난했던 편인 것 같다. 우선 operation을 적용시켰다. snippets 모음을 한 번에 불러와주는 예약어다. 문서가 훨씬 깔끔해졌다. 문서에 불필요한 정보의 중복이 조금 생기긴하지만, 크게 문제없는 수준이고 문서 생성의 편의성을 생각해보면 훨씬 낫다.

snippets를 읽어오지 못하는 근본적인 이유를 찾았다. asciidoctor 문법 중 operation이 제대로 동작하지 않아서 알게됐는데, 의존성추가를 빼먹고 있었다. 그래서 스니펫 생성은 되지만, html로 변환하는 과정이 제대로 동작하지 않았던 것이다. 의존성 추가해주고 정리했다.

operation이 두 번째 빌드부터 제대로 생성되지 않는 알 수 없는 오류가 계속 발생했는데, 버전을 올려주니 해결됐다. 원인미상이다. 1.5.8로 보고 따라했던 것 같은데 공식문서에 그레이들은 1.5.9.2 버전으로 가이드해놨다. 메이븐은 여전히 1.5.8인데, 뭔가 문제가 있었던 것일지도 모르겠다. 원인을 찾을 수 없어서 계속 헤메느라 생각했던 것 만큼 진도를 많이 빼지는 못했다. 내일 저녁에 집중해서 바짝 해야겠다. 폼은 거의 만들어졌으니 금방 할 수 있을 것 같다.

## 11.01

### 알고리즘1

처음보는 유형이 있어 난이도가 쉬운데도 조금 오래걸렸다. 다중집합을 이용해야 하는 문제였는데, 단순 Set을 이용했기때문이었다. 문제에 맞게 Map을 이용해 풀이했다.

### was1

rfc문서를 정리했다. 찬찬히 읽으며 정리해보니 이해가 안 가던 부분도 이해가 됐다.

스머글링은 밀수품, 밀반입 같은 의미인데, 스머글링 공격은 메세지에 다른 정보를 끼워서 다음 리퀘스트에 영향을 주는 공격이다. 프런트 서버와 백엔드 서버의 처리가 다르면 발생할 수 있다고 한다. 어렵지만 어렴풋이 이해된다.

`%x21` 처럼 표시된 문자가 있었는데 아스키코드의 hex값이었다. 알고나니 이해가 꽤 됐다.

그리고 SHOULD NOT, MUST, MAY 등의 키워드도 중요한 것이었는데, 모르면 문맥파악하기가 쉽지 않다. 그런데 그동안 몰라서 많이 헤멨던 것 같다. 그래서 다음주에는 해당 문서를 우선적으로 읽어오기로 했다.

### 포스트스쿼드2

만들어져있는 인수테스트는 모두 rest docs에 추가시켰다. 이제 없는 부분들을 조금씩 헤쳐나가야 한다.

오늘 삽질했던 부분은 path parameter를 제대로 인식 못 하는 문제였는데, base path에 path를 달아놓으면 인식을 제대로 못 한다. 구조 개선이 필요해보인다.

내일은 그동안 했던 부분들 정리해서 팀원들에게 공유할 수 있도록 포스팅을 해봐야겠다.

## 11.02

### 알고리즘2

마방진 풀이가 막혔다. 완전한 줄을 찾은 뒤 빈칸을 추론해나가려고 했는데, 아래와 같은 케이스에서는 완전한 줄이 없는 경우가 생긴다.

```text
0 12 12
16 0 4
8 8 0
```

발생할 수 있는 케이스는 아래와 같다

```text
0 12 12
0 16 8

12 0 8
16 0 4

12 4 0
8 8 0

0 0 0
12 0 8
```

모두 저장시켜놓고 다 같아지는 수를 이분탐색으로 맞춰나가는 식으로 다시 해봐야겠다. 쌍으로 묶어서 해야할 것 같다.

0이 중복으로 발생하는 경우도 고려해야한다. 얼핏 봤을때는 쉬워보였는데 ㅋㅋ 어렵다.

### rest docs 블로그 포스팅

기본 설정편을 작성했다. 시간이 꽤 많이 걸렸다.

개선 과정도 작성을 해보고 싶은데 일단 팀원들에게 설명을 하는게 일차 목표이니 현재 적용된 나머지 기능들을 간단히 정리하는 식으로 다음 글을 써야겠다. 개요까지 써놨다.

추가로 살펴본 기능은 자동설정, validation, 마크다운 문법 설정인데, 자동설정과 마크다운 문법은 아직 필요한지 모르겠다. 자동설정은 커스텀 설정을 넣으려면 어차피 다른 작업이 필요하다. 테스트 베이스를 가볍게 만드는 것이 목표라면 의미가 있을 수도 있겠다. 마크다운은 복잡한 문서 작성이 없어서 모르겠다.

validation은 커스텀 템플릿을 만들어야 제대로 적용이 되는 것 같다. 내일은 간단하게 문서작성해보고 템플릿 만드는걸 테스트해봐야겠다.

## 11.03

### 포스트스쿼드3

#### rest docs 템플릿 수정

템플릿을 오버라이딩할 수 있다. 생각보다 어렵진 않았다. 포메팅을 해야 하는 부분에서 막히는 부분들이 생겼지만, 큰 문제는 아니었다.

아예 새로운 스니펫을 만들 수도 있는데, 내부 로직을 좀 이해해야 커스텀하기 쉬울 것 같아 일단 넘어갔다. 처음엔 제약 사항을 따로 뽑으면 좋지 않을까 하는 생각을 했는데, 지금도 나쁘지 않은 것 같다. 예제는 간단한 부분으로 만들어봐야겠다.

#### request argument resolver1

예전에 만들어놨던 부분인데, 놓친 점이 있었다. Bean Validator가 제대로 동작하지 않는다. Validator어노테이션은 작동한다. 이유는 AOP처럼 작동하기 때문이다. 어떻게 동작하는지 확실히 보긴 해야 할 것 같다.

아무튼 그렇다면 코드레벨에서 바꿔주는 부분이 있을 것이라 생각했다. 그래서 Json은 어떻게 처리하는지 살펴보니 예전에 잭슨 커스텀할때 살펴봤던 메세지 컨버터로 바꿔준 뒤에 벨리데이션을 진행한다. 로직을 뽑아와야 할 것 같은데 단순히 가져오려니까 빈 생성 단계에서 오류가 생긴다. 로직을 살펴보고 직접 만져봐야 할 것 같다.

## 11.05

어제 오늘 컨디션이 좋지 않아 쉬었다. 대책없이 쉰 것 같아 조금 속상했는데 어차피 주말에도 공부를 해야하니 당겨서 쉬었다 생각하기로 했다.

저녁에 쿠퍼가 게더에 들어와서 이것 저것 얘기를 해봤는데 나와 비슷한 고민을 하고 있는 것 같았다. 다음 주 부터 시간표를 짜고 모여서 공부하기로 했다. 꽤 괜찮으면 사람을 모아봐야겠다.

### 포스트스쿼드4

#### rest docs pr

간만에 백엔드끼리 회고를 했다. 진행상황을 얘기해주고 rest docs를 대충 설명했는데, 막상 설명하려하니 뭔가 정리되지 않은 느낌이었다. 예전에 얘기했던 부분인것 같기도 하고 어떤건 이미 알고있을 것 같기도 하고... 좀 더 정리해서 말을 했어야 했던 것 같다. 대신 pr 메세지를 자세하게 남겨뒀는데, 도움이 됐으면 좋겠다.

#### request argument resolver 2

우선 RequestResponseBodyProcessor를 직접 상속받았다. 그리고 내부에 있는 메세지와 관련된 리졸버는 의존성 주입으로 가져오도록 했다.

내부적으로 메세지 컨버터를 이용하여 메세지 바디를 변환시키는데, 원하는 것은 쿼리 파라미터이기 때문에 제대로 동작하지 않았다. 따라서 해당 부분만 직접 바꿔주고 나머지는 RequestResponseBodyProcessor 내부의 valid 어노테이션 처리 로직을 그대로 사용했다.

지금 생각하니 상위 객체를 써도 무방할 것 같은데, 다시 살펴봐야겠다. 그리고 잭슨 컨버터 이외에 스트링 컨버터가 있었던 것 같은데, 이 부분도 다시 살펴봐야겠다.