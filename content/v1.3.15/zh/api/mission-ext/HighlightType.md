---
title: "HighlightType"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HighlightType`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HighlightType

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct HighlightType`
**领域:** mission-ext

## 概述

`HighlightType` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized { get; }` |
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved { get; }` |
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |

## 主要方法

### RemoveHighlights
`public static void RemoveHighlights()`

**用途 / Purpose:** 从当前集合/状态中移除 `highlights`。

### GetHighlightTypeWithId
`public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)`

**用途 / Purpose:** 获取 `highlight type with id` 的当前值。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### AddHighlightType
`public static void AddHighlightType(HighlightsController.HighlightType highlightType)`

**用途 / Purpose:** 向当前集合/状态中添加 `highlight type`。

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight)`

**用途 / Purpose:** 保存 `highlight` 数据。

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)`

**用途 / Purpose:** 保存 `highlight` 数据。

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)`

**用途 / Purpose:** 判断当前对象是否可以执行 `save highlight`。

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

**用途 / Purpose:** 获取 `player is looking at position score` 的当前值。

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

**用途 / Purpose:** 判断当前对象是否可以执行 `see position`。

### ShowSummary
`public void ShowSummary()`

**用途 / Purpose:** 处理 `show summary` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
HighlightType.RemoveHighlights();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
