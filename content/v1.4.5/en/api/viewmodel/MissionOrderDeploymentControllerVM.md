---
title: "MissionOrderDeploymentControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOrderDeploymentControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionOrderDeploymentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderDeploymentControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderDeploymentControllerVM.cs`

## Overview

`MissionOrderDeploymentControllerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeMachineList` | `public MBBindingList<OrderSiegeMachineVM> SiegeMachineList { get; set; }` |
| `DeploymentTargets` | `public MBBindingList<DeploymentSiegeMachineVM> DeploymentTargets { get; set; }` |
| `IsSiegeDeploymentListActive` | `public bool IsSiegeDeploymentListActive { get; set; }` |
| `SiegeDeploymentList` | `public MBBindingList<DeploymentSiegeMachineVM> SiegeDeploymentList { get; set; }` |

## Key Methods

### SetMissionParameters
`public void SetMissionParameters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)`

**Purpose:** Sets the value or state of `mission parameters`.

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**Purpose:** Sets the value or state of `callbacks`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnRefreshSelectedDeploymentPoint
`public void OnRefreshSelectedDeploymentPoint(DeploymentSiegeMachineVM item)`

**Purpose:** Called when the `refresh selected deployment point` event is raised.

### OnEntityHover
`public void OnEntityHover(WeakGameEntity hoveredEntity)`

**Purpose:** Called when the `entity hover` event is raised.

### OnEntityHover
`public void OnEntityHover(DeploymentPoint deploymentPoint)`

**Purpose:** Called when the `entity hover` event is raised.

### OnEntitySelect
`public void OnEntitySelect(WeakGameEntity selectedEntity)`

**Purpose:** Called when the `entity select` event is raised.

### RefreshSelectedDeploymentPoint
`public void RefreshSelectedDeploymentPoint(DeploymentPoint selectedDeploymentPoint)`

**Purpose:** Refreshes the display or cache of `selected deployment point`.

### ExecuteCancelSelectedDeploymentPoint
`public void ExecuteCancelSelectedDeploymentPoint()`

**Purpose:** Executes the `cancel selected deployment point` operation or workflow.

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**Purpose:** Executes the `begin mission` operation or workflow.

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**Purpose:** Executes the `auto deploy` operation or workflow.

### ExecuteDeployPlayerSide
`public void ExecuteDeployPlayerSide()`

**Purpose:** Executes the `deploy player side` operation or workflow.

### FinalizeDeployment
`public void FinalizeDeployment()`

**Purpose:** Handles logic related to `finalize deployment`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MissionOrderDeploymentControllerVM();
value.SetMissionParameters(deploymentCamera, deploymentPoints);
```

## See Also

- [Complete Class Catalog](../catalog)