---
title: 2020 Dev-Docs 회고
createdDate: "2021-01-19"
updatedDate: "2021-01-19"
author: 정대화
tags:
  - 회고
  - im-d
draft: false
---

지난해는 대내외적으로 다사다난했던 한 해였다. Im-d 내부적으로도 변화가 많았다.

새로운 구성원이 대거 유입됐다. 아무래도 개인적인 준비나 역량이 되지 않았다고 생각하였는데 어느 정도 리딩을 해야 하는 입장이 되어 부담이 컸다. 물론 [**BKJang**](https://github.com/BKJang)과 [**SeonHyungJo**](https://github.com/SeonHyungJo)가 책임감 있게 잘 이끌어주어 많이 묻어간 느낌이다. 고맙기도 하고 대단하기도 하다. 존경한다.

하지만 그런데도 코로나가 생각보다 커지기 시작해 원활한 활동이 힘들어졌던 시기였다. 2분기에 접어들면서 좀 안정화 국면을 보였지만 결국 혼란해졌다. 물론 그 덕에 온라인 진행이 어느 정도 자리를 잡아 쉬는 횟수가 적어졌다. 이건 좋은 점이긴 하다.

회고 방식은 썼던 글과 그즈음에 있었던 일을 돌아보는 것으로 해보려 한다.

## 스터디룸과 정총무

어쩌다 보니 총무를 하게 됐다. 그런데 정작 돈은 결재를 받아야 한다는 아이러니가 있다.. 🤣

처음에는 개인 계정으로 해결하려고 했는데, 아무래도 공적인 계정이 좋을 것 같아 결제용 구글 아이디를 만들었다.

> 하지만 대부분 존재를 모르지 않을까 싶다

스터디룸을 여기저기 알아보다 의자가 매우 마음에 드는 곳을 찾았다. 위치가 조금 애매하긴 하지만 전반적인 시설이 괜찮았다. 가장 쾌적했고 이는 아마 모두 동의하지 않을까 싶다. 어쨌든 이후로 월 단위로 예약을 해서 비교적 수월했다. 다만 시설이 좋은 만큼 인기가 많아 주 단위로 예약해야 할 때 많이 힘들었다.

다만 문제는 조금 비싸다는 것이었는데, 유료회원에 가입하면 합리적인 가격이 된다고 생각했다. 실제로 계산도 끝냈었다. 물론 코로나가 이렇게 장기화 될 줄은 꿈에도 몰랐기에 실패하지는 않았지만 아주 성공적인 투자는 아니었던 것 같아 아쉽다.

> 현재 시점으로 회원이 83일 남았다. 많이 모이지 않았던 것 같은데...뽕을 뽑지 못한 것 같아 아쉽다.

최근에는 teams를 사용해 원격으로 진행 중인데, 나름 성공적인 것 같다. 개인적으로 관련 플랫폼 중 가장 좋은 것 같다. 만약 불가피하게 결제할 일이 생긴다면 자연스럽게 팀즈를 선호하게 될 것 같다.

## 작성했던 문서들

#### [SQL Injection](https://github.com/Im-D/Dev-Docs/blob/master/Security/SQL_Injection.md)

당시 회사에서 시큐어 코딩에 고통받고 있던 시기다. 그중 SQL 인젝션에 대해 작성했다. XSS 공격은 많이 유명했지만, SQL에까지 유사한 공격이 가능하다는 것은 많이 생소했기 때문이다. 아이러니하게 보안에 관련된 것보다는 prepared 쿼리의 장점을 좀 더 느낀 주제였다.

#### [Counting-sort](https://github.com/Im-D/Dev-Docs/blob/master/CS/Counting-sort.md), [Radix-sort](https://github.com/Im-D/Dev-Docs/blob/master/CS/Radix-sort.md)

특정 조건에서 선형 시간으로 정렬할 수 있는 알고리즘들이다. 이것 또한 생소한 개념이어서 주제로 정하게 되었다. 특히 원본의 순서를 보장하는 컨셉이 처음에 이해가 잘 되지 않아 애를 많이 먹었다.

당시에는 써먹을 일이 있을까 싶었는데, 요즘 비슷한 컨셉의 알고리즘이나 내부에 해당 개념을 사용하는 부분이 나올 경우가 있어 반갑기도 하다. 물론 안 보고 구현하거나 하지는 못하지만 컨셉을 안다는 것 자체가 큰 보탬인 것 같다.

#### [Call-By-Sharing](https://github.com/Im-D/Dev-Docs/blob/master/CS/Call-By-Sharing.md)

당시 객체를 매개변수로 사용하면 당연히 바인딩을 변경 가능 할 것이라 착각하고 있었던 탓에 야근한 적이 있었다. 그 이유로 공부하며 작성했던 문서다. 재엽님이 손님으로 오셔서 많이 떨었던 기억이 난다.

> 최근 안 사실인데 공식 문서에는 pass by value로 명명되어 있다고 들었다. 공식문서를 찾아보고 검증해본 뒤 다시 한 번 발표해볼까 생각 중이다. 그런데 잘 안 나온다. 찾기 힘들다😂

#### [copy-object](https://github.com/im-d-team/Dev-Docs/blob/master/Java/copy-object.md)

위의 주제에 이어 객체를 복사하는 방법에 관한 얘기다. getter나 setter에서 배열이나 컬렉션을 처리하던 중 객체의 복사에 관한 생각을 많이 했다. 시큐어 코딩 덕도 있는데, 당시 넥스트스탭을 시작했던 터라 접근이 좀 쉬웠다. 더군다나 이펙티브 자바를 산 지 얼마 되지 않아 도움을 특히 많이 받았다.

#### SOLID

[srp](https://github.com/im-d-team/Dev-Docs/blob/master/CS/srp.md), [open-closed-principle](https://github.com/im-d-team/Dev-Docs/blob/master/CS/open-closed-principle.md), [liskov_substitution_principle](https://github.com/im-d-team/Dev-Docs/blob/master/CS/liskov_substitution_principle.md), [interface-segregation-principle](https://github.com/im-d-team/Dev-Docs/blob/master/CS/interface-segregation-principle.md), [dependency-inversion-principle](https://github.com/im-d-team/Dev-Docs/blob/master/CS/dependency-inversion-principle.md)

3개월에 걸쳐서 마무리된 시리즈였다. 단어 순으로 발표했다. 발표하고 보니 이름순으로 알아가는 게 이해에도 도움이 많이 된 것 같다. 엉클 밥도 같은 순서로 글을 작성했던 것 같은데 그래서 그런 것 같기도 하다.

발표는 넥스트 스탭을 하며 객체지향에 대한 부족함을 많이 느꼈기 때문이었다. 아무래도 한 번 빡세게 객체지향을 경험하고 나니 보는 눈이 달라졌는데, 그럼에도 문제는 내 스스로의 기준이 없다는 것이었다. 아무래도 그런 부분을 찾는 과정이었다 보니 개인적으로는 재미가 있었다.

> 듣는 사람들은 많이 고통스러웠을 것 같다. 감사를 표한다.

중간에 [grasp](https://github.com/im-d-team/Dev-Docs/blob/master/CS/grasp.md)도 함께 발표를 했었는데, 결론적으로 가장 중요한 것은 책임이었던 것이라 느꼈다.

> 하지만 가장 중요한 것은 객체의 행위, 그 다음이 상태이다. 조만간 객체지향의 사실과 오해를 읽어볼 예정이다.

글을 돌아보며 최근에 이에 위배되거나 의식하지 않고 코드를 작성했던 적이 있는 것 같아 반성하게 됐다. 다시 한 번 살펴봐야 할 듯하다.

#### [Java/date-api-in-java](https://github.com/im-d-team/Dev-Docs/blob/master/Java/date-api-in-java.md)

Java의 날짜 API에 관한 문서다. 당시 배치 스케줄링 관련 작업을 하고 있었는데 스케줄러로 쿼츠 라이브러리를 사용하고 있었다. 크론 식을 파싱해야 하는 작업을 해야 해서 관련 라이브러리 같은 것을 참고하던 중, 관심이 생겨 발표하게 되었다.

이외에도 이전에 스트링으로 도배된 VO를 고치고 싶어 혼자 삽질한 적이 있었는데, 이때 가장 많이 고생했던 것이 날짜라서 당시 어렴풋이 알고 넘어갔던 것들을 확인하는 좋은 계기가 됐던 것 같다.

글에 재미있는 일화 같은 것도 넣어서 재밌게 하고 싶었는데 발표날 컨디션이 좋지 않아 텐션이 많이 떨어졌던 것으로 기억한다. 아쉬운 발표 중 하나다.

#### [aspect-oriented-programming](https://github.com/im-d-team/Dev-Docs/blob/master/CS/aspect-oriented-programming.md)

스프링에서 가장 핵심적인 기술로 aop가 꼽힌다는 것을 보고 발표하게 됐다. 사실 막상 작성하고 보니 이미 사용하고 있던 것들이었다. 시큐리티나 로깅을 제대로 만져본 적은 없지만, 스프링 배치에서 관련된 개념을 많이 사용했던 것으로 기억한다.

후속 글로 aspectJ와 스프링aop를 비교할 것이라 했는데 아직 안 하고 있다. 아마 올해 말쯤 되면 할 수 있지 않을까 싶다. 당분간은 주로 cs 관련하여 글을 작성하고 싶기 때문이다.

#### [integer_representation](https://github.com/im-d-team/Dev-Docs/blob/master/CS/integer_representation.md)

2020년 마지막 글이다. 퇴사 후 하기로 했던 cs 관련된 공부를 본격적으로 해보자는 의지에서 작성해본 글이었다. 부동소수점이나 팩, 언팩 방식 등도 이후에 소개해야 할 것 같은데 우선순위를 정하기가 힘들다. 조만간 다뤄봐야 할 것 같다.

## 마치며

글이 금방 써질 줄 알았는데 작성하다 보니 시간이 훌쩍 가버렸다. 세세한 것까지는 아니라도 글을 작성했던 의도와 주제는 기억이 잘 나는 것 같아 다행이다. 이 정도만 해도 의미가 있지 않나 싶다.

새로 오신 분들 모두 위화감 없이 잘 섞여주어 힘든 시기임에도 한 해 동안 즐겁게 활동할 수 있었던 것 같다. 그 외에도 최근 작성하는 글에 고품질의 코맨트를 달아주는 **[jigi-kim](https://github.com/jigi-kim)** 에게 감사를 전하고 싶다.

올해도 많은 변화가 있을 것 같다. 전체적으로 안정되다 보니 새로운 것들을 시도할 여유가 생겼기 때문이라 생각한다. 하지만 그보다도 운영진들이 적극적으로 움직여줬기 때문일 것이다. 올 한해도 감사하며 즐겁게 활동하고 싶다. 무사히 한 해를 마치길 바라며 이만 글을 줄이도록 한다.
