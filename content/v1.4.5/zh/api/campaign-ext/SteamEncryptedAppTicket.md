---
title: "SteamEncryptedAppTicket"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamEncryptedAppTicket`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamEncryptedAppTicket

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamEncryptedAppTicket`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamEncryptedAppTicket.cs`

## 概述

`SteamEncryptedAppTicket` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BDecryptTicket
`public static bool BDecryptTicket(byte rgubTicketEncrypted, uint cubTicketEncrypted, byte rgubTicketDecrypted, ref uint pcubTicketDecrypted, byte rgubKey, int cubKey)`

**用途 / Purpose:** 处理 `b decrypt ticket` 相关逻辑。

### BIsTicketForApp
`public static bool BIsTicketForApp(byte rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)`

**用途 / Purpose:** 处理 `b is ticket for app` 相关逻辑。

### GetTicketIssueTime
`public static uint GetTicketIssueTime(byte rgubTicketDecrypted, uint cubTicketDecrypted)`

**用途 / Purpose:** 获取 `ticket issue time` 的当前值。

### GetTicketSteamID
`public static void GetTicketSteamID(byte rgubTicketDecrypted, uint cubTicketDecrypted, out CSteamID psteamID)`

**用途 / Purpose:** 获取 `ticket steam i d` 的当前值。

### GetTicketAppID
`public static uint GetTicketAppID(byte rgubTicketDecrypted, uint cubTicketDecrypted)`

**用途 / Purpose:** 获取 `ticket app i d` 的当前值。

### BUserOwnsAppInTicket
`public static bool BUserOwnsAppInTicket(byte rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)`

**用途 / Purpose:** 处理 `b user owns app in ticket` 相关逻辑。

### BUserIsVacBanned
`public static bool BUserIsVacBanned(byte rgubTicketDecrypted, uint cubTicketDecrypted)`

**用途 / Purpose:** 处理 `b user is vac banned` 相关逻辑。

### GetUserVariableData
`public static byte GetUserVariableData(byte rgubTicketDecrypted, uint cubTicketDecrypted, out uint pcubUserData)`

**用途 / Purpose:** 获取 `user variable data` 的当前值。

### BIsTicketSigned
`public static bool BIsTicketSigned(byte rgubTicketDecrypted, uint cubTicketDecrypted, byte pubRSAKey, uint cubRSAKey)`

**用途 / Purpose:** 处理 `b is ticket signed` 相关逻辑。

## 使用示例

```csharp
SteamEncryptedAppTicket.BDecryptTicket(0, 0, 0, pcubTicketDecrypted, 0, 0);
```

## 参见

- [完整类目录](../catalog)