---
title: TIL-20210126
createdDate: "2021-01-27 01:14:23"
updatedDate: "2021-01-27 01:14:23"
author: 정대화
tags:
  - til
draft: false
---

- concurrency api로 샌드박스에서 테스트가 어느정도 진행됐다. 하지만 막히는 부분이 생겼는데, 요청이 들어올 때마다 비동기로 폴링을 하니 순서가 보장되지 않고 요청이 중복 처리되는 일이 발생했다. 데이터를 블록시키거나 아예 요청을 순차적으로 시키거나 해야 할 것 같다.

- 이번 주 인강 진도가 너무 빡세다. 마지막 주라고 다 쑤셔넣은 것 같다. 이번 주는 부지런히 듣지 않으면 아예 따라가지를 못할 것 같아, 동기와 비동기에 대한 개념은 어느정도 잡혔으니 인강을 듣는 방향으로 바꿨다.

- rest 오류 처리와 jsr 303을 살짝 살펴봤다. 사용하는데 큰 문제는 없을 것 같은데, 프런트에서 인터페이스 정의한걸 구현하는게 더 낫지 않을까 하는 생각이 들었다. 너무 수동적인 것 같기도 한데 내일 한 번 얘기해봐야겠다.

## 내일 할 일

- swagger, rest docs 테스트