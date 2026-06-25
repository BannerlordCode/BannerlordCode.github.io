---
title: "MissionMultiplayerTeamDeathmatchClient"
description: "Auto-generated class reference for MissionMultiplayerTeamDeathmatchClient."
---
# MissionMultiplayerTeamDeathmatchClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerTeamDeathmatchClient : MissionMultiplayerGameModeBaseClient`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs`

## Overview

`MissionMultiplayerTeamDeathmatchClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.OnBehaviorInitialize();
```

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** **Purpose:** Invoked when the gold amount changed for representative event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.AfterStart();
```

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** **Purpose:** Reads and returns the gold amount value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
var result = missionMultiplayerTeamDeathmatchClient.GetGoldAmount();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.OnRemoveBehavior();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.OnBehaviorInitialize();
```

## See Also

- [Area Index](../)