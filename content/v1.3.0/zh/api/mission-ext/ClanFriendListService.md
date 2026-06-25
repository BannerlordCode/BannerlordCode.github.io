---
title: "ClanFriendListService"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFriendListService`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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
`public async Task<PlayerId> GetUserWithName(string name)`

**用途 / Purpose:** 获取 `user with name` 的当前值。

### GetPendingRequests
`public IEnumerable<PlayerId> GetPendingRequests()`

**用途 / Purpose:** 获取 `pending requests` 的当前值。

### GetReceivedRequests
`public IEnumerable<PlayerId> GetReceivedRequests()`

**用途 / Purpose:** 获取 `received requests` 的当前值。

### OnClanInfoChanged
`public void OnClanInfoChanged(List<ClanPlayerInfo> playerInfosInClan)`

**用途 / Purpose:** 当 `clan info changed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ClanFriendListService();
value.GetUserWithName("example");
```

## 参见

- [完整类目录](../catalog)