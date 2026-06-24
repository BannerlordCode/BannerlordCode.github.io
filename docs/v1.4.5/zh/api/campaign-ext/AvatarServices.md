<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AvatarServices`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AvatarServices

**Namespace:** TaleWorlds.Avatar.PlayerServices
**Module:** TaleWorlds.Avatar
**Type:** `public static class AvatarServices`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.PlayerServices/TaleWorlds.Avatar.PlayerServices/AvatarServices.cs`

## 概述

`AvatarServices` 位于 `TaleWorlds.Avatar.PlayerServices`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
AvatarServices.GetForcedAvatarIndexOfPlayer(playerID);
```

## 参见

- [完整类目录](../catalog)