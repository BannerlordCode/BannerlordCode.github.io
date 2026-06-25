---
title: "AvatarServices"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AvatarServices`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AvatarServices

**命名空间:** TaleWorlds.Avatar.PlayerServices
**模块:** TaleWorlds.Avatar
**类型:** `public static class AvatarServices`
**领域:** campaign-ext

## 概述

`AvatarServices` 位于 `TaleWorlds.Avatar.PlayerServices`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Avatar.PlayerServices` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedAvatarCount` | `public static int ForcedAvatarCount { get; }` |

## 主要方法

### GetForcedAvatarIndexOfPlayer
`public static int GetForcedAvatarIndexOfPlayer(PlayerId playerID)`

**用途 / Purpose:** 获取 `forced avatar index of player` 的当前值。

### UpdateAvatarServices
`public static void UpdateAvatarServices(float dt)`

**用途 / Purpose:** 更新 `avatar services` 的状态或数据。

### GetPlayerAvatar
`public static AvatarDataResponse GetPlayerAvatar(PlayerId playerId, int forcedIndex)`

**用途 / Purpose:** 获取 `player avatar` 的当前值。

### AddAvatarService
`public static void AddAvatarService(PlayerIdProvidedTypes type, IAvatarService avatarService)`

**用途 / Purpose:** 向当前集合/状态中添加 `avatar service`。

### ClearAvatarCaches
`public static void ClearAvatarCaches()`

**用途 / Purpose:** 处理 `clear avatar caches` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
