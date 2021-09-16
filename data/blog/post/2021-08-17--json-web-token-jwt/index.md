---
title: JWT(JSON Web Token)
createdDate: "2021-08-17 19:21:59"
updatedDate: "2021-08-17 19:21:59"
author: 정대화
tags:
  - etc
draft: true
---

## 들어가기에 앞서

JWT를 찾아보면 명확하지 않은 설명들이 간간히 있었고 대부분의 블로그에서 비슷한 방식으로 설명해 의문점이 많이 생겼다. 그런 부분들을 해소하기 위해 조사하며 정리한 글이다. 따라서 간단한 컨셉을 파악하는 것은 <https://jwt.io/introduction> 나 블로그에서 흔히 설명하는 방식의 간단한 글을 찾아보는 게 더 도움이 될 수 있다.

## JWT(JSON Web Token) 개요

JWT는 정보를 간결하게 주고받을 수 있는 기술이다. 간결(compact)하고 URL-safe하므로 HTTP 헤더나 URI 쿼리 파라미터와 같이 공간이 제한된 환경에서도 쉽게 사용할 수 있다. 이때, 주고받는 정보는 claim이라 한다.

> Claim은 어떠한 주제에 대해 주장하는 정보(A piece of information asserted about a subject)다. name/value 페어로 구성된다. 주제에 대해 주장한다는 말이 어색해 보이는데, asserted는 단언하여 주장하는 뉘앙스다. 그리고 JWT는 두 당사자(parties)에 관한 것이다. 따라서 어떤 주제에 대해 확신을 가지고 설명을 하는 느낌이고, claim 또한 어떠한 주제에 대해 확신할 수 있는 정보를 담았다는 뉘앙스로 생각된다. 예를 들어, 어떠한 토큰은 특정 주체가 발급했다고 확신할 수 있다는 식이다. claim은 암호화되거나 서명으로 무결성이 보장되기 때문이다.

JWT는 인터페이스 역할을 해주는 추상적인 개념이고 실제 구현은 JWS와 JWE로 나누어진다.

### JWS(JSON Web Signature)와 JWE(JSON Web Encryption)

Cliam은 서명을 하거나 암호화하여 사용한다. 디지털 서명을 하는 방식은 JWS(JSON Web Signature)방식이고 암호화 하는 방식은 JWE(JSON Web Encryption)다. 이러한 claim의 집합은 JSON 객체로 표현되어 전달되는데, 이를 JWT Claims Set이라 한다. 모든 JSON data type을 calim의 값으로 사용할 수 있다.

디지털 서명의 경우 claim의 내용이 노출되지만 서명을 이용하여 원본이 맞는지 무결성을 파악할 수 있다. 반면, 암호화 방식은 claim 자체를 암호화시켜 내용을 파악할 수 없다. 보안은 당연히 암호화 방식이 좋지만, 클라이언트가 claim의 데이터를 가져다 쓸 수 있도록 서명 방식을 사용한다. 따라서 대부분 JWT라고 하면 JWS를 가리킨다. 이 글에서도 JWE보다는 JWS에 조금 더 무게를 실어서 설명을 할 것이다.

JWT는 독립적(Self-contained)이라고 표현하기도 한다. 쉽게 얘기하면, 페이로드 안에 사용자에 대한 정보가 모두 들어있으면 데이터베이스 조회 작업이 줄어든다. 다른 측면에서 보면, 이러한 특성 때문에 데이터가 노출되는 JWS 방식의 경우 민감한 정보는 넣지 않는 것이 바람직하다.

JWS와 JWE는 모두 base64URL 인코딩되어 전달된다. 각 방식의 구성 요소들을 part라고 부르는데 이는 `.`을 구분자로 나누어진다.

```text
// 줄 바꿈은 표현을 위해 임의로 넣은 것이다. 실제로는 한 줄로 붙어서 전송된다.
eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9
.
eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ
.
dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```

## 구조

