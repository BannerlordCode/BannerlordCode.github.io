---
title: "TeamAIComponent"
description: "TeamAIComponent 的自动生成类参考。"
---
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## 概述

`TeamAIComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `TeamAIComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `StrategicAreas` | `public MBReadOnlyList<StrategicArea> StrategicAreas { get; }` |
| `HasStrategicAreas` | `public bool HasStrategicAreas { get; }` |
| `IsDefenseApplicable` | `public bool IsDefenseApplicable { get; }` |
| `GetIsFirstTacticChosen` | `public bool GetIsFirstTacticChosen { get; }` |
| `Id` | `public string Id { get; }` |
| `Tactic` | `public Lazy<TacticComponent> Tactic { get; }` |
| `Weight` | `public float Weight { get; set; }` |

## 主要方法

### AddStrategicArea
`public void AddStrategicArea(StrategicArea strategicArea)`

**用途 / Purpose:** 将 strategic area 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.AddStrategicArea(strategicArea);
```

### RemoveStrategicArea
`public void RemoveStrategicArea(StrategicArea strategicArea)`

**用途 / Purpose:** 从当前容器或状态中移除 strategic area。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.RemoveStrategicArea(strategicArea);
```

### RemoveAllStrategicAreas
`public void RemoveAllStrategicAreas()`

**用途 / Purpose:** 从当前容器或状态中移除 all strategic areas。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.RemoveAllStrategicAreas();
```

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**用途 / Purpose:** 将 tactic option 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.AddTacticOption(tacticOption);
```

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**用途 / Purpose:** 从当前容器或状态中移除 tactic option。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.RemoveTacticOption(tacticType);
```

### ClearTacticOptions
`public void ClearTacticOptions()`

**用途 / Purpose:** 清空当前对象中的tactic options。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.ClearTacticOptions();
```

### AssertTeam
`public void AssertTeam(Team team)`

**用途 / Purpose:** 调用 AssertTeam 对应的操作。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.AssertTeam(team);
```

### NotifyTacticalDecision
`public void NotifyTacticalDecision(in TacticalDecision decision)`

**用途 / Purpose:** 通知相关对象tactical decision已经发生。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.NotifyTacticalDecision(decision);
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnDeploymentFinished();
```

### OnFormationFrameChanged
`public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)`

**用途 / Purpose:** 在 formation frame changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnFormationFrameChanged(agent, false, frame);
```

### OnMissionEnded
`public virtual void OnMissionEnded()`

**用途 / Purpose:** 在 mission ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnMissionEnded();
```

### ResetTacticalPositions
`public void ResetTacticalPositions()`

**用途 / Purpose:** 将 tactical positions 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.ResetTacticalPositions();
```

### ResetTactic
`public void ResetTactic(bool keepCurrentTactic = true)`

**用途 / Purpose:** 将 tactic 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.ResetTactic(false);
```

### CheckIsDefenseApplicable
`public void CheckIsDefenseApplicable()`

**用途 / Purpose:** 检查is defense applicable在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.CheckIsDefenseApplicable();
```

### OnTacticAppliedForFirstTime
`public void OnTacticAppliedForFirstTime()`

**用途 / Purpose:** 在 tactic applied for first time 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnTacticAppliedForFirstTime();
```

### TickOccasionally
`public void TickOccasionally()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进occasionally的状态。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.TickOccasionally();
```

### IsCurrentTactic
`public bool IsCurrentTactic(TacticComponent tactic)`

**用途 / Purpose:** 判断当前对象是否处于 current tactic 状态或条件。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
var result = teamAIComponent.IsCurrentTactic(tactic);
```

### OnUnitAddedToFormationForTheFirstTime
`public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**用途 / Purpose:** 在 unit added to formation for the first time 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.OnUnitAddedToFormationForTheFirstTime(formation);
```

### TacticalDecisionDelegate
`public delegate void TacticalDecisionDelegate(in TacticalDecision decision)`

**用途 / Purpose:** 调用 TacticalDecisionDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 TeamAIComponent 实例
TeamAIComponent teamAIComponent = ...;
teamAIComponent.TacticalDecisionDelegate(decision);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TeamAIComponent instance = ...;
```

## 参见

- [本区域目录](../)