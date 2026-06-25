---
title: "FormationConfiguration"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationConfiguration`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationConfiguration

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct FormationConfiguration`
**领域:** mission-ext

## 概述

`FormationConfiguration` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CursorState` | `public MissionOrderVM.CursorStates CursorState { get; }` |
| `Team` | `public Team Team { get; }` |
| `OrderController` | `public OrderController OrderController { get; set; }` |
| `IsTroopPlacingActive` | `public bool IsTroopPlacingActive { get; set; }` |
| `PlayerHasAnyTroopUnderThem` | `public bool PlayerHasAnyTroopUnderThem { get; }` |
| `SelectedOrderSet` | `public OrderSetVM SelectedOrderSet { get; }` |
| `DisplayedOrderMessageForLastOrder` | `public bool DisplayedOrderMessageForLastOrder { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `OrderSets` | `public MBBindingList<OrderSetVM> OrderSets { get; set; }` |
| `TroopController` | `public MissionOrderTroopControllerVM TroopController { get; set; }` |
| `DeploymentController` | `public MissionOrderDeploymentControllerVM DeploymentController { get; set; }` |
| `ActiveTargetState` | `public int ActiveTargetState { get; set; }` |
| `IsDeployment` | `public bool IsDeployment { get; set; }` |
| `HasAnyCascadingOrders` | `public bool HasAnyCascadingOrders { get; set; }` |
| `IsToggleOrderShown` | `public bool IsToggleOrderShown { get; set; }` |
| `IsTroopListShown` | `public bool IsTroopListShown { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `IsHolding` | `public bool IsHolding { get; set; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; set; }` |
| `ReturnText` | `public string ReturnText { get; set; }` |

## 主要方法

### SetDeploymentParemeters
`public void SetDeploymentParemeters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)`

**用途 / Purpose:** 设置 `deployment paremeters` 的值或状态。

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**用途 / Purpose:** 设置 `callbacks` 的值或状态。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM orderItem)`

**用途 / Purpose:** 当 `order executed` 事件触发时调用此方法。

### OnOrderLayoutTypeChanged
`public virtual void OnOrderLayoutTypeChanged()`

**用途 / Purpose:** 当 `order layout type changed` 事件触发时调用此方法。

### OpenToggleOrder
`public void OpenToggleOrder(bool fromHold, bool displayMessage = true)`

**用途 / Purpose:** 处理 `open toggle order` 相关逻辑。

### TryCloseToggleOrder
`public bool TryCloseToggleOrder(bool applySelectedOrders = false)`

**用途 / Purpose:** 尝试获取 `close toggle order`，通常以 out 参数返回结果。

### SetActiveOrders
`public void SetActiveOrders()`

**用途 / Purpose:** 设置 `active orders` 的值或状态。

### SetFocusedFormations
`public void SetFocusedFormations(MBReadOnlyList<Formation> focusedFormationsCache)`

**用途 / Purpose:** 设置 `focused formations` 的值或状态。

### AfterInitialize
`public void AfterInitialize()`

**用途 / Purpose:** 处理 `after initialize` 相关逻辑。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnEscape
`public void OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

### ViewOrders
`public void ViewOrders()`

**用途 / Purpose:** 处理 `view orders` 相关逻辑。

### GetOrderSetAtIndex
`public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)`

**用途 / Purpose:** 获取 `order set at index` 的当前值。

### TrySelectOrderSet
`public bool TrySelectOrderSet(OrderSetVM orderSet)`

**用途 / Purpose:** 尝试获取 `select order set`，通常以 out 参数返回结果。

### OnTroopFormationSelected
`public void OnTroopFormationSelected(int formationTroopIndex)`

**用途 / Purpose:** 当 `troop formation selected` 事件触发时调用此方法。

### ExecuteSelectHighlightedFormation
`public void ExecuteSelectHighlightedFormation()`

**用途 / Purpose:** 执行 `select highlighted formation` 操作或流程。

### OnTroopHighlightSelection
`public void OnTroopHighlightSelection(bool isDirectionLeft)`

**用途 / Purpose:** 当 `troop highlight selection` 事件触发时调用此方法。

### ExecuteToggleHighlightedFormation
`public void ExecuteToggleHighlightedFormation()`

**用途 / Purpose:** 执行 `toggle highlighted formation` 操作或流程。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 FormationConfiguration 实例，再调用它的公开方法
var value = new FormationConfiguration();
value.SetDeploymentParemeters(deploymentCamera, deploymentPoints);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
