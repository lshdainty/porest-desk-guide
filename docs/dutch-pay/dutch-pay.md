---
sidebar_position: 1
title: 더치페이
---

# 더치페이

친구 · 모임과 함께 쓴 돈을 나누고, 누가 얼마를 냈는지 깔끔하게 정산합니다.

## 화면 구성

- **받을 돈 / 보낼 돈**: 진행 중인 정산을 기준으로 내가 받아야 할 금액과 보내야 할 금액의 합계
- **진행 중 / 완료 / 친구** 탭: 아직 정산이 안 끝난 건, 모두 정산된 건, 함께 정산한 친구 목록
- **자주 정산하는 친구**: 최근 함께 정산한 횟수 순
- **이번 달 정산 통계**: 이번 달에 만든 정산 건수 · 총 금액 · 평균 인원

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![더치페이 메인 — 진행 중인 정산과 받을 돈, 자주 정산하는 친구, 이번 달 통계를 한눈에 봅니다](/img/screens/dutch-pay-detail.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![모바일 화면 — 받을 돈·보낼 돈과 진행 중인 정산 목록](/img/screens/mobile-dutch-pay-main.png)

</TabItem>
</Tabs>

## 정산 생성

1. **[+ 정산 만들기]**
2. **(1/2)** 정산 이름, 장소(선택), 총 금액, 날짜를 입력하고 **[다음]**
3. **(2/2)** 함께 나눌 사람을 **[+ 추가]** 로 이름 입력해 추가합니다 — 인원이 정해지면 **1인당 금액이 자동으로 균등 계산**됩니다
4. 각 참여자 옆 체크박스로 포함 여부를 정하고, **결제자**(실제로 돈을 낸 사람)를 지정합니다 — 기본값은 "나"입니다
5. **[정산 만들기]**

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![정산 만들기 (1/2) — 정산 이름·장소·총 금액·날짜](/img/screens/dutch-pay-create-step1.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![정산 만들기 (1/2) — 정산 이름·장소·총 금액·날짜](/img/screens/mobile-dutch-pay-create-step1.png)

</TabItem>
</Tabs>

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![정산 만들기 (2/2) — 참여자를 추가하면 1인당 금액이 자동으로 균등 계산됩니다](/img/screens/dutch-pay-create-step2.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![정산 만들기 (2/2) — 참여자를 추가하면 1인당 금액이 자동으로 균등 계산됩니다](/img/screens/mobile-dutch-pay-create-step2.png)

</TabItem>
</Tabs>

:::danger[수정 기능이 없습니다]
더치페이는 만든 뒤 **금액 · 참여자 · 결제자를 고치는 수정 기능이 없습니다.** 인원이나 금액을 잘못 입력했다면 [삭제](#정산-삭제)하고 처음부터 다시 만들어야 합니다.
:::

## 정산 상세에서 할 수 있는 것

정산을 누르면 상세 화면이 열립니다. 결제자는 **"결제자"** 로 표시되고 정산 대상(빚진 사람 목록)에서 빠집니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![정산 상세 — 참여자별 요청·완료 체크, 전체 정산 완료, 일괄 요청, 삭제 버튼](/img/screens/dutch-pay-detail-actions.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![정산 상세 — 참여자별 요청·완료 체크, 전체 정산 완료, 일괄 요청, 삭제 버튼](/img/screens/mobile-dutch-pay-detail-actions.png)

</TabItem>
</Tabs>

- **요청**: 참여자에게 송금을 요청합니다. **일괄 요청**은 아직 정산하지 않은 모든 참여자에게 한 번에 요청합니다.

:::warning[요청은 아직 실제로 발송되지 않습니다]
[요청] 을 눌러도 실제로 카카오톡 · 문자로 메시지가 가지는 않습니다. 앱 안에서 "OO님에게 송금 요청을 보냈어요 — 추후 카카오톡 · 문자 연동 예정"이라는 안내만 뜨는, **아직 준비 중인 기능**입니다.
:::

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![요청 버튼을 눌렀을 때 뜨는 안내 — 실제 메시지는 아직 나가지 않습니다](/img/screens/dutch-pay-request-toast.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![요청 버튼을 눌렀을 때 뜨는 안내 — 실제 메시지는 아직 나가지 않습니다](/img/screens/mobile-dutch-pay-request-toast.png)

</TabItem>
</Tabs>

- **완납 체크(✓)**: 참여자가 실제로 돈을 보내면 체크합니다. 체크하면 그 사람은 "정산 완료"로 표시되고 요청 · 체크 버튼이 사라집니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![참여자 한 명이 완납 체크된 상태 — 되돌리는 버튼이 보이지 않습니다](/img/screens/dutch-pay-individual-complete.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![참여자가 완납 체크된 상태 — 되돌리는 버튼이 보이지 않습니다](/img/screens/mobile-dutch-pay-individual-complete.png)

</TabItem>
</Tabs>

:::danger[완납 체크는 되돌릴 수 없어 보입니다]
개별 완납 체크에는 취소 · 되돌리기 버튼이 없습니다. 잘못 체크했다면 되돌릴 방법이 화면에 보이지 않으니, 실제로 입금을 확인한 뒤에만 체크하세요.
:::

- **전체 정산 완료**: 아직 안 낸 사람까지 한 번에 전부 완납 처리합니다. 모든 참여자가 완료되면 이 버튼과 [일괄 요청] 버튼은 화면에서 사라지고, 정산은 **완료** 탭으로 옮겨집니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![전체 참여자가 정산 완료된 상태 — 정산이 완료 탭으로 옮겨집니다](/img/screens/dutch-pay-all-complete.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![전체 참여자가 정산 완료된 상태 — 참여자가 결제자 한 명뿐이면 완납 체크 한 번으로 바로 이 상태가 됩니다](/img/screens/mobile-dutch-pay-all-complete.png)

</TabItem>
</Tabs>

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![더치페이 목록의 완료 탭 — 완료된 정산은 체크 아이콘과 함께 표시됩니다](/img/screens/dutch-pay-completed-tab.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![더치페이 목록의 완료 탭 — 완료된 정산은 체크 아이콘과 함께 표시됩니다](/img/screens/mobile-dutch-pay-completed-tab.png)

</TabItem>
</Tabs>

## 정산 삭제

상세 화면의 **[삭제]** 를 누르고 확인 창에서 **[삭제]** 를 누릅니다.

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![정산 삭제 확인 — 되돌릴 수 없습니다](/img/screens/dutch-pay-delete-confirm.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![정산 삭제 확인 — 되돌릴 수 없습니다](/img/screens/mobile-dutch-pay-delete-confirm.png)

</TabItem>
</Tabs>

:::danger[삭제하면 정산 통계·친구 기록에서도 완전히 사라집니다]
"이 작업은 되돌릴 수 없습니다" — 진행 중이든 완료된 정산이든 삭제하면 그 즉시 복구할 수 없습니다. 완료된 정산을 삭제하면 단순히 목록에서만 없어지는 게 아니라, **"자주 정산하는 친구"의 횟수와 "이번 달 정산 통계"의 건수 · 금액 · 평균 인원까지 그 정산이 없었던 것처럼 다시 계산됩니다.** 정산 기록을 남겨두고 싶다면 삭제 대신 완료 상태로 그대로 두는 걸 권장합니다.
:::

## 다음 단계

- [거래내역](../expense/transactions.md) — 더치페이로 정산한 내용을 가계부 거래와 연결할 수도 있습니다
