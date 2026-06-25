---
title: "MissionMultiplayerSiegeClient"
description: "Auto-generated class reference for MissionMultiplayerSiegeClient."
---
# MissionMultiplayerSiegeClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiegeClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs`

## Overview

`MissionMultiplayerSiegeClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.AfterStart();
```

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** Reads and returns the `gold amount` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
var result = missionMultiplayerSiegeClient.GetGoldAmount();
```

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Invoked when the `gold amount changed for representative` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

**Purpose:** Invoked when the `number of flags changed` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnNumberOfFlagsChanged();
```

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)`

**Purpose:** Invoked when the `capture point owner changed` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnCapturePointOwnerChanged(flagCapturePoint, ownerTeam);
```

### OnMoraleChanged
`public void OnMoraleChanged(int attackerMorale, int defenderMorale, int capturePointRemainingMoraleGains)`

**Purpose:** Invoked when the `morale changed` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnMoraleChanged(0, 0, 0);
```

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

**Purpose:** Reads and returns the `flag owner` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
var result = missionMultiplayerSiegeClient.GetFlagOwner(flag);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnRemoveBehavior();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnMissionTick(0);
```

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles()`

**Purpose:** Reads and returns the `siege missiles` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerSiegeClient from the subsystem API first
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
var result = missionMultiplayerSiegeClient.GetSiegeMissiles();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerSiegeClient missionMultiplayerSiegeClient = ...;
missionMultiplayerSiegeClient.OnBehaviorInitialize();
```

## See Also

- [Area Index](../)