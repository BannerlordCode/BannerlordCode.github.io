<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeDuelClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeDuelClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerGameModeDuelClient` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `IsGameModeUsingAllowCultureChange` | `public override bool IsGameModeUsingAllowCultureChange { get; }` |
| `IsGameModeUsingAllowTroopChange` | `public override bool IsGameModeUsingAllowTroopChange { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `IsInDuel` | `public bool IsInDuel { get; }` |
| `MyRepresentative` | `public DuelMissionRepresentative MyRepresentative { get; }` |


## Key Methods

### GetGoldAmount

```csharp
public override int GetGoldAmount()
```

### OnGoldAmountChangedForRepresentative

```csharp
public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### CanRequestCultureChange

```csharp
public override bool CanRequestCultureChange()
```

### CanRequestTroopChange

```csharp
public override bool CanRequestTroopChange()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)