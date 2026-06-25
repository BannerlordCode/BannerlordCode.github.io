---
title: "MissionAgentAlarmTargetVM"
description: "Auto-generated class reference for MissionAgentAlarmTargetVM."
---
# MissionAgentAlarmTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionAgentAlarmTargetVM.cs`

## Overview

`MissionAgentAlarmTargetVM` lives in `SandBox.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasCautiousness` | `public bool HasCautiousness { get; }` |
| `AlarmedBehaviorGroup` | `public AlarmedBehaviorGroup AlarmedBehaviorGroup { get; }` |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled { get; set; }` |
| `IsMainAgentInVisibilityRange` | `public bool IsMainAgentInVisibilityRange { get; set; }` |
| `IsInVision` | `public bool IsInVision { get; set; }` |
| `IsSuspected` | `public bool IsSuspected { get; set; }` |
| `AlarmProgress` | `public int AlarmProgress { get; set; }` |
| `AlarmState` | `public string AlarmState { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |

## Key Methods

### UpdateValues
`public void UpdateValues()`

**Purpose:** Recalculates and stores the latest representation of `values`.

```csharp
// Obtain an instance of MissionAgentAlarmTargetVM from the subsystem API first
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.UpdateValues();
```

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of `screen position`.

```csharp
// Obtain an instance of MissionAgentAlarmTargetVM from the subsystem API first
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.UpdateScreenPosition(missionCamera);
```

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Runs the operation or workflow associated with `remove`.

```csharp
// Obtain an instance of MissionAgentAlarmTargetVM from the subsystem API first
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.ExecuteRemove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentAlarmTargetVM missionAgentAlarmTargetVM = ...;
missionAgentAlarmTargetVM.UpdateValues();
```

## See Also

- [Area Index](../)