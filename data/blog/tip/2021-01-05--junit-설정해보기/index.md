---
title: JUnit 설정해보기
createdDate: "2021-01-05"
updatedDate: "2021-01-05"
author: 정대화
tags:
  - java
  - junit
  - assertj
  - tdd
draft: false
---

어제 TIL을 작성하기 위해 다른 팀원의 블로그를 염탐하다 테스트 작성에 어려움을 겪고 있다는 글을 보게 됐다. 오늘 낮에 코드 리뷰를 하며 관련해서 얘기하다 설정하는 법을 알려주게 되었다. 덕분에 이래저래 만져봤던 것을 정리해본다.

## JUnit

[JUnit](https://junit.org/junit5/)은 자바 언어용 [단위 테스트](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%9B_%ED%85%8C%EC%8A%A4%ED%8A%B8) 프레임워크다. Java 진영에서 가장 많이 쓰이고 있는 테스트 프레임워크이고 JUnit 없이 TDD를 논하기 힘들 것이다.

### JUnit5의 ParametizedTest

JUnit의 최신 버전은 JUnit5인데, 테스트용 매개변수 입력을 아주 강력하게 지원해준다. 테스트를 작성할 때 프레임워크의 도움을 받지 않으면 힘든 부분이 여러 가지가 있겠지만, 개인적으로 가장 힘들었던 부분은 아래 같은 경우이다.

```java
class SomeClass {
    public int someFunction(int a, int b) {
      return a + b;
    }
}
class SomeClassTest {
    SomeClass someClass = new SomeClass();
    public test() {
      System.out.println("test 1 : " + someClass.someFunction(1, 1) == 2);
      System.out.println("test 2 : " + someClass.someFunction(2, 2) == 4);
      System.out.println("test 3 : " + someClass.someFunction(3, 3) == 6);
    }
}
```

JUnit5 는 `ParametizedTest` 라는 기능을 제공하는데 이를 이용하면 아래와 같이 수정할 수 있다.

```java
class SomeClassTest {
  @ParameterizedTest
  @CSVSource({
    "1, 1, 2",
    "2, 2, 4",
    "3, 3, 6"
  })
  void someFunction(int a, int b, int expected) {
    SomeClass someClass = new SomeClass();
    int result = someClass.someFunction(a, b);

    assertThat(result).isEqualTo(expected);
  }
}
```

만약 테스트 케이스가 늘어난다면 `@CSVSource` 어노테이션의 매개변수로 값만 추가해주면 된다.

이외에도 `ParameterizedTest` 에 매개변수를 넣는 방법이 여러 가지가 있는데 그 중 `MethodSource` 를 추천한다.
[@MethodSource - JUnit 5 User Guide
](https://junit.org/junit5/docs/current/user-guide/#writing-tests-parameterized-tests-sources-MethodSource) 에 나와있는 설명을 보고 따라하면 금방 익힐 수 있을 것이다.

> <https://www.baeldung.com/parameterized-tests-junit-5> 에도 설명이 잘 나와있다.

## 내 프로젝트에 설정해보기

> 인텔리J를 기준으로 작성하는데, 이클립스도 크게 다르지 않다.

크게 세 가지 경우가 있다.

1. Java 프로젝트
2. Maven 프로젝트
3. Gradle 프로젝트

하나씩 살펴보자

### 공통

어떤 프로젝트든 우선적으로 설정해야 할 것이 있다. Test 소스용 root path를 지정해야 한다.

우선 File-Proejct Structure-Modules에 들어간다.

> 이클립스는 프로젝트의 Java Build Path에서 설정할 수 있다.

![junit설정해보기-03.png](./junit설정해보기-03.png)

그다음 새 폴더를 생성하고 테스트 디렉토리로 설정한다.
![junit설정해보기-04.png](./junit설정해보기-04.png)
![junit설정해보기-05.png](./junit설정해보기-05.png)

### Java Project

`Alt + Insert` 혹은 `Shift + Shift` 입력 후 검색을 하여 `Generate` 를 호출하면 `Test...` 라는 옵션이 있다.
![junit설정해보기-06.png](./junit설정해보기-06.png)
![junit설정해보기-07.png](./junit설정해보기-07.png)

선택하면 아래와 같은 상자가 나온다. OK를 클릭하자.

> 아래의 Member에서 원하는 테스트 케이스를 함께 생성할 수도 있다.

![junit설정해보기-08.png](./junit설정해보기-08.png)

생성된 클래스에 `@Test` 어노테이션을 입력 후 `Alt + Enter` 를 입력하면 아래와 같은 옵션들이 나온다. JUnit5를 사용할 것이니 선택해준다.

![junit설정해보기-09.png](./junit설정해보기-09.png)

이제 설정이 완료됐다. 이후 테스트 코드를 작성해본다.

![junit설정해보기-10.png](./junit설정해보기-10.png)

초록색 재생 버튼이 나오는데 클릭하면 실행시킬 수 있다. 잘 동작하는지 실행시켜보자.

![junit설정해보기-11.png](./junit설정해보기-11.png)

테스트에 성공했다고 하단에 나온다. 성공이다!

![junit설정해보기-12.png](./junit설정해보기-12.png)

### Maven 프로젝트

아래 depencency를 `pom.xml`에 추가해준다. 이후 [Java Proejct](#java-project) 를 따라가면 된다.

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>RELEASE</version>
    <scope>test</scope>
</dependency>
```

### Gradle 프로젝트

아래 dependency를 `build.gradle`에 추가해준다. 이후 [Java Proejct](#java-project) 를 따라가면 된다.

```gradle
testCompile group: 'org.junit.jupiter', name: 'junit-jupiter', version: 'latest.release'
```

## 단위테스트 그리고 TDD

단위 테스트는 특정 모듈이 의도한 대로 동작하는지 검증하는 절차인데 쉽게 말하면 메소드에 대한 테스트 케이스를 작성하고 잘 동작하는지 확인하는 것이다.

메소드 단위로 확인하기 때문에 제대로 작성만 해놓는다면 문제가 발견하면 어디서 잘못되었는지 파악하기 쉽다. 특히 입력과 출력에 대해 정확히 정의하고 테스트하면 [side effect(부작용, 부수효과)](<https://ko.wikipedia.org/wiki/%EB%B6%80%EC%9E%91%EC%9A%A9_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99)>) 를 줄이는 효과를 줄 수 있다.

또한, 테스트 코드가 잘 짜여있으면 리팩토링을 하더라도 이전과 똑같이 동작하는지 지속적으로 확인할 수 있기 때문에 좀 더 편안한 마음으로 리팩토링을 진행할 수 있다.

마지막으로 상향식 개발 방법을 사용하면 더욱 효과적이다. 쉽게 말하면 메소드가 동작하도록 일단 만든 다음 점진적 개선을 해나가며 개발하는 것이다. 예를 들자면, 아래와 같은 일단 동작만 하는 소스를 만들어 놓고 세부 사항을 추가해가며 구현하는 것이다.

```java
class SomeClass {
    public int someFunction() {
      return 0;
    }
}

class SomeClassTest {
    @Test
    void someFunctionTest() {
      int result = new SomeClass().someFunction();
      int expected = 0;
      assertThat(result).isEqualTo(expected);
    }
}
```

이러한 장점은 [TDD](https://en.wikipedia.org/wiki/Test-driven_development)의 사상에 부합하는데, TDD의 개발 사이클은 아래와 같다.

1. 테스트를 추가한다.
2. 테스트를 실행한다.
3. 테스트가 실패한다면 테스트를 통과할 수 있도록 코드를 수정한다.
4. 테스트를 실행한다. 실패한다면 성공할때까지 3을 반복한다.
5. 리팩토링을 진행한다.
6. 1번부터 반복한다.

이를 위해 TDD는 아주 작은 단위의 테스트부터 작성하여 점진적으로 늘려가는 방식을 사용하는데 이는 위에서 말한 장점과 겹친다.

## 마치며

JUnit을 간단하게 사용하는 법을 알아봤다. 생각보다 간단하게 설정할 수 있다.

다른 팀원의 설정을 봐주다 잠깐 헤매기도 했는데 그 덕에 여러 가지 상황에서 추가해보는 내 나름의 테스트를 함께할 수 있었고 글의 퀄리티도 올라간 것 같다.

단위 테스트와 TDD도 잠깐 언급해봤는데 나도 잘하진 못하지만 아주 매력적인 개발방법임은 틀림없다. TDD에 OOP를 얹어서 먹어보세요.. 츄라이 츄라이
