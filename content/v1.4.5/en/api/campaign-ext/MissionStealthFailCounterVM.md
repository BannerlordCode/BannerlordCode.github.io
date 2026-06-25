---
title: "MissionStealthFailCounterVM"
description: "Auto-generated class reference for MissionStealthFailCounterVM."
---
# MissionStealthFailCounterVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionStealthFailCounterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout/MissionStealthFailCounterVM.cs`

## Overview

`MissionStealthFailCounterVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CountDownText` | `public string CountDownText { get; set; }` |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime { get; set; }` |
| `FailCounterMaxTime` | `public float FailCounterMaxTime { get; set; }` |
| `IsCounterActive` | `public bool IsCounterActive { get; set; }` |

## Key Methods

### UpdateFailCounter
`public void UpdateFailCounter(float failCounterElapsedTime, float failCounterMaxTime, bool isStealthFailCounterMissionLogicActive)`

**Purpose:** Recalculates and stores the latest representation of `fail counter`.

```csharp
// Obtain an instance of MissionStealthFailCounterVM from the subsystem API first
MissionStealthFailCounterVM missionStealthFailCounterVM = ...;
missionStealthFailCounterVM.UpdateFailCounter(0, 0, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionStealthFailCounterVM missionStealthFailCounterVM = ...;
missionStealthFailCounterVM.UpdateFailCounter(0, 0, false);
```

## See Also

- [Area Index](../)