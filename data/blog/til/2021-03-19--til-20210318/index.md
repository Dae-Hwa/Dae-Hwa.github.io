---
title: TIL-20210318
createdDate: "2021-03-19 01:07:49"
updatedDate: "2021-03-19 01:07:49"
author: 정대화
tags:
  - til
draft: false
---

- 오전 스크럼에 분위기가 너무 가라앉은것 같아 명상을 제안해봤는데 다 같이 하게 됐다. 농담 반 진담 반으로 했는데 어떻게 좋게 받아들여져서 하게 됐다. ㅋㅋㅋ. 마르코에게 리드를 부탁해서 다 같이 하게 됐는데, 마르코가 특별히 뭘 한건 없고 영상을 하나 틀어줬다. 배경 음악 같은거 없이 말로 가이드만 해주는데 생각보다 집중이 잘 됐다. 말로만 하는 것도 나쁘지 않은 것 같다. 신기한게 내가 딴 생각을 할때 쯤 딴 생각이 나면 어떻게 어떻게 해보자 라고 가이드를 해주는 것이었다. 나중에 들어보니 난이도가 따로 있다고 하는데 제일 낮은 난이도라 보통 이정도에 집중이 다 흐트러지는건가 싶었다. 신기한 경험이었다.

- 오늘 수업은 세션과 쿠키에 관한 것이었다. 약간 틀리지만 직관적인 답은 쿠키는 브라우저에 세션은 서버에 라는 것이다. 정확히 말하면 세션도 쿠키를 사용하기 때문에 틀린 말이라는 것 같다.

  세션이 공유되어야 하는 상황이 잘 이해 되지 않았는데, was를 여러대 쓰고 로드밸런싱이 무작위로 일어난다면 세션이 공유되어야 한다.


- 리뷰를 처리하는데 앞서서 오류 수정본을 배포하는것을 까먹어 리뷰어분이 제대로 리뷰를 해주지 못하셨다. 부끄럽긴한데, 이런 일이 계속 발생할 것 같아 이 참에 자동 배포를 해볼까 싶었다. 깃헙 액션을 사용했는데 플러그인과 사용법이 너무 잘 만들어져있어서 원리나 작동방법 이해 하나 없이 자동 배포에 성공했다. 여유가 생기면 다음 목표는 이 쪽을 이해해보는 것으로 잡아봐야겠다. 

- 리뷰 중에 JPARepository와 CRUDRepository의 차이를 아느냐는 질문이 있었는데, 단순히 추상화 단계가 다르다고만 생각했다. 그런데 이와 비슷한 리뷰가 있었던 것 같아 찾아보니 작동 방식도 다르다고 하는 것 같았다. 내가 생각할때는 SimpleRepository에서 모두 처리가 될 것 같은데 아닌가보다. 프록시와 관련이 있을 것 같은데 내일 한 번 봐야겠다. 그리고 다른 타입을 어떻게 오버라이딩 하는지도 궁금해졌다.
