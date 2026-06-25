---
title: "DeploymentSiegeMachineVM"
description: "Auto-generated class reference for DeploymentSiegeMachineVM."
---
# DeploymentSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentSiegeMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs`

## Overview

`DeploymentSiegeMachineVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; }` |
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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshValues();
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.Update();
```

### CalculatePosition
`public void CalculatePosition()`

**Purpose:** Calculates the current value or result of position.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.CalculatePosition();
```

### RefreshPosition
`public void RefreshPosition()`

**Purpose:** Keeps the display or cache of position in sync with the underlying state.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshPosition();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.ExecuteAction();
```

### ExecuteFocusBegin
`public void ExecuteFocusBegin()`

**Purpose:** Runs the operation or workflow associated with focus begin.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.ExecuteFocusBegin();
```

### ExecuteFocusEnd
`public void ExecuteFocusEnd()`

**Purpose:** Runs the operation or workflow associated with focus end.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.ExecuteFocusEnd();
```

### RefreshWithDeployedWeapon
`public void RefreshWithDeployedWeapon()`

**Purpose:** Keeps the display or cache of with deployed weapon in sync with the underlying state.

```csharp
// Obtain an instance of DeploymentSiegeMachineVM from the subsystem API first
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshWithDeployedWeapon();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DeploymentSiegeMachineVM deploymentSiegeMachineVM = ...;
deploymentSiegeMachineVM.RefreshValues();
```

## See Also

- [Area Index](../)