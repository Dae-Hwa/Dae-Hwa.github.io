---
title: TIL-20211214~15
createdDate: "2021-12-15 01:11:45"
updatedDate: "2021-12-15 01:11:45"
author: 정대화
tags:
  - til
draft: false
---

## 12.14

### 웹서버1

지난 주 PR을 꼼꼼하게 날리지 않아서 이름 변경을 다시 했다. 이런 부분은 리뷰로 잡아내기 힘든 것 같은데 생각을 좀 해봐야겠다.

recursive equals를 하면 인스턴스가 다른 것도 잡아낸다. 설명이 애매한데, 익명클래스로 생성하면 인스턴스가 해당 클래스의 인스턴스가 아니라 생성한 클래스의 인스턴스가 된다. 테스트 실패하는거 고쳐주다 알게됐는데 신기했다.

끝나고 얘기를 하면서 start line에 대한 얘기를 했는데, 프로토콜이 이렇게 정해져서 인덱스로 파악하는건 어쩔 수 없는 것 같다. 단, 실패 시 에러를 제대로 내려줘야겠다.

### 객체지향과 프로토타입

읽으려고 했다가 미뤄뒀던 포스팅을 봤다. 객체지향과 프로토타입에 관한 글인데, 흥미로웠다.

클래스 기반의 객체지향을 다루면 자연스럽게 공통적인 속성을 묶어서 분류를 하게 된다. 클래스라는 용어의 어원부터가 분류(classification)이기 때문이다.

이러면 가장 공통적인 부분들에 점점 살을 입혀 나가는 식으로 구조가 잡히게 된다.

반면 프로토타입은 가장 공통적인 것을 가운데 두고 바깥으로 갈 수록 점점 달라지는 방식이다. 아무리 달라도 내가 비슷하다고 생각했으면 비슷한거다.

이게 가능한 이유는 동적으로 속성을 정의할 수 있기 때문이다. 이유는 클래스 상속처럼 설계도를 가져오는게 아니라 위임을 이용하여 인스턴스 자체를 상속받는다. 따라서 컨텍스트에 따라 인스턴스의 프로퍼티가 달라질 수 있다.

개인적으로 생산성은 좋다고 느껴지는데 소스를 직접 작성한 사람이 아니라면 일관성이 떨어져 보기 힘들지 않을까 하는 생각이 들었다. js를 좋아하는 사람들은 프로토타입 컨셉을 잃으면 안된다고 한다고 했다지만, class라는 신태틱 슈거가 생긴 이유도 그런게 아니었을까 한다. let, const, 화살표함수의 바인딩 등도 비슷한 이유라 생각한다.

이 글을 보고 영감을 받아 철학적 풀이를 한 글도 있었는데 그건 너무 어려웠다. 좀 더 통찰이 생기면 다시 봐야겠다.

### 포스트스쿼드1

뭐 뭔저 할까 고민하다가 빨간색으로 떠있는 스니펫 제네레이터의 리팩토링 샘플이 거슬려 이 것 먼저 처리하기로 했다.

오늘은 좀 다른 접근을 하게 됐는데, 하나의 유틸을 만들고 static이 아니라 상태를 가지도록 했다. 그리고 책임을 나눠보니 자연스럽게 상속대신 위임을 이용한 클래스처럼 바뀌었다.

아예 사용할 타입을 대체할 수 있게 됐다. 지난 주에 유틸 클래스에 관한 고민을 했는데 깔끔하게 해결됐다.

## 12.15

### 웹서버2

StartLine을 헤더에서 분리하는 작업을 했다. 하나를 고치는데 작업할 부분이 많다고 느껴졌다. GetMessage와 PostMessage가 문제인데 구조에 대해서 다시 생각해봐야겠다.

### 포스트스쿼드2

디자인 정리에 4주정도 소요될 것 같다고 한다. 프런트는 코드 정리가 필요한 상황이라 한다. 우리도 지금 하는 리팩토링 작업들을 이어가면 될 것 같다.