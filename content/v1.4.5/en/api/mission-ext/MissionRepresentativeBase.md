---
title: "MissionRepresentativeBase"
description: "Auto-generated class reference for MissionRepresentativeBase."
---
# MissionRepresentativeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionRepresentativeBase : PeerComponent`
**Base:** `PeerComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`

## Overview

`MissionRepresentativeBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ControlledAgent` | `public Agent ControlledAgent { get; }` |
| `Gold` | `public int Gold { get; }` |
| `MissionPeer` | `public MissionPeer MissionPeer { get; }` |

## Key Methods

### SetAgent
`public void SetAgent(Agent agent)`

**Purpose:** Assigns a new value to agent and updates the object's internal state.

```csharp
// Obtain an instance of MissionRepresentativeBase from the subsystem API first
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.SetAgent(agent);
```

### OnAgentSpawned
`public virtual void OnAgentSpawned()`

**Purpose:** Invoked when the agent spawned event is raised.

```csharp
// Obtain an instance of MissionRepresentativeBase from the subsystem API first
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.OnAgentSpawned();
```

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionRepresentativeBase from the subsystem API first
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.Tick(0);
```

### UpdateGold
`public void UpdateGold(int gold)`

**Purpose:** Recalculates and stores the latest representation of gold.

```csharp
// Obtain an instance of MissionRepresentativeBase from the subsystem API first
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.UpdateGold(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionRepresentativeBase instance = ...;
```

## See Also

- [Area Index](../)