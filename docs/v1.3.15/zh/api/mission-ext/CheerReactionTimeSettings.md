<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CheerReactionTimeSettings`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CheerReactionTimeSettings

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CheerReactionTimeSettings` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup { get; }` |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData { get; }` |
| `GotOrderRecently` | `public bool GotOrderRecently { get; }` |
| `IsCheeringPaused` | `public bool IsCheeringPaused { get; }` |


## 主要方法

### AfterStart

```csharp
public override void AfterStart()
```

### SetCheerActionGroup

```csharp
public void SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum cheerActionGroup = AgentVictoryLogic.CheerActionGroupEnum.None)
```

### SetCheerReactionTimerSettings

```csharp
public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### SetTimersOfVictoryReactionsOnBattleEnd

```csharp
public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)
```

### SetTimersOfVictoryReactionsOnRetreat

```csharp
public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)
```

### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent

```csharp
public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)
```

### OrderReceived

```csharp
public void OrderReceived()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)