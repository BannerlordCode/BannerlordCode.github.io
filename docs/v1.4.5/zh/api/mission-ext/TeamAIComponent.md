<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamAIComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## 概述

`TeamAIComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `TeamAIComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Tactic` | `public Lazy<TacticComponent> Tactic { get; }` |
| `Weight` | `public float Weight { get; set; }` |
| `IsDefenseApplicable` | `public bool IsDefenseApplicable { get; }` |
| `GetIsFirstTacticChosen` | `public bool GetIsFirstTacticChosen { get; }` |

## 主要方法

### TacticalDecisionDelegate
`public delegate void TacticalDecisionDelegate(in TacticalDecision decision)`

**用途 / Purpose:** 处理 `tactical decision delegate` 相关逻辑。

### AddStrategicArea
`public void AddStrategicArea(StrategicArea strategicArea)`

**用途 / Purpose:** 向当前集合/状态中添加 `strategic area`。

### RemoveStrategicArea
`public void RemoveStrategicArea(StrategicArea strategicArea)`

**用途 / Purpose:** 从当前集合/状态中移除 `strategic area`。

### RemoveAllStrategicAreas
`public void RemoveAllStrategicAreas()`

**用途 / Purpose:** 从当前集合/状态中移除 `all strategic areas`。

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

**用途 / Purpose:** 向当前集合/状态中添加 `tactic option`。

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

**用途 / Purpose:** 从当前集合/状态中移除 `tactic option`。

### ClearTacticOptions
`public void ClearTacticOptions()`

**用途 / Purpose:** 处理 `clear tactic options` 相关逻辑。

### AssertTeam
`public void AssertTeam(Team team)`

**用途 / Purpose:** 处理 `assert team` 相关逻辑。

### NotifyTacticalDecision
`public void NotifyTacticalDecision(in TacticalDecision decision)`

**用途 / Purpose:** 处理 `notify tactical decision` 相关逻辑。

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnFormationFrameChanged
`public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)`

**用途 / Purpose:** 当 `formation frame changed` 事件触发时调用此方法。

### OnMissionEnded
`public virtual void OnMissionEnded()`

**用途 / Purpose:** 当 `mission ended` 事件触发时调用此方法。

### ResetTacticalPositions
`public void ResetTacticalPositions()`

**用途 / Purpose:** 将 `tactical positions` 重置为初始状态。

### ResetTactic
`public void ResetTactic(bool keepCurrentTactic = true)`

**用途 / Purpose:** 将 `tactic` 重置为初始状态。

### CheckIsDefenseApplicable
`public void CheckIsDefenseApplicable()`

**用途 / Purpose:** 处理 `check is defense applicable` 相关逻辑。

### OnTacticAppliedForFirstTime
`public void OnTacticAppliedForFirstTime()`

**用途 / Purpose:** 当 `tactic applied for first time` 事件触发时调用此方法。

### TickOccasionally
`public virtual void TickOccasionally()`

**用途 / Purpose:** 处理 `tick occasionally` 相关逻辑。

### IsCurrentTactic
`public bool IsCurrentTactic(TacticComponent tactic)`

**用途 / Purpose:** 处理 `is current tactic` 相关逻辑。

### OnUnitAddedToFormationForTheFirstTime
`public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

**用途 / Purpose:** 当 `unit added to formation for the first time` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomTeamAIComponent();
```

## 参见

- [完整类目录](../catalog)