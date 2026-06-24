<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentVictoryLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### SetCheerActionGroup
`public void SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum cheerActionGroup = AgentVictoryLogic.CheerActionGroupEnum.None)`

**用途 / Purpose:** 设置 `cheer action group` 的值或状态。

### SetCheerReactionTimerSettings
`public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)`

**用途 / Purpose:** 设置 `cheer reaction timer settings` 的值或状态。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### SetTimersOfVictoryReactionsOnBattleEnd
`public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)`

**用途 / Purpose:** 设置 `timers of victory reactions on battle end` 的值或状态。

### SetTimersOfVictoryReactionsOnRetreat
`public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)`

**用途 / Purpose:** 设置 `timers of victory reactions on retreat` 的值或状态。

### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent
`public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)`

**用途 / Purpose:** 设置 `timers of victory reactions on tournament victory for agent` 的值或状态。

### OrderReceived
`public void OrderReceived()`

**用途 / Purpose:** 处理 `order received` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new AgentVictoryLogic());
```

## 参见

- [完整类目录](../catalog)