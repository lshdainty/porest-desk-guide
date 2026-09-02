---
sidebar_position: 11
title: 데이터 내보내기 · 가져오기
---

# 데이터 내보내기 · 가져오기

:::info[Pro 전용 기능입니다]
데이터 가져오기 · 내보내기는 [Porest Pro](../subscription/subscription.md) 구독자를 위한 기능입니다.
:::

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![데이터 내보내기 — 기간과 데이터 종류(거래내역·자산·예산·카테고리·메모·캘린더·할일)를 골라 CSV·Excel·JSON으로 내려받습니다](/img/screens/settings-data-transfer.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![데이터 내보내기 — 기간과 데이터 종류를 골라 CSV·Excel·JSON으로 내려받습니다](/img/screens/mobile-settings-data-transfer.png)

</TabItem>
</Tabs>

## 내보내기

1. **[내보내기]** 탭에서 **기간**(이번 달 · 지난 달 · 최근 3개월 · 올해 · 사용자 지정)을 고릅니다
2. **데이터 종류**(거래내역 · 자산 · 계좌 · 예산 설정 · 카테고리 · 메모 · 캘린더 일정 · 할 일)를 필요한 만큼 체크합니다 — 여러 종류를 고르면 ZIP으로 묶입니다
3. **형식**(CSV · Excel · JSON)을 골라 내려받습니다

## 가져오기

1. **[가져오기]** 탭에서 **(1) 파일 선택** — "어떤 앱에서 가져오나요?"에서 기존에 쓰던 가계부 앱을 고르면 그 앱의 열 구조를 자동으로 맞춰주고, **Porest 백업**을 고르면 이전에 내보내기 한 파일을 그대로 다시 가져올 수 있습니다. CSV · Excel(.xlsx, .xls) 파일을 최대 10MB까지 올릴 수 있습니다
2. **(2) 열 매핑** — 파일의 각 열이 Porest의 어떤 항목(날짜 · 금액 · 카테고리 등)에 해당하는지 확인 · 수정합니다
3. **(3) 완료** — 미리보기에서 중복 · 오류를 확인한 뒤 확정합니다

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![가져오기 — 어떤 앱에서 가져올지 고르고 파일을 올립니다](/img/screens/settings-data-import.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![가져오기 — 어떤 앱에서 가져올지 고르고 파일을 올립니다](/img/screens/mobile-settings-data-import.png)

</TabItem>
</Tabs>

:::info[가져온 데이터는 기존 거래에 "추가"됩니다 — 덮어쓰지 않아요]
화면에 그대로 적혀 있듯, 가져오기는 항상 **기존 거래에 추가되는 방식**이라 기존 데이터를 지우거나 덮어쓰지 않습니다. 다만 그만큼 **같은 파일을 두 번 가져오면 거래가 중복으로 쌓일 수 있으니**, 완료 전 미리보기 단계에서 중복 여부를 꼭 확인하세요.
:::
