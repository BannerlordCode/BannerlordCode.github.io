---
title: "SettlementVisual"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementVisual`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class SettlementVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`
**File:** `SandBox.View/Map/Visuals/SettlementVisual.cs`

## 概述

`SettlementVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AttachedTo` | `public override MapEntityVisual AttachedTo { get; }` |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer { get; }` |
| `StrategicEntity` | `public GameEntity StrategicEntity { get; }` |

## 主要方法

### IsEnemyOf
`public override bool IsEnemyOf(IFaction faction)`

**用途 / Purpose:** 处理 `is enemy of` 相关逻辑。

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**用途 / Purpose:** 处理 `is ally of` 相关逻辑。

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**用途 / Purpose:** 获取 `visual position` 的当前值。

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**用途 / Purpose:** 处理 `is visible or fading out` 相关逻辑。

### OnHover
`public override void OnHover()`

**用途 / Purpose:** 当 `hover` 事件触发时调用此方法。

### OnTrackAction
`public override void OnTrackAction()`

**用途 / Purpose:** 当 `track action` 事件触发时调用此方法。

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** 当 `map click` 事件触发时调用此方法。

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**用途 / Purpose:** 当 `open encyclopedia` 事件触发时调用此方法。

### ReleaseResources
`public override void ReleaseResources()`

**用途 / Purpose:** 处理 `release resources` 相关逻辑。

### GetBannerPositionForParty
`public Vec3 GetBannerPositionForParty(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `banner position for party` 的当前值。

### GetAttackerTowerSiegeEngineFrames
`public MatrixFrame GetAttackerTowerSiegeEngineFrames()`

**用途 / Purpose:** 获取 `attacker tower siege engine frames` 的当前值。

### GetAttackerBatteringRamSiegeEngineFrames
`public MatrixFrame GetAttackerBatteringRamSiegeEngineFrames()`

**用途 / Purpose:** 获取 `attacker battering ram siege engine frames` 的当前值。

### GetAttackerRangedSiegeEngineFrames
`public MatrixFrame GetAttackerRangedSiegeEngineFrames()`

**用途 / Purpose:** 获取 `attacker ranged siege engine frames` 的当前值。

### GetDefenderRangedSiegeEngineFrames
`public MatrixFrame GetDefenderRangedSiegeEngineFrames()`

**用途 / Purpose:** 获取 `defender ranged siege engine frames` 的当前值。

### GetBreachableWallFrames
`public MatrixFrame GetBreachableWallFrames()`

**用途 / Purpose:** 获取 `breachable wall frames` 的当前值。

## 使用示例

```csharp
var value = new SettlementVisual();
value.IsEnemyOf(faction);
```

## 参见

- [完整类目录](../catalog)