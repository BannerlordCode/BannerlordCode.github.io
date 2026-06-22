<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOrderDeploymentControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOrderDeploymentControllerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionOrderDeploymentControllerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `OrderController` | `public OrderController OrderController { get; }` |
| `SiegeMachineList` | `public MBBindingList<OrderSiegeMachineVM> SiegeMachineList { get; set; }` |
| `DeploymentTargets` | `public MBBindingList<DeploymentSiegeMachineVM> DeploymentTargets { get; set; }` |
| `IsSiegeDeploymentListActive` | `public bool IsSiegeDeploymentListActive { get; set; }` |
| `SiegeDeploymentList` | `public MBBindingList<DeploymentSiegeMachineVM> SiegeDeploymentList { get; set; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)