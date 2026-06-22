<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheerReactionTimeSettings`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CheerReactionTimeSettings

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CheerReactionTimeSettings` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup { get; }` |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData { get; }` |
| `GotOrderRecently` | `public bool GotOrderRecently { get; }` |
| `IsCheeringPaused` | `public bool IsCheeringPaused { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)