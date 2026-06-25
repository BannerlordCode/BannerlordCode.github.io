---
title: "AgentVictoryLogic"
description: "AgentVictoryLogic 的自动生成类参考。"
---
# AgentVictoryLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVictoryLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## 概述

`AgentVictoryLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `AgentVictoryLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup { get; }` |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData { get; }` |
| `GotOrderRecently` | `public bool GotOrderRecently { get; }` |
| `IsCheeringPaused` | `public bool IsCheeringPaused { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.AfterStart();
```

### SetCheerActionGroup
`public void SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum cheerActionGroup = AgentVictoryLogic.CheerActionGroupEnum.None)`

**用途 / Purpose:** 为 「cheer action group」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetCheerActionGroup(agentVictoryLogic.CheerActionGroupEnum.None);
```

### SetCheerReactionTimerSettings
`public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)`

**用途 / Purpose:** 为 「cheer reaction timer settings」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetCheerReactionTimerSettings(0, 0);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 「clear scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnMissionTick(0);
```

### SetTimersOfVictoryReactionsOnBattleEnd
`public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)`

**用途 / Purpose:** 为 「timers of victory reactions on battle end」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnBattleEnd(side);
```

### SetTimersOfVictoryReactionsOnRetreat
`public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)`

**用途 / Purpose:** 为 「timers of victory reactions on retreat」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnRetreat(side);
```

### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent
`public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)`

**用途 / Purpose:** 为 「timers of victory reactions on tournament victory for agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(agent, 0, 0);
```

### OrderReceived
`public void OrderReceived()`

**用途 / Purpose:** 处理与 「order received」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentVictoryLogic 实例
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OrderReceived();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentVictoryLogic>();
```

## 参见

- [本区域目录](../)