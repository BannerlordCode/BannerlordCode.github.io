<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamApps`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamApps

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamApps`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamApps.cs`

## 概述

`SteamApps` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BIsSubscribed
`public static bool BIsSubscribed()`

**用途 / Purpose:** 处理 `b is subscribed` 相关逻辑。

### BIsLowViolence
`public static bool BIsLowViolence()`

**用途 / Purpose:** 处理 `b is low violence` 相关逻辑。

### BIsCybercafe
`public static bool BIsCybercafe()`

**用途 / Purpose:** 处理 `b is cybercafe` 相关逻辑。

### BIsVACBanned
`public static bool BIsVACBanned()`

**用途 / Purpose:** 处理 `b is v a c banned` 相关逻辑。

### GetCurrentGameLanguage
`public static string GetCurrentGameLanguage()`

**用途 / Purpose:** 获取 `current game language` 的当前值。

### GetAvailableGameLanguages
`public static string GetAvailableGameLanguages()`

**用途 / Purpose:** 获取 `available game languages` 的当前值。

### BIsSubscribedApp
`public static bool BIsSubscribedApp(AppId_t appID)`

**用途 / Purpose:** 处理 `b is subscribed app` 相关逻辑。

### BIsDlcInstalled
`public static bool BIsDlcInstalled(AppId_t appID)`

**用途 / Purpose:** 处理 `b is dlc installed` 相关逻辑。

### GetEarliestPurchaseUnixTime
`public static uint GetEarliestPurchaseUnixTime(AppId_t nAppID)`

**用途 / Purpose:** 获取 `earliest purchase unix time` 的当前值。

### BIsSubscribedFromFreeWeekend
`public static bool BIsSubscribedFromFreeWeekend()`

**用途 / Purpose:** 处理 `b is subscribed from free weekend` 相关逻辑。

### GetDLCCount
`public static int GetDLCCount()`

**用途 / Purpose:** 获取 `d l c count` 的当前值。

### BGetDLCDataByIndex
`public static bool BGetDLCDataByIndex(int iDLC, out AppId_t pAppID, out bool pbAvailable, out string pchName, int cchNameBufferSize)`

**用途 / Purpose:** 处理 `b get d l c data by index` 相关逻辑。

### InstallDLC
`public static void InstallDLC(AppId_t nAppID)`

**用途 / Purpose:** 处理 `install d l c` 相关逻辑。

### UninstallDLC
`public static void UninstallDLC(AppId_t nAppID)`

**用途 / Purpose:** 处理 `uninstall d l c` 相关逻辑。

### RequestAppProofOfPurchaseKey
`public static void RequestAppProofOfPurchaseKey(AppId_t nAppID)`

**用途 / Purpose:** 处理 `request app proof of purchase key` 相关逻辑。

### GetCurrentBetaName
`public static bool GetCurrentBetaName(out string pchName, int cchNameBufferSize)`

**用途 / Purpose:** 获取 `current beta name` 的当前值。

### MarkContentCorrupt
`public static bool MarkContentCorrupt(bool bMissingFilesOnly)`

**用途 / Purpose:** 处理 `mark content corrupt` 相关逻辑。

### GetInstalledDepots
`public static uint GetInstalledDepots(AppId_t appID, DepotId_t pvecDepots, uint cMaxDepots)`

**用途 / Purpose:** 获取 `installed depots` 的当前值。

### GetAppInstallDir
`public static uint GetAppInstallDir(AppId_t appID, out string pchFolder, uint cchFolderBufferSize)`

**用途 / Purpose:** 获取 `app install dir` 的当前值。

### BIsAppInstalled
`public static bool BIsAppInstalled(AppId_t appID)`

**用途 / Purpose:** 处理 `b is app installed` 相关逻辑。

### GetAppOwner
`public static CSteamID GetAppOwner()`

**用途 / Purpose:** 获取 `app owner` 的当前值。

### GetLaunchQueryParam
`public static string GetLaunchQueryParam(string pchKey)`

**用途 / Purpose:** 获取 `launch query param` 的当前值。

### GetDlcDownloadProgress
`public static bool GetDlcDownloadProgress(AppId_t nAppID, out ulong punBytesDownloaded, out ulong punBytesTotal)`

**用途 / Purpose:** 获取 `dlc download progress` 的当前值。

### GetAppBuildId
`public static int GetAppBuildId()`

**用途 / Purpose:** 获取 `app build id` 的当前值。

### RequestAllProofOfPurchaseKeys
`public static void RequestAllProofOfPurchaseKeys()`

**用途 / Purpose:** 处理 `request all proof of purchase keys` 相关逻辑。

### GetFileDetails
`public static SteamAPICall_t GetFileDetails(string pszFileName)`

**用途 / Purpose:** 获取 `file details` 的当前值。

### GetLaunchCommandLine
`public static int GetLaunchCommandLine(out string pszCommandLine, int cubCommandLine)`

**用途 / Purpose:** 获取 `launch command line` 的当前值。

### BIsSubscribedFromFamilySharing
`public static bool BIsSubscribedFromFamilySharing()`

**用途 / Purpose:** 处理 `b is subscribed from family sharing` 相关逻辑。

### BIsTimedTrial
`public static bool BIsTimedTrial(out uint punSecondsAllowed, out uint punSecondsPlayed)`

**用途 / Purpose:** 处理 `b is timed trial` 相关逻辑。

## 使用示例

```csharp
SteamApps.BIsSubscribed();
```

## 参见

- [完整类目录](../catalog)