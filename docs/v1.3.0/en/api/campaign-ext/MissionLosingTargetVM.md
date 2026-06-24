<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLosingTargetVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLosingTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionLosingTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### UpdateLosingTargetValues
`public void UpdateLosingTargetValues(bool isLosingTarget, float losingTargetTimer, float losingTargetTreshold)`

**Purpose:** Updates the state or data of `losing target values`.

## Usage Example

```csharp
var value = new MissionLosingTargetVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)