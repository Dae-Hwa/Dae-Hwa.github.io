---
title: authentication, authorization, certification의 차이
createdDate: "2021-08-17 18:41:48"
updatedDate: "2021-08-17 18:41:48"
author: 정대화
tags:
  - etc
draft: false
---

많이 헷갈리는 개념이다. 주로 authentication과 authorization을 많이 비교한다. 개인적으로 certification도 헷갈려서 맨 하단에 작게 정리해뒀다.

authentication은 특정 user가 해당 user라고 주장하는 것이 옳은지 판단하는 것이다. authorization은 user의 access 가능여부를 판단하는 것이다.

로그인 프로세스로 생각해보면 Authentication은 내가 특정 유저의 권한을 요구하고, 해당하는 키를 제공하는 것이다. 가장 간단한 방법은 비밀번호를 입력해서 로그인 하는 것이다. Authorization은 로그인 이후 특정한 작업을 요청할 때, 사용자의 권한이 해당 작업에 적합한지를 판단하는 것이다. 예를 들어, admin이 아닌데 admin페이지를 요청한다면 해당 사용자는 권한이 없으니 admin페이지에 접근할 수 없을 것이다.

아래는 간단히 정리해본 것이다.
> 자세한 설명은 [authentication-and-authorization](https://auth0.com/docs/get-started/authentication-and-authorization), [authentication-vs-authorization](https://www.okta.com/identity-101/authentication-vs-authorization/), [difference-between-authentication-and-authorization](https://www.geeksforgeeks.org/difference-between-authentication-and-authorization/)를 참고

## authentication

- 인증
- 가입이 되어 있는 사용자와 일치하는지 판단하는 것

> 로그인 시 회원가입이 된 유저가 맞는지 판단하는 것

## authorization

- 인가, 허가
- 권한이 있는지 확인

> 로그인 이후 특정 행동을 할 수 있는 권한이 있는지 확인하는 것

## certification

- 증명
- 특정 기준을 통과했다는 증거를 확인하는 것

> 공인인증서
