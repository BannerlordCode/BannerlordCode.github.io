---
title: "MissionLeaveVM"
description: "Auto-generated class reference for MissionLeaveVM."
---
# MissionLeaveVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLeaveVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs`

## Overview

`MissionLeaveVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeaveText` | `public string LeaveText { get; set; }` |
| `MaxTime` | `public float MaxTime { get; set; }` |
| `CurrentTime` | `public float CurrentTime { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionLeaveVM from the subsystem API first
MissionLeaveVM missionLeaveVM = ...;
missionLeaveVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionLeaveVM from the subsystem API first
MissionLeaveVM missionLeaveVM = ...;
missionLeaveVM.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionLeaveVM missionLeaveVM = ...;
missionLeaveVM.RefreshValues();
```

## See Also

- [Area Index](../)