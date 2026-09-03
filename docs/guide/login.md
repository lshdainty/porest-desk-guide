---
sidebar_position: 2
title: 로그인하기
---

# 로그인하기

Desk는 아이디 · 비밀번호를 따로 만들지 않습니다. **POREST 통합 로그인(SSO)** 계정 하나로 Desk를 포함한 모든 POREST 서비스에 로그인합니다.

## 웹에서 로그인

1. [desk.porest.cloud](https://desk.porest.cloud) 접속
2. **[로그인]** 버튼 클릭 → 통합 로그인 화면으로 이동

<Tabs groupId="device">
<TabItem value="desktop" label="데스크톱">

![Desk 로그인 화면의 SSO 로그인 버튼](/img/screens/login-button.png)

</TabItem>
<TabItem value="mobile" label="모바일">

![Desk 로그인 화면의 SSO 로그인 버튼](/img/screens/mobile-login-button.png)

</TabItem>
</Tabs>
3. 계정으로 로그인하면 자동으로 Desk 화면으로 돌아옵니다

세션이 만료되면 자동으로 로그인 화면으로 다시 이동합니다 — 다시 로그인만 하면 하던 화면으로 돌아옵니다.

## 앱 설치

앱은 스토어에 올라가 있지 않아 직접 설치합니다. [desk.porest.cloud/download](https://desk.porest.cloud/download) 에서:

- **Android**: APK 파일을 내려받아 직접 설치 (출처를 알 수 없는 앱 설치 허용 필요)
- **iOS**: 서명 인증서가 없어 AltStore 등으로 설치 — 페이지 안내에 따라 소스 주소를 등록하거나 IPA 파일을 내려받습니다

### Android — 설치 · 업데이트 시 나오는 보안 경고 처리하기

스토어를 거치지 않고 APK를 직접 설치·업데이트하기 때문에, 삼성 기기는 기본적으로 이 설치를 막습니다.
아래 순서대로 한 번만 풀어주면 됩니다.

**1. 설정 → 보안 및 개인정보 보호로 이동**

![설정 앱의 보안 및 개인정보 보호 메뉴](/img/screens/android-settings-security-menu.png)

**2. 계정 보안 → 보안 위험 자동 차단으로 이동**

"인증되지 않은 출처의 앱 차단" 항목이 바로 이 설치를 막는 기능입니다.

![계정 보안 화면](/img/screens/android-account-security.png)

**3. 보안 위험 자동 차단을 잠시 꺼줍니다**

"사용 안 함"으로 전환하면 30분 동안만 꺼져 있다가 자동으로 다시 켜집니다. 설치·업데이트가 끝나면
따로 되돌릴 필요 없이 30분 뒤 알아서 원래 상태로 돌아갑니다.

![보안 위험 자동 차단 끄기](/img/screens/android-auto-blocker-off.png)

**4. APK 실행 시 "앱 검사 권장됨" 화면이 뜨면 → 검사 없이 설치**

Google Play 프로텍트가 스토어 밖에서 온 앱을 검사하겠냐고 묻습니다. **검사 없이 설치**를 선택하면
바로 설치가 진행됩니다.

![Play 프로텍트 앱 검사 권장 화면](/img/screens/android-play-protect-scan.png)

**5. "잠재적으로 유해한 앱 감지됨" 경고가 떠도 정상입니다**

다운로드 페이지 링크를 통해 막 설치된 앱이라 Play 프로텍트가 피싱 패턴으로 오탐하는 경우가 많습니다.
**닫기**를 눌러 넘어가면 됩니다.

![잠재적으로 유해한 앱 감지됨 팝업](/img/screens/android-harmful-app-detected.png)

**6. 이후에도 계속 경고가 뜬다면 → Play 프로텍트의 "안전하지 않은 앱" 목록에서 직접 실행**

앱을 삭제하지 말고, 목록에서 Porest Desk를 눌러 뜨는 확인창에서 **열기**를 선택하면 정상적으로
실행됩니다.

![안전하지 않은 앱 목록](/img/screens/android-unsafe-app-list.png)

![안전하지 않은 앱 목록에서 열기 선택](/img/screens/android-unsafe-app-open-confirm.png)

:::tip[매번 이 과정을 거쳐야 하나요?]
새 APK를 설치·업데이트할 때마다(서명이 바뀔 때마다) 다시 나올 수 있는 경고입니다. 앱을 삭제하지 말고
그때그때 위 순서대로 **닫기 / 열기**로 넘어가면 됩니다.
:::

## 앱에서 로그인

앱의 로그인 버튼을 누르면 앱 안이 아니라 **휴대폰의 기본 브라우저**가 열립니다(구글 로그인 등 일부 방식은 인앱 브라우저를 막기 때문입니다). 로그인을 마치면 브라우저가 자동으로 앱으로 돌아옵니다.

:::tip[브라우저에서 앱으로 안 돌아올 때]
로그인은 됐는데 앱 화면으로 안 돌아온다면, 브라우저 화면을 닫고 Desk 앱을 다시 열어보세요. 로그인 상태는 유지되어 있습니다.
:::

## 로그인된 기기 확인

여러 기기에서 로그인해 두었다면 **설정 → 계정 → 로그인된 기기**에서 목록을 확인하고, 더 이상 쓰지 않는 기기는 원격으로 로그아웃할 수 있습니다. 자세한 내용은 [계정 설정](../settings/account.md)에서 다룹니다.

## 다음 단계

- [화면 구성](./layout.md)
