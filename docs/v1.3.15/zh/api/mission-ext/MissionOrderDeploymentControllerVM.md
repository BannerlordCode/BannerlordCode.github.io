<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOrderDeploymentControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `mission parameters` 的值或状态。

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**用途 / Purpose:** 设置 `callbacks` 的值或状态。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnRefreshSelectedDeploymentPoint
`public void OnRefreshSelectedDeploymentPoint(DeploymentSiegeMachineVM item)`

**用途 / Purpose:** 当 `refresh selected deployment point` 事件触发时调用此方法。

### OnEntityHover
`public void OnEntityHover(WeakGameEntity hoveredEntity)`

**用途 / Purpose:** 当 `entity hover` 事件触发时调用此方法。

### OnEntityHover
`public void OnEntityHover(DeploymentPoint deploymentPoint)`

**用途 / Purpose:** 当 `entity hover` 事件触发时调用此方法。

### OnEntitySelect
`public void OnEntitySelect(WeakGameEntity selectedEntity)`

**用途 / Purpose:** 当 `entity select` 事件触发时调用此方法。

### RefreshSelectedDeploymentPoint
`public void RefreshSelectedDeploymentPoint(DeploymentPoint selectedDeploymentPoint)`

**用途 / Purpose:** 刷新 `selected deployment point` 的显示或缓存。

### ExecuteCancelSelectedDeploymentPoint
`public void ExecuteCancelSelectedDeploymentPoint()`

**用途 / Purpose:** 执行 `cancel selected deployment point` 操作或流程。

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**用途 / Purpose:** 执行 `begin mission` 操作或流程。

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**用途 / Purpose:** 执行 `auto deploy` 操作或流程。

### ExecuteDeployPlayerSide
`public void ExecuteDeployPlayerSide()`

**用途 / Purpose:** 执行 `deploy player side` 操作或流程。

### FinalizeDeployment
`public void FinalizeDeployment()`

**用途 / Purpose:** 处理 `finalize deployment` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionOrderDeploymentControllerVM();
value.SetMissionParameters(deploymentCamera, deploymentPoints);
```

## 参见

- [完整类目录](../catalog)