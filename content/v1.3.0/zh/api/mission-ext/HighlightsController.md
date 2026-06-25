---
title: "HighlightsController"
description: "HighlightsController 的自动生成类参考。"
---
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## 概述

`HighlightsController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HighlightsController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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

**用途 / Purpose:** 从当前容器或状态中移除 highlights。

```csharp
// 静态调用，不需要实例
HighlightsController.RemoveHighlights();
```

### GetHighlightTypeWithId
`public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)`

**用途 / Purpose:** 读取并返回当前对象中 highlight type with id 的结果。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
var result = highlightsController.GetHighlightTypeWithId("example");
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
highlightsController.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
highlightsController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
highlightsController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
highlightsController.OnMissionTick(0);
```

### AddHighlightType
`public static void AddHighlightType(HighlightsController.HighlightType highlightType)`

**用途 / Purpose:** 将 highlight type 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
HighlightsController.AddHighlightType(highlightType);
```

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight)`

**用途 / Purpose:** 将 highlight 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
highlightsController.SaveHighlight(highlight);
```

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)`

**用途 / Purpose:** 将 highlight 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
highlightsController.SaveHighlight(highlight, position);
```

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)`

**用途 / Purpose:** 检查当前对象是否满足 save highlight 的前置条件。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
var result = highlightsController.CanSaveHighlight(highlightType, position);
```

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

**用途 / Purpose:** 读取并返回当前对象中 player is looking at position score 的结果。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
var result = highlightsController.GetPlayerIsLookingAtPositionScore(position);
```

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

**用途 / Purpose:** 检查当前对象是否满足 see position 的前置条件。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
var result = highlightsController.CanSeePosition(position);
```

### ShowSummary
`public void ShowSummary()`

**用途 / Purpose:** 显示summary对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 HighlightsController 实例
HighlightsController highlightsController = ...;
highlightsController.ShowSummary();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HighlightsController>();
```

## 参见

- [本区域目录](../)