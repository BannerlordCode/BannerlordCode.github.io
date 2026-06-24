<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CheerReactionTimeSettings`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CheerReactionTimeSettings

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct CheerReactionTimeSettings`
**领域:** mission-ext

## 概述

`CheerReactionTimeSettings` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
// 先从游戏状态中拿到一个 CheerReactionTimeSettings 实例，再调用它的公开方法
var value = new CheerReactionTimeSettings();
value.AfterStart();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
