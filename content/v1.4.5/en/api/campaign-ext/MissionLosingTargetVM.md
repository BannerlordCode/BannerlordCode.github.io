---
title: "MissionLosingTargetVM"
description: "Auto-generated class reference for MissionLosingTargetVM."
---
# MissionLosingTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionLosingTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionLosingTargetVM.cs`

## Overview

`MissionLosingTargetVM` lives in `SandBox.ViewModelCollection.Missions.MainAgentDetection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLosingTarget` | `public bool IsLosingTarget { get; set; }` |
| `LosingTargetRatio` | `public float LosingTargetRatio { get; set; }` |
| `LosingTargetWarningText` | `public string LosingTargetWarningText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionLosingTargetVM from the subsystem API first
MissionLosingTargetVM missionLosingTargetVM = ...;
missionLosingTargetVM.RefreshValues();
```

### UpdateLosingTargetValues
`public void UpdateLosingTargetValues(bool isLosingTarget, float losingTargetTimer, float losingTargetTreshold)`

**Purpose:** Recalculates and stores the latest representation of losing target values.

```csharp
// Obtain an instance of MissionLosingTargetVM from the subsystem API first
MissionLosingTargetVM missionLosingTargetVM = ...;
missionLosingTargetVM.UpdateLosingTargetValues(false, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionLosingTargetVM missionLosingTargetVM = ...;
missionLosingTargetVM.RefreshValues();
```

## See Also

- [Area Index](../)