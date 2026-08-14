---
title: "MissionOrderDeploymentControllerVM"
description: "MissionOrderDeploymentControllerVM 的自动生成类参考。"
---
# MissionOrderDeploymentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderDeploymentControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs`

## 概述

`MissionOrderDeploymentControllerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void SetMissionParameters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)`

**用途 / Purpose:** 为 mission parameters 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.SetMissionParameters(deploymentCamera, deploymentPoints);
```

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**用途 / Purpose:** 为 callbacks 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.SetCallbacks(callbacks);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.RefreshValues();
```

### OnRefreshSelectedDeploymentPoint
`public void OnRefreshSelectedDeploymentPoint(DeploymentSiegeMachineVM item)`

**用途 / Purpose:** 在 refresh selected deployment point 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnRefreshSelectedDeploymentPoint(item);
```

### OnEntityHover
`public void OnEntityHover(WeakGameEntity hoveredEntity)`

**用途 / Purpose:** 在 entity hover 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnEntityHover(hoveredEntity);
```

### OnEntityHover
`public void OnEntityHover(DeploymentPoint deploymentPoint)`

**用途 / Purpose:** 在 entity hover 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnEntityHover(deploymentPoint);
```

### OnEntitySelect
`public void OnEntitySelect(WeakGameEntity selectedEntity)`

**用途 / Purpose:** 在 entity select 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnEntitySelect(selectedEntity);
```

### RefreshSelectedDeploymentPoint
`public void RefreshSelectedDeploymentPoint(DeploymentPoint selectedDeploymentPoint)`

**用途 / Purpose:** 使 selected deployment point 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.RefreshSelectedDeploymentPoint(selectedDeploymentPoint);
```

### ExecuteCancelSelectedDeploymentPoint
`public void ExecuteCancelSelectedDeploymentPoint()`

**用途 / Purpose:** 执行 cancel selected deployment point 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteCancelSelectedDeploymentPoint();
```

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**用途 / Purpose:** 执行 begin mission 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteBeginMission();
```

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**用途 / Purpose:** 执行 auto deploy 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteAutoDeploy();
```

### ExecuteDeployPlayerSide
`public void ExecuteDeployPlayerSide()`

**用途 / Purpose:** 执行 deploy player side 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.ExecuteDeployPlayerSide();
```

### FinalizeDeployment
`public void FinalizeDeployment()`

**用途 / Purpose:** 调用 FinalizeDeployment 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.FinalizeDeployment();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderDeploymentControllerVM 实例
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionOrderDeploymentControllerVM missionOrderDeploymentControllerVM = ...;
missionOrderDeploymentControllerVM.SetMissionParameters(deploymentCamera, deploymentPoints);
```

## 参见

- [本区域目录](../)