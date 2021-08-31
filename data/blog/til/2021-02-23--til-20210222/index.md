---
title: TIL-20210222
createdDate: "2021-02-23 03:13:31"
updatedDate: "2021-02-23 03:13:31"
author: 정대화
tags:
  - til
draft: false
---

- 배열이 0부터인 이유는 C에서 부터 내려온 전통이기 때문이다. 더 자세하게 얘기하면, C의 배열은 주소 연산을 하여 위치를 찾는 것의 syntatic sugar로 인덱스 접근(a[1]과 같은)을 제공하기 때문에 매우 원시적이고, 따라서 0부터 시작하지 않으면 메모리 낭비가 발생하게 된다.

- 그룹 리뷰를 위해 간단한 룰을 정했다. 저녁에 물어보니 노을의 조도 비슷한 과정을 거친 것 같았다.

- 미션5를 완성했다. 오늘은 flatmap과 groupby를 활용했다. 평소에는 잘 사용하기 힘든 메소드들인데, 잘 활용하니 훨씬 쉬워졌다. 물론 잘 활용한게 맞는건지는 아직 모르겠다😂 내일은 여유가 되면 어떤 식으로 동작하는지 살펴봐야겠다.

- 프런트는 개발을 시작 한 것 같다. 일단 이번 주는 미션에 최대한 집중하고 남는 시간에 스웨거 세팅을 하도록 하자.

- 노을이 물어봐줘서 간만에 깊은 복사를 다시 보게 되었다. Clonable은 setter가 없을 시 필드까지 깊은 복사를 하려면 너무 까다로워 진다. 규약이 제대로 되어있지 않고, 자율성에 맡기는 느낌이 강하기 때문이다. 또한 클론 메소드의 구현도 문법적으로 강제하지 않아 실수 가능성도 높다. 이를 막기위한 추가적인 보일러 플레이트도 따라온다. 때문에 생성자나 팩토리 메소드를 clone의 대용으로 사용하는데, 이는 컬렉션을 복사해야 할 때 더 큰 문제다. 일일이 복사 해줘야 하기 때문에 복잡도가 많이 올라간다. 이런 불편함 때문에 매퍼 라이브러리도 있지만 계층 구조가 복잡해지면 여전히 힘들어진다. 비슷한 상황이 발생하면 항상 하게 되는 고민인것 같다.

## 내일 할 일

- 미션5 제출

- 미션6 시작