앞서 말했듯, 주로 JWS의 구조에 대해 설명할 것이다. JWE의 예시는 [Example JWE](https://datatracker.ietf.org/doc/html/rfc7516#section-3.3)에서 확인해볼 수 있다.

JWS의 구조는 JOSE Header, JWS Payload, JWS Signature로 구성된다. 각 구성요소를 part라고 하고, 각 part는 위에서 봤듯이 `.`으로 구분되어 표현된다.

> registered header와 claim의 값은 대부분 3글자 약어로 되어있는데, 이는 JWT의 주요 목표가 compact한 표현이기 때문이라 한다.

### JOSE(JSON Object Signing and Encryption) Header

> Javascript Object Signing and Encryption이라 부르기도 하는데, 이 글에서는 [JWS - 용어설명](https://datatracker.ietf.org/doc/html/rfc7515#section-2)에서 가져와 사용한다.

JOSE Header part는 JWT의 구성요소이기 때문에 JWS와 JWE 둘 다 사용한다. 주로 JWT Claims Set에 적용될 암호화 작업을 설명해주고 옵셔널하게 그 외의 속성이 들어간다. JOSE Header에 들어가는 값들은 JWS와 JWE 중 무엇을 사용하느냐에 따라 달라진다.

> 다시 말하면, JOSE Header에 들어가 있는 값이 JWS를 위한 것이면 JWT Claims Set이 JWS Payload가 되는 것이고, JWE를 위한 것이면 JWT Claims Set이 JWE에 의해 암호화된 plaintext가 되는 것이다.

아래에서는 주요한 속성들만 설명한다. 나머지는 [JWS - JOSE Header](https://datatracker.ietf.org/doc/html/rfc7515#section-4)에 자세히 나와있다.

#### JWT Header

- typ : type을 뜻한다. JWT가 아닌 객체가 존재할 수도 있을 때 구분하기 위해 사용한다. 옵셔널한 값이지만, 만약 사용해야 하고 JWT임을 나타내야 한다면 `JWT`를 값으로 넣는 것이 권장된다. 현재는 대소문자를 가리지 않지만, 레거시 중에 대문자만 인식하는 것이 있을 수도 있다고 한다.
- cty : content type을 뜻한다. 일반적인 경우에는 사용하지 않는 것이 권장되고, 중첩된 구조에서는 반드시 사용되어야 한다고 한다. 이 경우에도 `JWT` 를 값으로 사용하는 것이 권장된다.

#### JWS, JWE Header

- alg : algorithm을 뜻한다. 필수값으로 반드시 넣어야 한다. 어떤 알고리즘을 사용할지 선택하는 것인데, JWS에서 사용 가능한 값은 [JWA - alg for JWS](https://datatracker.ietf.org/doc/html/rfc7518#section-3.1)에서 확인할 수 있다.
- jwk : Json Web Key를 뜻한다. JWS에 디지털 서명하는데 해당하는 공개키다. 형식의 예시는 [Example JWK](https://datatracker.ietf.org/doc/html/rfc7517#section-3)에서 확인할 수 있다.
- kid : 키에 대한 힌트를 나타낸다. 이를 이용하여 키 변경을 명시적으로 나타낼 수 있다.

이외에도 JWS와 JWE헤더는 public, private 헤더를 지원한다.

### JWS Payload

JOSE Header에 JWS를 위한 값들이 들이었으면 JWT Claims Set이 JWS Payload가 된다. 따라서 JWS Payload는 JWT Claims Set의 규칙을 따른다.

> 당연히 JWE를 위한 값들이 들어있으면 JWT Claims Set은 plaintext로 암호화된 JWE가 된다.

#### Claim

Claim은 name/value의 쌍으로 이루어져 있고, JWT Claims Set 안에 있는 name은 unique한 값이어야 한다. 그렇지 않을 경우 파싱이 거부되거나 마지막 name만 파싱된다. 이러한 동작은 구현체에 따라 다르기 때문에 확인을 해봐야 하는데, 근본적으로 하지 않는 것이 좋다. 또한 JWT가 이해할 수 없는 claim은 무시된다.

JWT Claim Names는 세 가지로 분류되는데, registered, public, private이다.

##### Registerd Claim Names

- iss : Issuer, 발급 주체

- sub : subject, JWT의 주제(제목). JWT의 내용은 일반적으로 sub에 대한 설명이다.

  > sub를 단순히 제목으로 사용하기보다는, user ID와 같이 전체를 포괄하는 내용을 담아주는 용도로 많이 사용하는 듯하다.

- aud : Audience, 받는 주체

- exp : Expiration, 만료시간. NumericDate value를 포함하는 숫자여야 한다.

- nbf : Not Before, 토큰의 활성 시작 시간. 예를 들어 nbf가 내일이면 오늘은 해당 토큰을 사용할 수 없다.  NumericDate value를 포함하는 숫자여야 한다.

- iat : Issued At, 토큰이 발급된 시간. age를 계산하는 데 사용할 수 있다.  NumericDate value를 포함하는 숫자여야 한다.

- jti : JWT ID, JWT의 유니크한 ID값. 중복 값이 생성될 확률이 무시할 수 있는 정도로 낮은 방법을 택해야 한다. 토큰이 재사용되는 것을 막아주는 용도로 사용할 수 있다.

> 위에 나온 registered claim names의 자세한 내용은 [JWT - Registered Claim Names](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1)에서 확인할 수 있다.

필수적으로 사용해야 하는 registered claim이 있는 것은 아니지만, 이를 사용해서 보다 유용하고 상호운용성이 있도록 만들 수 있다. 또한 발급 주체의 구현이나 상황(context)에 따라 반드시 포함해야 하는 claim을 정해놨을 수도 있다.

public은 충돌이 일어나지 않는 이름(Collision-Resistant Name)이어야 하고, private은 registered나 public이 아닌 claim을 뜻한다.

### JWS Signature

JWS Signature는 아래와 같은 작업들을 수행하여 만들어진다.

1. JOSE Header를 넣어 JSON 객체를 만든 뒤 BASE64URL 방식으로 인코딩한다.

2. JWS Payload로 사용할 컨텐츠를 만든 뒤 BASE64URL 방식으로 인코딩한다.

3. 1과 2에서 만들었던 내용들을 사용해서 JWS Signature를 만든다.

   1. `BASE64URL(JOSE Header).BASE64URL(JWS Payload).`가 Signature 계산의 인풋이 된다.

   2. 알고리즘은 JOSE Header의 alg 파라미터의 값으로 정해진다. 따라서 위에서도 살펴봤듯, alg 파라미터의 값은 반드시 존재해야 하며 JWS Signature에서 사용할 수 있는 알고리즘이어야 한다.
   3. 3-1의 값을 3-2의 알고리즘을 이용하여 디지털 서명으로 바꿔준 뒤, BASE64URL 방식으로 인코딩한다.

> 따라서, JWS를 사용하는 JWT의 결과는 `BASE64URL(JOSE Header).BASE64URL(JWS Payload).BASE64URL(JWS Signature)`와 같은 형태가 된다.

여기서 3-2의 알고리즘에 따라 Message Signature 방식과 MAC 방식으로 구분된다. 간단히 설명하면, MAC는 대칭키 방식으로 암호화하는 것이고, Message Signature 방식은 비대칭 키 방식으로 암호화하는 것이다. MAC는 대칭 키이기 때문에 클라이언트에서 검증 작업을 하기 어렵다. 따라서 서버에서 모든 것을 처리할 수 있거나, 간단한 작업에 사용되며 로그인 인증 토큰으로 많이 사용된다.

> [How to select a JOSE / JWT cryptographic algorithm for your application](https://connect2id.com/products/nimbus-jose-jwt/algorithm-selection-guide)에 각 방식의 비교와 도입 전 고려해야할 부분들이 정리돼있다. JWE도 함께 비교한다.

어찌 됐건, JWS는 암호화된 Signature 파트를 비밀키로 검증한다. JOSE Header와 JWS Payload를 암호화하므로 해당 부분들에 변조가 있었는지 파악할 수 있다. 즉 데이터는 노출되지만, 데이터가 바뀔 위험이 없다. 따라서 로그인 인증 토큰으로 사용할 수 있는 것이다.

## 사용 예시

- 인증(Authenticaition)

  - 사용자가 자신의 인증 정보(credentials)를 이용하여 성공적으로 로그인하면 ID토큰을 반환된다.

    > OAuth2를 기반으로 하는 인증 방식인 [OIDC(OpenID Connect)](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)스펙은 항상 JWT를 ID 토큰으로 사용하도록 되어 있다.

- 권한 확인(Authorization)

  - 가장 많이 쓰는 시나리오. 사용자가 로그인하면 다음 요청부터는 JWT를 포함하여 서버에 요청을 보낸다. 서버는 해당 토큰이 유효한지 검증하고 접근할 수 없는 곳을 요청하면 거부할 수 있다.

  - 오버헤드가 적고 여러 도메인에서 쉽게 사용할 수 있기 때문에 SSO(Single Sign On)에 JWT가 널리 사용된다.

    > 다른 방법으로 SAML과 SWT가 있다. 아래에서 간단히 비교한다.

- 정보 교환

  - 이 경우 비대칭 키 방식을 사용하면 더 좋을 것이다. 그러면 받는 사람도 안전하게 서명을 검증해 유효한지 확인할 수 있다. 즉, 받는 사람이 JWT에 있는 보낸 사람과 데이터가 변하지 않았다는 것을 믿을 수 있다.

    > 대칭 키 방식을 사용하면 비밀 키를 주고받아야 하기 때문에 보안에 좋지 않을 수 있다.

## 장점과 단점

- 장점

  - 사용자 편의성이 증가한다.

    > JWT만의 장점은 아니다. 세션과 쿠키를 사용해도 같은 효과를 낼 수 는 있다.

  - 서버 비용이 줄어든다.

  - 서버에 고정되는 것이 아니기 때문에 유연하다. 따라서 scale in/out에 대응하기 쉽고, SSO 구현에도 좋다.

- 단점

  - 아무래도 보안적 측면이 좋다고 하기 힘들다. 토큰이 탈취되면 해당 토큰을 무력화하기 힘들 수 있다. 또한 대부분 JWS 방식이기 때문에 내용이 다 노출된다.

  - 추가적인 보안책을 마련하려면 결국 서버의 도움을 받아야 한다.
  
  - 세션처럼 사용한다면 클라이언트에서 업데이트하기 전까지 서버의 변동사항이 반영되지 않는다. 또한 토큰이 커지면 주고받아야 할 데이터의 양이

## 다른 방법은?

세션과 쿠키를 제외한 토큰 방식 중 JWT이외에도 SWT(Simple Web Token)과 SAML(Security Assertion Markup Language tokens)있다.

> SWT는 찾아도 잘 안 나온다. [SWT Example](https://docs.microsoft.com/en-us/previous-versions/azure/azure-services/hh781551(v=azure.100)?redirectedfrom=MSDN#swt-example) 참고

SWT는 Java의 properties와 유사한 형태다. key value형태로 사용하지만 JSON처럼 다양한 타입을 사용하기 힘들어 자유도가 떨어진다. 또한, SWT는 HS256만 사용할 수 있어 보다 강력한 보안이 요구될 때는 사용할 수 없다. 내 생각에 단순한 토큰으로는 문제가 없어 보인다. 그럼에도 잘 사용하지 않는 이유는 JSON이 더 다루기 쉽기 때문인 것으로 보인다.

반면, SAML은 이름에서 유추할 수 있듯이 XML기반이다. 그래서 기본적으로 써줘야 할 게 많다. 즉 인코딩 시 크기가 매우 커서 불리하다. XML이 익숙한 사람에게는 가독성이 더 좋아 보일 수도 있지만, 역시나 JSON이 더 다루기 쉽다고 느끼는 사람이 훨씬 많은 것으로 생각된다. Ajax도 XML을 고려해서 만들었지만, 결국 대부분 JSON을 이용해서 사용하게 됐다.

## 마치며

명확하지 않은 설명이 싫어서 글을 쓰게 됐는데 나도 많이 건너뛰게 됐다. JWE, JWK, JWA도 있고, JWT만해도 중첩 구조나 protected, unprotected와 같이 다루지 않은 내용도 많다. 그럼에도 생각보다 글이 엄청 길어졌다.

하지만 이런 부분까지 몰라도 라이브러리의 도움을 받으면 사용에 큰 어려움이 없을 수 있다. 그래서 간단한 컨셉만 나타낸 글이 많은 것 같고, 그만큼 사용하기 쉽게 잘 만든 것 같다. 그래서 인기도 많은가보다.

---

## References

- <https://datatracker.ietf.org/doc/html/rfc7519>
- <https://datatracker.ietf.org/doc/html/rfc7515>
- <https://datatracker.ietf.org/doc/html/rfc7516>
- <https://medium.facilelogin.com/jwt-jws-and-jwe-for-not-so-dummies-b63310d201a3>
- <https://meetup.toast.com/posts/239>
- <https://jwt.io/introduction>
- <https://auth0.com/learn/json-web-tokens/>
- <https://connect2id.com/products/nimbus-jose-jwt/algorithm-selection-guide>
