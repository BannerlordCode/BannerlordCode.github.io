---
title: "DeploymentSiegeMachineVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentSiegeMachineVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentSiegeMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/DeploymentSiegeMachineVM.cs`

## Overview

`DeploymentSiegeMachineVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; set; }` |
| `Type` | `public int Type { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `BreachedText` | `public string BreachedText { get; set; }` |
| `RemainingCount` | `public int RemainingCount { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `IsInFront` | `public bool IsInFront { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### CalculatePosition
`public void CalculatePosition()`

**Purpose:** Handles logic related to `calculate position`.

### RefreshPosition
`public void RefreshPosition()`

**Purpose:** Refreshes the display or cache of `position`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### ExecuteFocusBegin
`public void ExecuteFocusBegin()`

**Purpose:** Executes the `focus begin` operation or workflow.

### ExecuteFocusEnd
`public void ExecuteFocusEnd()`

**Purpose:** Executes the `focus end` operation or workflow.

### RefreshWithDeployedWeapon
`public void RefreshWithDeployedWeapon()`

**Purpose:** Refreshes the display or cache of `with deployed weapon`.

## Usage Example

```csharp
var value = new DeploymentSiegeMachineVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)