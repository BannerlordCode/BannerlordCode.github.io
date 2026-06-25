---
title: "SteamUser"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamUser`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamUser

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamUser`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamUser.cs`

## 概述

`SteamUser` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetHSteamUser
`public static HSteamUser GetHSteamUser()`

**用途 / Purpose:** 获取 `h steam user` 的当前值。

### BLoggedOn
`public static bool BLoggedOn()`

**用途 / Purpose:** 处理 `b logged on` 相关逻辑。

### GetSteamID
`public static CSteamID GetSteamID()`

**用途 / Purpose:** 获取 `steam i d` 的当前值。

### InitiateGameConnection_DEPRECATED
`public static int InitiateGameConnection_DEPRECATED(byte pAuthBlob, int cbMaxAuthBlob, CSteamID steamIDGameServer, uint unIPServer, ushort usPortServer, bool bSecure)`

**用途 / Purpose:** 初始化 `iate game connection_ d e p r e c a t e d` 的状态、资源或绑定。

### TerminateGameConnection_DEPRECATED
`public static void TerminateGameConnection_DEPRECATED(uint unIPServer, ushort usPortServer)`

**用途 / Purpose:** 处理 `terminate game connection_ d e p r e c a t e d` 相关逻辑。

### TrackAppUsageEvent
`public static void TrackAppUsageEvent(CGameID gameID, int eAppUsageEvent, string pchExtraInfo = "")`

**用途 / Purpose:** 处理 `track app usage event` 相关逻辑。

### GetUserDataFolder
`public static bool GetUserDataFolder(out string pchBuffer, int cubBuffer)`

**用途 / Purpose:** 获取 `user data folder` 的当前值。

### StartVoiceRecording
`public static void StartVoiceRecording()`

**用途 / Purpose:** 处理 `start voice recording` 相关逻辑。

### StopVoiceRecording
`public static void StopVoiceRecording()`

**用途 / Purpose:** 处理 `stop voice recording` 相关逻辑。

### GetAvailableVoice
`public static EVoiceResult GetAvailableVoice(out uint pcbCompressed)`

**用途 / Purpose:** 获取 `available voice` 的当前值。

### GetVoice
`public static EVoiceResult GetVoice(bool bWantCompressed, byte pDestBuffer, uint cbDestBufferSize, out uint nBytesWritten)`

**用途 / Purpose:** 获取 `voice` 的当前值。

### DecompressVoice
`public static EVoiceResult DecompressVoice(byte pCompressed, uint cbCompressed, byte pDestBuffer, uint cbDestBufferSize, out uint nBytesWritten, uint nDesiredSampleRate)`

**用途 / Purpose:** 处理 `decompress voice` 相关逻辑。

### GetVoiceOptimalSampleRate
`public static uint GetVoiceOptimalSampleRate()`

**用途 / Purpose:** 获取 `voice optimal sample rate` 的当前值。

### GetAuthSessionTicket
`public static HAuthTicket GetAuthSessionTicket(byte pTicket, int cbMaxTicket, out uint pcbTicket)`

**用途 / Purpose:** 获取 `auth session ticket` 的当前值。

### BeginAuthSession
`public static EBeginAuthSessionResult BeginAuthSession(byte pAuthTicket, int cbAuthTicket, CSteamID steamID)`

**用途 / Purpose:** 处理 `begin auth session` 相关逻辑。

### EndAuthSession
`public static void EndAuthSession(CSteamID steamID)`

**用途 / Purpose:** 处理 `end auth session` 相关逻辑。

### CancelAuthTicket
`public static void CancelAuthTicket(HAuthTicket hAuthTicket)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel auth ticket`。

### UserHasLicenseForApp
`public static EUserHasLicenseForAppResult UserHasLicenseForApp(CSteamID steamID, AppId_t appID)`

**用途 / Purpose:** 处理 `user has license for app` 相关逻辑。

### BIsBehindNAT
`public static bool BIsBehindNAT()`

**用途 / Purpose:** 处理 `b is behind n a t` 相关逻辑。

### AdvertiseGame
`public static void AdvertiseGame(CSteamID steamIDGameServer, uint unIPServer, ushort usPortServer)`

**用途 / Purpose:** 处理 `advertise game` 相关逻辑。

### RequestEncryptedAppTicket
`public static SteamAPICall_t RequestEncryptedAppTicket(byte pDataToInclude, int cbDataToInclude)`

**用途 / Purpose:** 处理 `request encrypted app ticket` 相关逻辑。

### GetEncryptedAppTicket
`public static bool GetEncryptedAppTicket(byte pTicket, int cbMaxTicket, out uint pcbTicket)`

**用途 / Purpose:** 获取 `encrypted app ticket` 的当前值。

### GetGameBadgeLevel
`public static int GetGameBadgeLevel(int nSeries, bool bFoil)`

**用途 / Purpose:** 获取 `game badge level` 的当前值。

### GetPlayerSteamLevel
`public static int GetPlayerSteamLevel()`

**用途 / Purpose:** 获取 `player steam level` 的当前值。

### RequestStoreAuthURL
`public static SteamAPICall_t RequestStoreAuthURL(string pchRedirectURL)`

**用途 / Purpose:** 处理 `request store auth u r l` 相关逻辑。

### BIsPhoneVerified
`public static bool BIsPhoneVerified()`

**用途 / Purpose:** 处理 `b is phone verified` 相关逻辑。

### BIsTwoFactorEnabled
`public static bool BIsTwoFactorEnabled()`

**用途 / Purpose:** 处理 `b is two factor enabled` 相关逻辑。

### BIsPhoneIdentifying
`public static bool BIsPhoneIdentifying()`

**用途 / Purpose:** 处理 `b is phone identifying` 相关逻辑。

### BIsPhoneRequiringVerification
`public static bool BIsPhoneRequiringVerification()`

**用途 / Purpose:** 处理 `b is phone requiring verification` 相关逻辑。

### GetMarketEligibility
`public static SteamAPICall_t GetMarketEligibility()`

**用途 / Purpose:** 获取 `market eligibility` 的当前值。

### GetDurationControl
`public static SteamAPICall_t GetDurationControl()`

**用途 / Purpose:** 获取 `duration control` 的当前值。

### BSetDurationControlOnlineState
`public static bool BSetDurationControlOnlineState(EDurationControlOnlineState eNewState)`

**用途 / Purpose:** 处理 `b set duration control online state` 相关逻辑。

## 使用示例

```csharp
SteamUser.GetHSteamUser();
```

## 参见

- [完整类目录](../catalog)