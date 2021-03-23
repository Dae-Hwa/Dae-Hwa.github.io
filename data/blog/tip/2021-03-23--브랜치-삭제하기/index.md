---
title: 브랜치 삭제하기
createdDate: "2021-03-23 10:55:25"
updatedDate: "2021-03-23 10:55:25"
author: 정대화
tags:
  - git
draft: false
---

## 로컬 브랜치 삭제

```git
git branch -d <branch>
```

위의 삭제 방법은 fully merged 상태에서 가능하다. fully merged는 말 그대로, 완전히 머지 된 상태다. 즉 다른 브랜치에 현재 브랜치의 내용이 머지돼있어야 삭제 가능하다.

> 머지 상태는 아래의 명령어로 확인할 수 있다.
> ```git
> git branch --merged [branch]
> git branch --no-merged [branch]
> ```

만약 이와 상관없이 그냥 지우고 싶으면 `-d`를 `-D`로 바꿔서 해준다.

```git
git branch -D <branch>
```

## 원격 브랜치 삭제

```git
git push <remote> -d <branch>
```

아래와 같이 축약할 수 있다고 한다.
```git
git push <remote> :<branch>
```

---

**Refences**
- https://www.lesstif.com/gitbook/git-delete-remote-branch-20776547.html

- https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely

- https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EA%B4%80%EB%A6%AC