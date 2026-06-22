<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeFlagDominationClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerGameModeFlagDominationClient` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `IsGameModeUsingCasualGold` | `public override bool IsGameModeUsingCasualGold { get; }` |
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; }` |


## Key Methods

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### AfterStart

```csharp
public override void AfterStart()
```

### OnPreparationEnded

```csharp
public void OnPreparationEnded()
```

### GetMissionCameraLockMode

```csharp
public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### GetFlagOwner

```csharp
public Team GetFlagOwner(FlagCapturePoint flag)
```

### OnTeamPowerChanged

```csharp
public void OnTeamPowerChanged(BattleSideEnum teamSide, float power)
```

### OnMoraleChanged

```csharp
public void OnMoraleChanged(float morale)
```

### OnGoldAmountChangedForRepresentative

```csharp
public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)
```

### OnNumberOfFlagsChanged

```csharp
public void OnNumberOfFlagsChanged()
```

### OnBotsControlledChanged

```csharp
public void OnBotsControlledChanged(MissionPeer missionPeer, int botAliveCount, int botTotalCount)
```

### OnCapturePointOwnerChanged

```csharp
public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)
```

### OnRequestForfeitSpawn

```csharp
public void OnRequestForfeitSpawn()
```

### GetCompassTargets

```csharp
public override List<CompassItemUpdateParams> GetCompassTargets()
```

### GetGoldAmount

```csharp
public override int GetGoldAmount()
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)