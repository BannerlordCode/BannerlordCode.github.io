---
title: "DuelMissionRepresentative"
description: "Auto-generated class reference for DuelMissionRepresentative."
---
# DuelMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs`

## Overview

`DuelMissionRepresentative` lives in `TaleWorlds.MountAndBlade.MissionRepresentatives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.MissionRepresentatives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Bounty` | `public int Bounty { get; }` |
| `Score` | `public int Score { get; }` |
| `NumberOfWins` | `public int NumberOfWins { get; }` |

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.Initialize();
```

### AddRemoveMessageHandlers
`public void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

**Purpose:** Adds `remove message handlers` to the current collection or state.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.AddRemoveMessageHandlers(mode);
```

### OnInteraction
`public void OnInteraction()`

**Purpose:** Invoked when the `interaction` event is raised.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnInteraction();
```

### DuelRequested
`public void DuelRequested(Agent requesterAgent, TroopType selectedAreaTroopType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.DuelRequested(requesterAgent, selectedAreaTroopType);
```

### CheckHasRequestFromAndRemoveRequestIfNeeded
`public bool CheckHasRequestFromAndRemoveRequestIfNeeded(MissionPeer requestOwner)`

**Purpose:** Verifies whether `has request from and remove request if needed` holds true for the current object.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
var result = duelMissionRepresentative.CheckHasRequestFromAndRemoveRequestIfNeeded(requestOwner);
```

### OnDuelPreparation
`public void OnDuelPreparation(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**Purpose:** Invoked when the `duel preparation` event is raised.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnDuelPreparation(requesterPeer, requesteePeer);
```

### OnObjectFocused
`public void OnObjectFocused(IFocusable focusedObject)`

**Purpose:** Invoked when the `object focused` event is raised.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnObjectFocused(focusedObject);
```

### OnObjectFocusLost
`public void OnObjectFocusLost()`

**Purpose:** Invoked when the `object focus lost` event is raised.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnObjectFocusLost();
```

### OnAgentSpawned
`public override void OnAgentSpawned()`

**Purpose:** Invoked when the `agent spawned` event is raised.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnAgentSpawned();
```

### ResetBountyAndNumberOfWins
`public void ResetBountyAndNumberOfWins()`

**Purpose:** Returns `bounty and number of wins` to its default or initial condition.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.ResetBountyAndNumberOfWins();
```

### OnDuelWon
`public void OnDuelWon(float gainedScore)`

**Purpose:** Invoked when the `duel won` event is raised.

```csharp
// Obtain an instance of DuelMissionRepresentative from the subsystem API first
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnDuelWon(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.Initialize();
```

## See Also

- [Area Index](../)