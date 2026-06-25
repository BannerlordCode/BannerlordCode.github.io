---
title: "MissionOrderDeploymentControllerVM"
description: "Auto-generated class reference for MissionOrderDeploymentControllerVM."
---
# MissionOrderDeploymentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderDeploymentControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs`

## Overview

`MissionOrderDeploymentControllerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderController` | `public OrderController OrderController { get; }` |
| `SiegeMachineList` | `public MBBindingList<OrderSiegeMachineVM> SiegeMachineList { get; set; }` |
| `DeploymentTargets` | `public MBBindingList<DeploymentSiegeMachineVM> DeploymentTargets { get; set; }` |
| `IsSiegeDeploymentListActive` | `public bool IsSiegeDeploymentListActive { get; set; }` |
| `SiegeDeploymentList` | `public MBBindingList<DeploymentSiegeMachineVM> SiegeDeploymentList { get; set; }` |

## Key Methods

### SetMissionParameters
`public void SetMissionParameters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)`

**Purpose:** Assigns a new value to `mission parameters` and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.SetMissionParameters(deploymentCamera, deploymentPoints);
```

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**Purpose:** Assigns a new value to `callbacks` and updates the object's internal state.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.SetCallbacks(callbacks);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.RefreshValues();
```

### OnRefreshSelectedDeploymentPoint
`public void OnRefreshSelectedDeploymentPoint(DeploymentSiegeMachineVM item)`

**Purpose:** Invoked when the `refresh selected deployment point` event is raised.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnRefreshSelectedDeploymentPoint(item);
```

### OnEntityHover
`public void OnEntityHover(WeakGameEntity hoveredEntity)`

**Purpose:** Invoked when the `entity hover` event is raised.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnEntityHover(hoveredEntity);
```

### OnEntityHover
`public void OnEntityHover(DeploymentPoint deploymentPoint)`

**Purpose:** Invoked when the `entity hover` event is raised.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnEntityHover(deploymentPoint);
```

### OnEntitySelect
`public void OnEntitySelect(WeakGameEntity selectedEntity)`

**Purpose:** Invoked when the `entity select` event is raised.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnEntitySelect(selectedEntity);
```

### RefreshSelectedDeploymentPoint
`public void RefreshSelectedDeploymentPoint(DeploymentPoint selectedDeploymentPoint)`

**Purpose:** Keeps the display or cache of `selected deployment point` in sync with the underlying state.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.RefreshSelectedDeploymentPoint(selectedDeploymentPoint);
```

### ExecuteCancelSelectedDeploymentPoint
`public void ExecuteCancelSelectedDeploymentPoint()`

**Purpose:** Runs the operation or workflow associated with `cancel selected deployment point`.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteCancelSelectedDeploymentPoint();
```

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**Purpose:** Runs the operation or workflow associated with `begin mission`.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteBeginMission();
```

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**Purpose:** Runs the operation or workflow associated with `auto deploy`.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteAutoDeploy();
```

### ExecuteDeployPlayerSide
`public void ExecuteDeployPlayerSide()`

**Purpose:** Runs the operation or workflow associated with `deploy player side`.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteDeployPlayerSide();
```

### FinalizeDeployment
`public void FinalizeDeployment()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.FinalizeDeployment();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MissionOrderDeploymentControllerVM from the subsystem API first
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.SetMissionParameters(deploymentCamera, deploymentPoints);
```

## See Also

- [Area Index](../)