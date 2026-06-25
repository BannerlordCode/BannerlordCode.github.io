---
title: "MissionRepresentativeBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionRepresentativeBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionRepresentativeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionRepresentativeBase : PeerComponent`
**Base:** `PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`

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

**Purpose:** Sets the value or state of `agent`.

### OnAgentSpawned
`public virtual void OnAgentSpawned()`

**Purpose:** Called when the `agent spawned` event is raised.

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### UpdateGold
`public void UpdateGold(int gold)`

**Purpose:** Updates the state or data of `gold`.

## Usage Example

```csharp
var implementation = new CustomMissionRepresentativeBase();
```

## See Also

- [Complete Class Catalog](../catalog)