<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOrderDeploymentControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOrderDeploymentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionOrderDeploymentControllerVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void SetMissionParameters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)
```

### SetCallbacks

```csharp
public void SetCallbacks(MissionOrderCallbacks callbacks)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnRefreshSelectedDeploymentPoint

```csharp
public void OnRefreshSelectedDeploymentPoint(DeploymentSiegeMachineVM item)
```

### OnEntityHover

```csharp
public void OnEntityHover(WeakGameEntity hoveredEntity)
```

### OnEntityHover

```csharp
public void OnEntityHover(DeploymentPoint deploymentPoint)
```

### OnEntitySelect

```csharp
public void OnEntitySelect(WeakGameEntity selectedEntity)
```

### RefreshSelectedDeploymentPoint

```csharp
public void RefreshSelectedDeploymentPoint(DeploymentPoint selectedDeploymentPoint)
```

### ExecuteCancelSelectedDeploymentPoint

```csharp
public void ExecuteCancelSelectedDeploymentPoint()
```

### ExecuteBeginMission

```csharp
public void ExecuteBeginMission()
```

### ExecuteAutoDeploy

```csharp
public void ExecuteAutoDeploy()
```

### ExecuteDeployPlayerSide

```csharp
public void ExecuteDeployPlayerSide()
```

### FinalizeDeployment

```csharp
public void FinalizeDeployment()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)