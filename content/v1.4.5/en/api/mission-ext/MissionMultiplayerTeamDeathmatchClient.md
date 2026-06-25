---
title: "MissionMultiplayerTeamDeathmatchClient"
description: "Auto-generated class reference for MissionMultiplayerTeamDeathmatchClient."
---
# MissionMultiplayerTeamDeathmatchClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerTeamDeathmatchClient : MissionMultiplayerGameModeBaseClient`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs`

## Overview

`MissionMultiplayerTeamDeathmatchClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.OnBehaviorInitialize();
```

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Invoked when the `gold amount changed for representative` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
missionMultiplayerTeamDeathmatchClient.AfterStart();
```

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** Reads and returns the `gold amount` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatchClient from the subsystem API first
MissionMultiplayerTeamDeathmatchClient missionMultiplayerTeamDeathmatchClient = ...;
var result = missionMultiplayerTeamDeathmatchClient.GetGoldAmount();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

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