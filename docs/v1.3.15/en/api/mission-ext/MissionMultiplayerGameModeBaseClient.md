<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeBaseClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBaseClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerGameModeBaseClient` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MissionLobbyComponent` | `public MissionLobbyComponent MissionLobbyComponent { get; }` |
| `MissionNetworkComponent` | `public MissionNetworkComponent MissionNetworkComponent { get; }` |
| `ScoreboardComponent` | `public MissionScoreboardComponent ScoreboardComponent { get; }` |
| `NotificationsComponent` | `public MultiplayerGameNotificationsComponent NotificationsComponent { get; }` |
| `WarmupComponent` | `public MultiplayerWarmupComponent WarmupComponent { get; }` |
| `RoundComponent` | `public IRoundComponent RoundComponent { get; }` |
| `TimerComponent` | `public MultiplayerTimerComponent TimerComponent { get; }` |
| `IsGameModeUsingGold` | `public abstract bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public abstract bool IsGameModeTactical { get; }` |
| `IsGameModeUsingCasualGold` | `public virtual bool IsGameModeUsingCasualGold { get; }` |
| `IsGameModeUsingRoundCountdown` | `public abstract bool IsGameModeUsingRoundCountdown { get; }` |
| `IsGameModeUsingAllowCultureChange` | `public virtual bool IsGameModeUsingAllowCultureChange { get; }` |
| `IsGameModeUsingAllowTroopChange` | `public virtual bool IsGameModeUsingAllowTroopChange { get; }` |
| `GameType` | `public abstract MultiplayerGameType GameType { get; }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; }` |
| `RemainingTime` | `public float RemainingTime { get; }` |


## Key Methods

### GetGoldAmount

```csharp
public abstract int GetGoldAmount()
```

### GetMissionCameraLockMode

```csharp
public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### EarlyStart

```csharp
public override void EarlyStart()
```

### CheckTimer

```csharp
public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)
```

### OnGoldAmountChangedForRepresentative

```csharp
public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)
```

### CanRequestTroopChange

```csharp
public virtual bool CanRequestTroopChange()
```

### CanRequestCultureChange

```csharp
public virtual bool CanRequestCultureChange()
```

### IsClassAvailable

```csharp
public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)