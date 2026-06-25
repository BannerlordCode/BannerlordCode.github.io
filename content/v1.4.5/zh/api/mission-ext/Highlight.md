---
title: "Highlight"
description: "Highlight 的自动生成类参考。"
---
# Highlight

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Highlight`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HighlightsController.cs`

## 概述

`Highlight` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized { get; }` |

## 主要方法

### RemoveHighlights
`public static void RemoveHighlights()`

**用途 / Purpose:** 从当前容器或状态中移除 「highlights」。

```csharp
// 静态调用，不需要实例
Highlight.RemoveHighlights();
```

### GetHighlightTypeWithId
`public HighlightType GetHighlightTypeWithId(string highlightId)`

**用途 / Purpose:** 读取并返回当前对象中 「highlight type with id」 的结果。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
var result = highlight.GetHighlightTypeWithId("example");
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
highlight.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
highlight.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 「score hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
highlight.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
highlight.OnMissionTick(0);
```

### AddHighlightType
`public static void AddHighlightType(HighlightType highlightType)`

**用途 / Purpose:** 将 「highlight type」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
Highlight.AddHighlightType(highlightType);
```

### SaveHighlight
`public void SaveHighlight(Highlight highlight)`

**用途 / Purpose:** 将 「highlight」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
highlight.SaveHighlight(highlight);
```

### SaveHighlight
`public void SaveHighlight(Highlight highlight, Vec3 position)`

**用途 / Purpose:** 将 「highlight」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
highlight.SaveHighlight(highlight, position);
```

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightType highlightType, Vec3 position)`

**用途 / Purpose:** 检查当前对象是否满足 「save highlight」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
var result = highlight.CanSaveHighlight(highlightType, position);
```

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

**用途 / Purpose:** 读取并返回当前对象中 「player is looking at position score」 的结果。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
var result = highlight.GetPlayerIsLookingAtPositionScore(position);
```

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

**用途 / Purpose:** 检查当前对象是否满足 「see position」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
var result = highlight.CanSeePosition(position);
```

### ShowSummary
`public void ShowSummary()`

**用途 / Purpose:** 显示「summary」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 Highlight 实例
Highlight highlight = ...;
highlight.ShowSummary();
```

## 使用示例

```csharp
Highlight.RemoveHighlights();
```

## 参见

- [本区域目录](../)