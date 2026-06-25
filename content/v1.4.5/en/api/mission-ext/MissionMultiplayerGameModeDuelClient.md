---
title: "MissionMultiplayerGameModeDuelClient"
description: "Auto-generated class reference for MissionMultiplayerGameModeDuelClient."
---
# MissionMultiplayerGameModeDuelClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeDuelClient : MissionMultiplayerGameModeBaseClient`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs`

## Overview

`MissionMultiplayerGameModeDuelClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MyRepresentative` | `public DuelMissionRepresentative MyRepresentative { get; }` |

## Key Methods

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** Reads and returns the `gold amount` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerGameModeDuelClient from the subsystem API first
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
var result = missionMultiplayerGameModeDuelClient.GetGoldAmount();
```

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Invoked when the `gold amount changed for representative` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeDuelClient from the subsystem API first
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeDuelClient from the subsystem API first
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeDuelClient from the subsystem API first
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnRemoveBehavior();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeDuelClient from the subsystem API first
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### CanRequestCultureChange
`public override bool CanRequestCultureChange()`

**Purpose:** Checks whether the current object meets the preconditions for `request culture change`.

```csharp
// Obtain an instance of MissionMultiplayerGameModeDuelClient from the subsystem API first
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
var result = missionMultiplayerGameModeDuelClient.CanRequestCultureChange();
```

### CanRequestTroopChange
`public override bool CanRequestTroopChange()`

**Purpose:** Checks whether the current object meets the preconditions for `request troop change`.

```csharp
// Obtain an instance of MissionMultiplayerGameModeDuelClient from the subsystem API first
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
var result = missionMultiplayerGameModeDuelClient.CanRequestTroopChange();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.GetGoldAmount();
```

## See Also

- [Area Index](../)