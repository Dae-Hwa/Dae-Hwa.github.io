---
title: TIL-20210308
createdDate: "2021-03-08 19:22:34"
updatedDate: "2021-03-08 19:22:34"
author: 정대화
tags:
  - til
draft: false
---

- 스프링 Bean 생성할때 어 떻게 가져오는지 살펴봤다. 지금은 ModelAttribute를 어떻게 처리하는지 알아보고자 했는데, 그동안 무조건 기본생성자와 setter가 포함되어야 한다고 알고 있었는데 그게 아니었기 때문이다. 기본 생성자가 protected로 되거나, 심지어 없어도 인자를 넣어주는 생성자가 있다면 잘 동작했기 때문이다. 리플렉션을 사용하는 것은 알았는데, 당연히 기본생성자와 setter만으로 구성된줄 알았다. 하지만 직접 동작을 보니 과정은 다음과 같았다.

  1. ModelAttributeMethodProcessor.constructAttribute에서 변환. 이 때 리플랙션 사용. 생성자 이용해서 만든 인스턴스가 attribute로 사용된다.
    > 생성자를 이용한다고 표현했는데, 정확히 말하면 생성자에 정의된 필드를 직접 넣어준다. 넣어주는 것 자체는 `ConsturctorAccessor`에 있는 네이티브 메소드를 이용한다.

  2. 프로퍼티를 채워준다. DataBinder의 applyPropertyValues에서 넣어준다. 넣어주기 위해 AbstractPropertyAccessor에 있는 setPropertyValues를 사용한다. 쭉쭉 타고 내려가면 `BeanWrapperImpl`에서 최종적으로 setter를 invoke해준다.
    > 이 때, JavaBeans의 `PropertyDescriptor`를 사용한다. 여기에서 readMethod와 writeMethod를 가져올 수 있는데, 간단히 얘기하면 getter와 setter메소드를 가져오는 것이다. `PropertyDescriptor`는 `Introspector`에서 만든다. 만들 때 여기에서 상수로 prefix를 설정해두고 메소드를 찾아준다.

  생각했던 것과 다른 점이 각각의 상황마다 다르게 빈을 매핑하는 줄 알았는데, 아예 BeanUtils로 감싸서 사용하는 것을 보니 Bean으로 등록하는 과정이 대게 비슷하지 않을까 하는 생각이 들었다. 여기서 드는 의문점은 AutoWired를 넣어주면 기본 생성자를 기반으로 빈 등록을 할텐데 어떻게 넣어주는 것인지다. `AutowiredAnnotationBeanPostProcessor`를 살펴보면 될 듯 한데, 다음에 한 번 봐야겠다.

- 체스 미션6의 리뷰를 처리했다. 사실 다 처리하지 못했는데 생각할 거리가 많아졌다. 여러가지가 있었는데 그 중에 가장 중요하다고 생각되는 부분은 당연히 필요한 매개변수가 다른 경우의 메소드 추상화였다. 이전 단계에서 구현했던 CalculablePiece는 독특해보이지만 그런 면에서는 오히려 분리가 잘 된 것 같았다. 이번에 구현했던 메소드들의 경우는 지금 상황에선 합당한 구조인 것 같으면서도, 깔끔해보이지 않는 느낌이 강했다. ISP 위반을 의심해보라는 코멘트도 있었는데 천천히 생각해봐야겠다. 이런 저런 방향으로 많이 생각해봐야 답이 나올 문제가 아닌가 싶다.