---
title: "MissionAgentAlarmTargetVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentAlarmTargetVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentAlarmTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionAgentAlarmTargetVM.cs`

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

**Purpose:** Updates the state or data of `values`.

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Updates the state or data of `screen position`.

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

## Usage Example

```csharp
var value = new MissionAgentAlarmTargetVM();
value.UpdateValues();
```

## See Also

- [Complete Class Catalog](../catalog)