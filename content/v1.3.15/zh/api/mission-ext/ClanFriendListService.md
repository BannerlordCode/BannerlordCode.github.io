---
title: "ClanFriendListService"
description: "ClanFriendListService 的自动生成类参考。"
---
# ClanFriendListService

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.MountAndBlade/ClanFriendListService.cs`

## 概述

`ClanFriendListService` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetUserWithName
`public Task<PlayerId> GetUserWithName(string name)`

**用途 / Purpose:** 读取并返回当前对象中 user with name 的结果。

```csharp
// 先通过子系统 API 拿到 ClanFriendListService 实例
ClanFriendListService clanFriendListService = ...;
var result = clanFriendListService.GetUserWithName("example");
```

### GetPendingRequests
`public IEnumerable<PlayerId> GetPendingRequests()`

**用途 / Purpose:** 读取并返回当前对象中 pending requests 的结果。

```csharp
// 先通过子系统 API 拿到 ClanFriendListService 实例
ClanFriendListService clanFriendListService = ...;
var result = clanFriendListService.GetPendingRequests();
```

### GetReceivedRequests
`public IEnumerable<PlayerId> GetReceivedRequests()`

**用途 / Purpose:** 读取并返回当前对象中 received requests 的结果。

```csharp
// 先通过子系统 API 拿到 ClanFriendListService 实例
ClanFriendListService clanFriendListService = ...;
var result = clanFriendListService.GetReceivedRequests();
```

### OnClanInfoChanged
`public void OnClanInfoChanged(List<ClanPlayerInfo> playerInfosInClan)`

**用途 / Purpose:** 在 clan info changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanFriendListService 实例
ClanFriendListService clanFriendListService = ...;
clanFriendListService.OnClanInfoChanged(playerInfosInClan);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanFriendListService clanFriendListService = ...;
clanFriendListService.GetUserWithName("example");
```

## 参见

- [本区域目录](../)