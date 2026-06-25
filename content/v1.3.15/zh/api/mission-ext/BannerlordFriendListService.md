---
title: "BannerlordFriendListService"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordFriendListService`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordFriendListService

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerlordFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.MountAndBlade/BannerlordFriendListService.cs`

## 概述

`BannerlordFriendListService` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo friends)`

**用途 / Purpose:** 当 `friend list received` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new BannerlordFriendListService();
value.OnFriendListReceived(friends);
```

## 参见

- [完整类目录](../catalog)