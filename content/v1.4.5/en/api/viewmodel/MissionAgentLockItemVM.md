---
title: "MissionAgentLockItemVM"
description: "Auto-generated class reference for MissionAgentLockItemVM."
---
# MissionAgentLockItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLockItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionAgentLockItemVM.cs`

## Overview

`MissionAgentLockItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TrackedAgent` | `public Agent TrackedAgent { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## Key Methods

### SetLockState
`public void SetLockState(LockStates lockState)`

**Purpose:** **Purpose:** Assigns a new value to lock state and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentLockItemVM from the subsystem API first
MissionAgentLockItemVM missionAgentLockItemVM = ...;
missionAgentLockItemVM.SetLockState(lockState);
```

### UpdatePosition
`public void UpdatePosition(Vec2 position)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MissionAgentLockItemVM from the subsystem API first
MissionAgentLockItemVM missionAgentLockItemVM = ...;
missionAgentLockItemVM.UpdatePosition(position);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentLockItemVM missionAgentLockItemVM = ...;
missionAgentLockItemVM.SetLockState(lockState);
```

## See Also

- [Area Index](../)