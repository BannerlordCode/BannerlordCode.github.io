<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BadgeOwnerKillTracker`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BadgeOwnerKillTracker

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeOwnerKillTracker : GameBadgeTracker`
**Base:** `GameBadgeTracker`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs`

## 概述

`BadgeOwnerKillTracker` 位于 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnPlayerJoin
`public override void OnPlayerJoin(PlayerData playerData)`

**用途 / Purpose:** 当 `player join` 事件触发时调用此方法。

### OnKill
`public override void OnKill(KillData killData)`

**用途 / Purpose:** 当 `kill` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new BadgeOwnerKillTracker();
value.OnPlayerJoin(playerData);
```

## 参见

- [完整类目录](../catalog)