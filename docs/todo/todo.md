---
sidebar_position: 1
title: 할 일 관리
---

# 할 일 관리

오늘 할 일부터 나중에 할 일까지 등록하고, 완료 여부와 중요도를 관리합니다.

## 화면 구성

- **필터**: 오늘 · 이번 주 · 전체 · 완료됨 중 골라서 봅니다
- **우선순위**: 상 · 중 · 하 세 단계
- **태그**: 할 일마다 태그를 붙여 분류합니다

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![할 일 목록 — 오늘·이번 주·전체·완료 필터와 오른쪽의 밤하늘 진행률·태그 분포·우선순위 현황](/img/screens/todo-list.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![모바일 화면 — 오늘 할 일과 완료율, 밤하늘 진행률을 함께 보여줍니다](/img/screens/mobile-todo-list.png)

</TabItem>
</Tabs>

## 할 일 생성

오른쪽 위(모바일은 오른쪽 아래) **[+ 할 일 추가]** 버튼 하나로 만듭니다 — 데스크톱·모바일 모두 같은 폼이 열립니다.

1. **제목**을 입력합니다
2. **마감일**(기본값 오늘), **태그**(기본값 "태그 없음"), **우선순위**(중요 · 보통(기본값) · 여유)를 필요하면 고릅니다
3. 필요하면 **메모**를 남깁니다
4. **[저장]**

:::info[예전에는 제목만 쓰고 Enter로 바로 등록하는 "빠르게 추가" 입력창이 따로 있었어요]
지금은 데스크톱에도 그 입력창이 없고, 위 폼 하나로 통일되었습니다. 마감일 · 우선순위가 이미 기본값(오늘 · 보통)으로 채워져 있어 제목만 쓰고 바로 저장해도 예전 "빠르게 추가"와 같은 결과가 됩니다.
:::

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![할 일 추가 — 제목·마감일·태그·우선순위·메모를 한 폼에서 설정합니다. 마감일은 오늘, 우선순위는 보통이 기본값입니다](/img/screens/todo-add-detail-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![할 일 추가 — 데스크톱과 같은 구성의 폼입니다](/img/screens/mobile-todo-add-detail-form.png)

</TabItem>
</Tabs>

:::tip[지난 날짜도 마감일로 잡을 수 있어요]
마감일이 이미 지난 날짜여도 저장이 막히지 않습니다. 지난 일을 기록용으로 남겨두고 싶을 때 유용합니다.
:::

## 할 일 수정

목록에서 할 일을 눌러 상세를 열고 **[수정]** 을 누르면 추가할 때와 같은 폼이 열립니다. 제목 · 마감일 · 태그 · 우선순위 · 메모를 모두 바꿀 수 있습니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![할 일 상세 — 하단의 수정·삭제 버튼 위치](/img/screens/todo-detail-actions.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![할 일 상세 — 하단 시트로 열리고, 삭제·수정이 화면 폭 전체를 채우는 버튼입니다](/img/screens/mobile-todo-detail-actions.png)

</TabItem>
</Tabs>

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![할 일 수정 폼 — 제목을 포함한 모든 값을 다시 고칠 수 있습니다](/img/screens/todo-edit-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![할 일 수정 폼 — 제목을 포함한 모든 값을 다시 고칠 수 있습니다](/img/screens/mobile-todo-edit-form.png)

</TabItem>
</Tabs>

## 완료 처리

목록에서 동그라미를 체크 한 번으로 완료 처리합니다. 완료하면 우선순위에 따라 별빛이 쌓입니다(아래 [별자리 도감](#별자리-도감) 참고). 체크를 다시 풀면 "대기" 상태로 돌아갑니다.

## 할 일 삭제

상세 화면의 **[삭제]** 를 누르고 확인 창에서 **[삭제]** 를 누릅니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![할 일 삭제 확인 — 되돌릴 수 없습니다](/img/screens/todo-delete-confirm.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![할 일 삭제 확인 — 되돌릴 수 없습니다](/img/screens/mobile-todo-delete-confirm.png)

</TabItem>
</Tabs>

:::danger[되돌릴 수 없지만, 이미 받은 별빛은 그대로 남습니다]
"이 작업은 되돌릴 수 없습니다" — 삭제한 할 일은 복구할 수 없습니다. 다만 완료 처리로 별빛을 이미 받은 할 일을 삭제해도 **그 별빛은 회수되지 않고 그대로 남습니다** — 당일에 지워도 마찬가지입니다. 같은 날 삭제하면 별빛까지 함께 회수되는 [메모](../memo/memo.md#메모도-별빛이-쌓여요)와는 다른 동작입니다.
:::

## 별자리 도감

할 일을 완료하면 우선순위에 따라 별빛이 쌓입니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![할 일을 완료하면 뜨는 별빛 적립 안내 — "보통" 우선순위라 +2, 별자리 진행률이 2/6으로 올라감](/img/screens/todo-star-toast.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![할 일을 완료하면 뜨는 별빛 적립 안내 — "보통" 우선순위라 +2](/img/screens/mobile-todo-star-toast.png)

</TabItem>
</Tabs>

| 우선순위 | 별빛 |
|:---:|:---:|
| 상 | +3 |
| 중 | +2 |
| 하 | +1 |

별빛은 각 할 일당 **평생 딱 한 번만** 쌓입니다. 완료를 취소했다가 다시 체크해도 별빛이 또 쌓이지는 않고, 그 대신 **같은 날 안에서** 취소 → 재체크하면 아까 쌓였던 별빛이 그대로 복원됩니다(다음 날로 넘어가면 복원되지 않습니다).

앱에서는 전용 **밤하늘** 화면에서 별자리를 감상하고, 지금까지의 기록을 리포트로 볼 수 있습니다.

## 마감 알림

오늘 또는 내일이 마감인 완료되지 않은 할 일은 **매일 아침 9시**에 한 번 알림이 옵니다.

## 다음 단계

- [캘린더](../calendar/calendar.md) — 마감일이 있는 할 일은 캘린더에서도 확인할 수 있습니다
