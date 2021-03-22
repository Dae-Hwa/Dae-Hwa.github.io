---
title: TIL-20210211
createdDate: "2021-02-11 17:51:46"
updatedDate: "2021-02-11 17:51:46"
author: 정대화
tags:
  - til
draft: false
---

- [Git 브랜치 배우기](https://learngitbranching.js.org/?locale=ko)으로 기본적인 동작을 학습했다. 어제 들었던 branch -f 에 관한 것도 문제에 있어 신기했다. 너무 잘 만든 것 같다. 머리가 좀 식으면 다음 단계들도 계속 도전해봐야겠다.

- 나도 [[yeon] 미션2: 체스판 생성 #51](https://github.com/codesquad-members-2021/java-chess/pull/51) 와 비슷한 상황인 것 같아 생각을 해봤다.
  pr1과 pr2가 있고 origin에서 upsteram으로 풀리퀘스트 요청을 하는 상황이다. pr1 이후 pr2 를 요청했고, pr1에 변경사항이 생겼을 경우, pr1은 수정하여 origin에 push할건데, 이 것을 pr2에서 사용하는 브랜치로 rebase해주면 이후 pr1이 upstream에 merge 되더라도 충돌이 일어나지 않을 것이다! 라고 생각했는데, 맞는지 모르겠다. 테스트도 할겸 풀리퀘스트를 추가로 날려볼까 생각중이다.

- 큐가 문제를 내줬다. 제인의 [리뷰](https://github.com/codesquad-members-2021/java-chess/pull/31#discussion_r573965768)에 달려있던 내용인데, 아래의 실행결과는 **YXYZ** 다. 부끄럽지만 처음에는 super 생략을 생각하지 못했고, 이후에는 실행 순서가 정확히 이해가 되지 않았다.

  ```java
  class X {
      Y b = new Y();

      X() {
          System.out.print("X");
      }
  }


  class Y {
      Y() {
          System.out.print("Y");
      }
  }


  class Z extends X {
      Y y = new Y();

      Z() {
          System.out.print("Z");
      }

      public static void main(String[] args) {
          new Z();
      }
  }
  ```

  해설을 읽어보니 static, super(), 필드 초기화, 생성자 블럭 실행의 순서로 실행된다고 한다. 그럼에도 정확히 이해가 안돼서 컴파일 시 바이트 코드가 그렇게 바뀐다는 글에서 힌트를 얻어 디컴파일을 해봤다.

  요약하자면, 컴파일하면

  1. 스태틱 필드와 스태틱 블록의 소스들이 스태틱 블록에 합쳐진다.

  2. 필드와 인스턴스 블록이 생성자 블록에 합쳐진다.

  그런데, 생성자 블록에 합쳐질때, 생성자에 작성된 소스보다 상위에 합쳐진다. 즉, 생성자에 직접 작성한 코드는 나중에 실행된다.

  ```java
  class X {
    Y b;

    X();
      Code:
        0: aload_0
        1: invokespecial #10                 // Method java/lang/Object."<init>":()V
        4: aload_0
        5: new           #12                 // class Y
        8: dup
        9: invokespecial #14                 // Method Y."<init>":()V
        12: putfield      #15                 // Field b:LY;
        15: getstatic     #17                 // Field java/lang/System.out:Ljava/io/PrintStream;
        18: ldc           #23                 // String X
        20: invokevirtual #25                 // Method java/io/PrintStream.print:(Ljava/lang/String;)V
        23: return
  }

  class Y {
    Y();
      Code:
        0: aload_0
        1: invokespecial #8                  // Method java/lang/Object."<init>":()V
        4: getstatic     #10                 // Field java/lang/System.out:Ljava/io/PrintStream;
        7: ldc           #16                 // String Y
        9: invokevirtual #18                 // Method java/io/PrintStream.print:(Ljava/lang/String;)V
        12: return
  }

  class Z extends X {
    Y y;

    Z();
      Code:
        0: aload_0
        1: invokespecial #10                 // Method X."<init>":()V
        4: aload_0
        5: new           #12                 // class Y
        8: dup
        9: invokespecial #14                 // Method Y."<init>":()V
        12: putfield      #15                 // Field y:LY;
        15: getstatic     #17                 // Field java/lang/System.out:Ljava/io/PrintStream;
        18: ldc           #23                 // String Z
        20: invokevirtual #25                 // Method java/io/PrintStream.print:(Ljava/lang/String;)V
        23: return

    public static void main(java.lang.String[]);
      Code:
        0: new           #1                  // class Z
        3: invokespecial #37                 // Method "<init>":()V
        6: return
  }

  ```

- 환경을 나눠서 하니 수월하게 환경설정을 완료했다. 폴더를 나눠서 설정을 넣었는데 만약 나중에 프로파일 설정도 필요하다면 빌드스크립트로 관리를 해야 할 것 같다. 하지만 지금은 테스트 서버를 따로 잡지 않을 예정이니, 프런트도 로컬에서 쉽게쉽게 실행시킬 수 있어야 한다. 따라서 프로파일은 최대한 지양할 예정이다.
