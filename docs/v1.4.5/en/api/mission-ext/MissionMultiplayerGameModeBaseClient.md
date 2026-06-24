<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeBaseClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBaseClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork, ICameraModeLogic`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs`

## Overview

`MissionMultiplayerGameModeBaseClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
| `IsGameModeUsingRoundCountdown` | `public abstract bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public abstract MultiplayerGameType GameType { get; }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get; }` |

## Key Methods

### GetGoldAmount
`public abstract int GetGoldAmount()`

**Purpose:** Gets the current value of `gold amount`.

### GetMissionCameraLockMode
`public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**Purpose:** Gets the current value of `mission camera lock mode`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### CheckTimer
`public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)`

**Purpose:** Handles logic related to `check timer`.

### OnGoldAmountChangedForRepresentative
`public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Called when the `gold amount changed for representative` event is raised.

### CanRequestTroopChange
`public virtual bool CanRequestTroopChange()`

**Purpose:** Checks whether the current object can `request troop change`.

### CanRequestCultureChange
`public virtual bool CanRequestCultureChange()`

**Purpose:** Checks whether the current object can `request culture change`.

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**Purpose:** Handles logic related to `is class available`.

## Usage Example

```csharp
var implementation = new CustomMissionMultiplayerGameModeBaseClient();
```

## See Also

- [Complete Class Catalog](../catalog)