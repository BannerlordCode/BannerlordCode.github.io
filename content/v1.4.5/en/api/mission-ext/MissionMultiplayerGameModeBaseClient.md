---
title: "MissionMultiplayerGameModeBaseClient"
description: "Auto-generated class reference for MissionMultiplayerGameModeBaseClient."
---
# MissionMultiplayerGameModeBaseClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork, ICameraModeLogic`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs`

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

**Purpose:** Reads and returns the `gold amount` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.GetGoldAmount();
```

### GetMissionCameraLockMode
`public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**Purpose:** Reads and returns the `mission camera lock mode` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.GetMissionCameraLockMode(false);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
missionMultiplayerGameModeBaseClient.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
missionMultiplayerGameModeBaseClient.EarlyStart();
```

### CheckTimer
`public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)`

**Purpose:** Verifies whether `timer` holds true for the current object.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.CheckTimer(remainingTime, remainingWarningTime, false);
```

### OnGoldAmountChangedForRepresentative
`public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Invoked when the `gold amount changed for representative` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
missionMultiplayerGameModeBaseClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### CanRequestTroopChange
`public virtual bool CanRequestTroopChange()`

**Purpose:** Checks whether the current object meets the preconditions for `request troop change`.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.CanRequestTroopChange();
```

### CanRequestCultureChange
`public virtual bool CanRequestCultureChange()`

**Purpose:** Checks whether the current object meets the preconditions for `request culture change`.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.CanRequestCultureChange();
```

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**Purpose:** Determines whether the current object is in the `class available` state or condition.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBaseClient from the subsystem API first
MissionMultiplayerGameModeBaseClient missionMultiplayerGameModeBaseClient = ...;
var result = missionMultiplayerGameModeBaseClient.IsClassAvailable(heroClass);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionMultiplayerGameModeBaseClient instance = ...;
```

## See Also

- [Area Index](../)