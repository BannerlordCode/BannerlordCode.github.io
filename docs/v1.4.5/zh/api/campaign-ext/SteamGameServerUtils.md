<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamGameServerUtils`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerUtils

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerUtils`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerUtils.cs`

## 概述

`SteamGameServerUtils` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSecondsSinceAppActive
`public static uint GetSecondsSinceAppActive()`

**用途 / Purpose:** 获取 `seconds since app active` 的当前值。

### GetSecondsSinceComputerActive
`public static uint GetSecondsSinceComputerActive()`

**用途 / Purpose:** 获取 `seconds since computer active` 的当前值。

### GetConnectedUniverse
`public static EUniverse GetConnectedUniverse()`

**用途 / Purpose:** 获取 `connected universe` 的当前值。

### GetServerRealTime
`public static uint GetServerRealTime()`

**用途 / Purpose:** 获取 `server real time` 的当前值。

### GetIPCountry
`public static string GetIPCountry()`

**用途 / Purpose:** 获取 `i p country` 的当前值。

### GetImageSize
`public static bool GetImageSize(int iImage, out uint pnWidth, out uint pnHeight)`

**用途 / Purpose:** 获取 `image size` 的当前值。

### GetImageRGBA
`public static bool GetImageRGBA(int iImage, byte pubDest, int nDestBufferSize)`

**用途 / Purpose:** 获取 `image r g b a` 的当前值。

### GetCurrentBatteryPower
`public static byte GetCurrentBatteryPower()`

**用途 / Purpose:** 获取 `current battery power` 的当前值。

### GetAppID
`public static AppId_t GetAppID()`

**用途 / Purpose:** 获取 `app i d` 的当前值。

### SetOverlayNotificationPosition
`public static void SetOverlayNotificationPosition(ENotificationPosition eNotificationPosition)`

**用途 / Purpose:** 设置 `overlay notification position` 的值或状态。

### IsAPICallCompleted
`public static bool IsAPICallCompleted(SteamAPICall_t hSteamAPICall, out bool pbFailed)`

**用途 / Purpose:** 处理 `is a p i call completed` 相关逻辑。

### GetAPICallFailureReason
`public static ESteamAPICallFailure GetAPICallFailureReason(SteamAPICall_t hSteamAPICall)`

**用途 / Purpose:** 获取 `a p i call failure reason` 的当前值。

### GetAPICallResult
`public static bool GetAPICallResult(SteamAPICall_t hSteamAPICall, IntPtr pCallback, int cubCallback, int iCallbackExpected, out bool pbFailed)`

**用途 / Purpose:** 获取 `a p i call result` 的当前值。

### GetIPCCallCount
`public static uint GetIPCCallCount()`

**用途 / Purpose:** 获取 `i p c call count` 的当前值。

### SetWarningMessageHook
`public static void SetWarningMessageHook(SteamAPIWarningMessageHook_t pFunction)`

**用途 / Purpose:** 设置 `warning message hook` 的值或状态。

### IsOverlayEnabled
`public static bool IsOverlayEnabled()`

**用途 / Purpose:** 处理 `is overlay enabled` 相关逻辑。

### BOverlayNeedsPresent
`public static bool BOverlayNeedsPresent()`

**用途 / Purpose:** 处理 `b overlay needs present` 相关逻辑。

### CheckFileSignature
`public static SteamAPICall_t CheckFileSignature(string szFileName)`

**用途 / Purpose:** 处理 `check file signature` 相关逻辑。

### ShowGamepadTextInput
`public static bool ShowGamepadTextInput(EGamepadTextInputMode eInputMode, EGamepadTextInputLineMode eLineInputMode, string pchDescription, uint unCharMax, string pchExistingText)`

**用途 / Purpose:** 处理 `show gamepad text input` 相关逻辑。

### GetEnteredGamepadTextLength
`public static uint GetEnteredGamepadTextLength()`

**用途 / Purpose:** 获取 `entered gamepad text length` 的当前值。

### GetEnteredGamepadTextInput
`public static bool GetEnteredGamepadTextInput(out string pchText, uint cchText)`

**用途 / Purpose:** 获取 `entered gamepad text input` 的当前值。

### GetSteamUILanguage
`public static string GetSteamUILanguage()`

**用途 / Purpose:** 获取 `steam u i language` 的当前值。

### IsSteamRunningInVR
`public static bool IsSteamRunningInVR()`

**用途 / Purpose:** 处理 `is steam running in v r` 相关逻辑。

### SetOverlayNotificationInset
`public static void SetOverlayNotificationInset(int nHorizontalInset, int nVerticalInset)`

**用途 / Purpose:** 设置 `overlay notification inset` 的值或状态。

### IsSteamInBigPictureMode
`public static bool IsSteamInBigPictureMode()`

**用途 / Purpose:** 处理 `is steam in big picture mode` 相关逻辑。

### StartVRDashboard
`public static void StartVRDashboard()`

**用途 / Purpose:** 处理 `start v r dashboard` 相关逻辑。

### IsVRHeadsetStreamingEnabled
`public static bool IsVRHeadsetStreamingEnabled()`

**用途 / Purpose:** 处理 `is v r headset streaming enabled` 相关逻辑。

### SetVRHeadsetStreamingEnabled
`public static void SetVRHeadsetStreamingEnabled(bool bEnabled)`

**用途 / Purpose:** 设置 `v r headset streaming enabled` 的值或状态。

### IsSteamChinaLauncher
`public static bool IsSteamChinaLauncher()`

**用途 / Purpose:** 处理 `is steam china launcher` 相关逻辑。

### InitFilterText
`public static bool InitFilterText(uint unFilterOptions = 0u)`

**用途 / Purpose:** 初始化 `filter text` 的状态、资源或绑定。

### FilterText
`public static int FilterText(ETextFilteringContext eContext, CSteamID sourceSteamID, string pchInputMessage, out string pchOutFilteredText, uint nByteSizeOutFilteredText)`

**用途 / Purpose:** 处理 `filter text` 相关逻辑。

### GetIPv6ConnectivityState
`public static ESteamIPv6ConnectivityState GetIPv6ConnectivityState(ESteamIPv6ConnectivityProtocol eProtocol)`

**用途 / Purpose:** 获取 `i pv6 connectivity state` 的当前值。

### IsSteamRunningOnSteamDeck
`public static bool IsSteamRunningOnSteamDeck()`

**用途 / Purpose:** 处理 `is steam running on steam deck` 相关逻辑。

### ShowFloatingGamepadTextInput
`public static bool ShowFloatingGamepadTextInput(EFloatingGamepadTextInputMode eKeyboardMode, int nTextFieldXPosition, int nTextFieldYPosition, int nTextFieldWidth, int nTextFieldHeight)`

**用途 / Purpose:** 处理 `show floating gamepad text input` 相关逻辑。

### SetGameLauncherMode
`public static void SetGameLauncherMode(bool bLauncherMode)`

**用途 / Purpose:** 设置 `game launcher mode` 的值或状态。

### DismissFloatingGamepadTextInput
`public static bool DismissFloatingGamepadTextInput()`

**用途 / Purpose:** 处理 `dismiss floating gamepad text input` 相关逻辑。

## 使用示例

```csharp
SteamGameServerUtils.GetSecondsSinceAppActive();
```

## 参见

- [完整类目录](../catalog)