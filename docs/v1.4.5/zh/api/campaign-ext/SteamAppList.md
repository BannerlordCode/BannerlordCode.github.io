<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamAppList`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamAppList

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamAppList`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamAppList.cs`

## 概述

`SteamAppList` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNumInstalledApps
`public static uint GetNumInstalledApps()`

**用途 / Purpose:** 获取 `num installed apps` 的当前值。

### GetInstalledApps
`public static uint GetInstalledApps(AppId_t pvecAppID, uint unMaxAppIDs)`

**用途 / Purpose:** 获取 `installed apps` 的当前值。

### GetAppName
`public static int GetAppName(AppId_t nAppID, out string pchName, int cchNameMax)`

**用途 / Purpose:** 获取 `app name` 的当前值。

### GetAppInstallDir
`public static int GetAppInstallDir(AppId_t nAppID, out string pchDirectory, int cchNameMax)`

**用途 / Purpose:** 获取 `app install dir` 的当前值。

### GetAppBuildId
`public static int GetAppBuildId(AppId_t nAppID)`

**用途 / Purpose:** 获取 `app build id` 的当前值。

## 使用示例

```csharp
SteamAppList.GetNumInstalledApps();
```

## 参见

- [完整类目录](../catalog)