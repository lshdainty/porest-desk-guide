---
sidebar_position: 1
title: 메모
---

# 메모

짧은 메모를 색상 카드로 남겨둡니다.

## 화면 구성

- **카드 그리드**: 메모가 색상 카드로 나열됩니다
- **검색**: 제목 · 내용으로 메모를 찾습니다
- **태그 필터**: 전체 · 태그별로 좁혀 봅니다 — 태그는 [설정 → 메모 태그](../settings/memo-tag.md)에서 만듭니다. 아직 만든 태그가 없다면 "태그 없음" 묶음만 보입니다

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![메모 목록 — 색상 카드로 나열되고, 여러 줄 내용도 미리보기로 확인할 수 있습니다](/img/screens/memo-list.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![모바일 화면 — 태그 필터와 메모 목록](/img/screens/mobile-memo-list.png)

</TabItem>
</Tabs>

## 메모 생성

1. **[+ 메모 추가]**
2. **제목**과 **내용**을 입력합니다
3. 필요하면 **태그**와 **카드 색상**을 고르고, **고정**을 켜면 목록 상단에 항상 보이게 할 수 있습니다
4. **[저장]**

:::info[태그 선택칸에는 만들어둔 태그만 떠요]
새 태그 이름을 여기서 바로 지어낼 수 없습니다 — 목록에 없는 태그를 쓰고 싶다면 [설정 → 메모 태그](../settings/memo-tag.md)에서 먼저 만들어야 합니다. 아직 하나도 없다면 "태그 없음"만 고를 수 있습니다.
:::

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![메모 추가 — 제목·내용·태그·색상·고정 여부를 설정합니다](/img/screens/memo-add-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![메모 추가 — 제목·내용·태그·색상·고정 여부를 설정합니다](/img/screens/mobile-memo-add-form.png)

</TabItem>
</Tabs>

## 메모 수정

메모 카드를 눌러 상세를 열고 **[수정]** 을 누르면 같은 폼이 열려 제목 · 내용 · 태그 · 색상 · 고정 여부를 모두 바꿀 수 있습니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![메모 상세 — 하단의 삭제·수정 버튼 위치](/img/screens/memo-detail-actions.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![메모 상세 — 하단 시트로 열리고, 삭제·수정이 화면 폭 전체를 채우는 버튼입니다](/img/screens/mobile-memo-detail-actions.png)

</TabItem>
</Tabs>

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![메모 수정 폼 — 제목·내용·태그·색상을 모두 바꿀 수 있습니다](/img/screens/memo-edit-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![메모 수정 폼 — 제목·내용·태그·색상을 모두 바꿀 수 있습니다](/img/screens/mobile-memo-edit-form.png)

</TabItem>
</Tabs>

**고정**: 자주 보는 메모는 고정해 위쪽에 항상 보이게 합니다.

## 메모 삭제

상세의 **[삭제]** 를 누르고 확인 창에서 **[삭제]** 를 누릅니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![메모 삭제 확인 — 되돌릴 수 없습니다](/img/screens/memo-delete-confirm.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![메모 삭제 확인 — 되돌릴 수 없습니다](/img/screens/mobile-memo-delete-confirm.png)

</TabItem>
</Tabs>

:::danger[되돌릴 수 없고, 당일에 지우면 별빛도 함께 사라집니다]
"이 작업은 되돌릴 수 없습니다" — 삭제한 메모는 복구할 수 없습니다. 그날 쓴 메모로 별빛을 받았다면, **같은 날 안에 그 메모를 지울 경우 별빛도 함께 회수됩니다.** 다음 날 이후에 지우면 별빛은 그대로 유지됩니다 — 아래 [별빛](#메모도-별빛이-쌓여요) 항목 참고.
:::

## 메모도 별빛이 쌓여요

메모를 새로 쓰면 별빛이 +1 쌓입니다. 다만 **하루에 두 번까지만** — 그날 세 번째로 쓰는 메모부터는 별빛이 붙지 않습니다. 쓴 그날 안에 그 메모를 지우면 쌓였던 별빛도 함께 회수되지만, 다음 날 이후에 지우면 별빛은 그대로 유지됩니다.

## 다음 단계

- [메모 태그](../settings/memo-tag.md) — 메모를 분류할 태그를 만들고 관리합니다
