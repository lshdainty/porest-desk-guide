---
sidebar_position: 6
title: 프리셋
---

# 프리셋

자주 입력하는 거래를 프리셋으로 저장해두면, [거래 추가](../expense/transactions.md)에서 불러오기 한 번으로 같은 내용을 다시 입력할 수 있습니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![프리셋 관리 — 저장한 프리셋 수와 지출/수입/이체 개수, 사용 횟수, 정렬 방식(사용 많은 순·최근 사용·이름순)](/img/screens/settings-preset.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![프리셋 관리 — 저장한 프리셋 수와 지출/수입/이체 개수, 사용 횟수, 정렬 방식](/img/screens/mobile-settings-preset.png)

</TabItem>
</Tabs>

## 프리셋 생성

1. **[+ 프리셋 추가]**
2. **유형**(지출 · 수입 · **이체**), **프리셋 이름**(최대 12자 · 이미 있는 프리셋과 같은 이름이면 저장하기 전에 알려 줍니다), **카테고리**, **기본 내역**(거래처)을 입력합니다
3. 필요하면 **메모**로 이 프리셋에 대한 설명을 남기고, **결제 수단**, **계좌 · 카드**를 미리 정해둡니다
4. **고정 금액 사용**을 켜면 금액까지 프리셋에 저장되고, 꺼두면 불러올 때마다 금액만 비워둔 채로 열립니다(매번 금액이 달라지는 거래에 편리합니다)
5. **[추가]**

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![프리셋 추가 — 고정 금액 사용을 꺼두면 금액은 매번 비워둔 채로 불러옵니다](/img/screens/settings-preset-add-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![프리셋 추가 — 고정 금액 사용을 꺼두면 금액은 매번 비워둔 채로 불러옵니다](/img/screens/mobile-settings-preset-add-form.png)

</TabItem>
</Tabs>

## 이체 프리셋

유형에서 **[이체]** 를 고르면 카테고리 · 기본 내역 대신 **출금 계좌 · 입금 계좌 · 수수료** 를 미리 정해둡니다. 늘 같은 두 계좌 사이에서 금액만 바꿔 옮길 때(비상금 넣기, 생활비 통장으로 이체 등) 편합니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![프리셋 추가의 이체 유형 — 출금 계좌·입금 계좌·수수료를 미리 정해둡니다](/img/screens/settings-preset-transfer-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![프리셋 추가의 이체 유형 — 출금 계좌·입금 계좌·수수료를 미리 정해둡니다](/img/screens/mobile-settings-preset-transfer-form.png)

</TabItem>
</Tabs>

:::info[금액을 비워둔 채로 저장할 수 있어요]
**고정 금액 사용**을 꺼두면 금액 없이도 저장됩니다 — 목록에는 "금액 비움"으로 표시되고, 불러올 때 두 계좌만 채워진 채 금액 칸이 비어서 열립니다. 매달 넣는 금액이 달라지는 저축 이체에 맞는 방식입니다.
:::

**거래 추가 화면에서는 지금 보고 있는 탭의 프리셋만 보입니다.** 지출 탭에는 지출 프리셋만, 이체 탭에는 이체 프리셋만 칩으로 뜹니다 — 종류가 다른 프리셋을 잘못 눌러 엉뚱한 값이 채워지지 않게 하기 위해서입니다. 프리셋을 적용하면 "프리셋 값이 채워졌어요. 금액·내역만 수정해서 저장하세요."라는 안내와 **[해제]** 가 함께 나오고, 반대로 지금 채워둔 값을 새 프리셋으로 만들고 싶으면 같은 자리의 **[+ 현재 입력값 저장]** 을 누릅니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![거래 추가의 이체 탭 — 이체 프리셋만 칩으로 보이고, 오른쪽에 [+ 현재 입력값 저장]이 있습니다](/img/screens/expense-transfer-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![거래 추가의 이체 탭 — 이체 프리셋만 칩으로 보이고, 오른쪽에 [+ 현재 입력값 저장]이 있습니다](/img/screens/mobile-expense-transfer-form.png)

</TabItem>
</Tabs>

## 프리셋 수정

행의 **연필 아이콘**을 누르면 추가할 때와 같은 폼이 열려 이름 · 카테고리 · 내역 · 고정 금액 여부를 모두 바꿀 수 있습니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![프리셋 수정](/img/screens/settings-preset-edit-form.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![프리셋 수정](/img/screens/mobile-settings-preset-edit-form.png)

</TabItem>
</Tabs>

## 프리셋 삭제

행의 **휴지통 아이콘**을 누르고 확인 창에서 **[삭제]** 를 누릅니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![프리셋 삭제 확인 — 이미 저장된 거래 내역에는 영향이 없습니다](/img/screens/settings-preset-delete-confirm.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![프리셋 삭제 확인 — 이미 저장된 거래 내역에는 영향이 없습니다](/img/screens/mobile-settings-preset-delete-confirm.png)

</TabItem>
</Tabs>

:::info[삭제해도 이미 불러와 저장했던 거래에는 영향이 없습니다]
프리셋은 거래를 빠르게 입력하기 위한 "틀"일 뿐이라, 삭제해도 그 프리셋으로 이미 저장해둔 거래내역은 그대로 남습니다. 앞으로 그 프리셋을 다시 불러올 수 없게 될 뿐입니다.
:::
