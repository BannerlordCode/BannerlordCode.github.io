---
title: "SteamRemotePlay"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamRemotePlay`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamRemotePlay

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamRemotePlay`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamRemotePlay.cs`

## 概述

`SteamRemotePlay` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSessionCount
`public static uint GetSessionCount()`

**用途 / Purpose:** 获取 `session count` 的当前值。

### GetSessionID
`public static RemotePlaySessionID_t GetSessionID(int iSessionIndex)`

**用途 / Purpose:** 获取 `session i d` 的当前值。

### GetSessionSteamID
`public static CSteamID GetSessionSteamID(RemotePlaySessionID_t unSessionID)`

**用途 / Purpose:** 获取 `session steam i d` 的当前值。

### GetSessionClientName
`public static string GetSessionClientName(RemotePlaySessionID_t unSessionID)`

**用途 / Purpose:** 获取 `session client name` 的当前值。

### GetSessionClientFormFactor
`public static ESteamDeviceFormFactor GetSessionClientFormFactor(RemotePlaySessionID_t unSessionID)`

**用途 / Purpose:** 获取 `session client form factor` 的当前值。

### BGetSessionClientResolution
`public static bool BGetSessionClientResolution(RemotePlaySessionID_t unSessionID, out int pnResolutionX, out int pnResolutionY)`

**用途 / Purpose:** 处理 `b get session client resolution` 相关逻辑。

### BSendRemotePlayTogetherInvite
`public static bool BSendRemotePlayTogetherInvite(CSteamID steamIDFriend)`

**用途 / Purpose:** 处理 `b send remote play together invite` 相关逻辑。

## 使用示例

```csharp
SteamRemotePlay.GetSessionCount();
```

## 参见

- [完整类目录](../catalog)