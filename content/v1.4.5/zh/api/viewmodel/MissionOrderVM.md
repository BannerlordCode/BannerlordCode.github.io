---
title: "MissionOrderVM"
description: "MissionOrderVM 的自动生成类参考。"
---
# MissionOrderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderVM.cs`

## 概述

`MissionOrderVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CursorState` | `public CursorStates CursorState { get; }` |
| `IsTroopPlacingActive` | `public bool IsTroopPlacingActive { get; set; }` |
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
| `UseAlternativeFormationLayout` | `public bool UseAlternativeFormationLayout { get; set; }` |

## 主要方法

### ClassConfiguration
`public struct ClassConfiguration(int formationIndex, DeploymentFormationClass formationClass)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.ClassConfiguration(0, formationClass);
```

### FormationConfiguration
`public struct FormationConfiguration(int formationIndex, List<FormationFilterType> filters)`

**用途 / Purpose:** 将「ion configuration」格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.FormationConfiguration(0, filters);
```

### SetDeploymentParemeters
`public void SetDeploymentParemeters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)`

**用途 / Purpose:** 为 「deployment paremeters」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetDeploymentParemeters(deploymentCamera, deploymentPoints);
```

### SetCallbacks
`public void SetCallbacks(MissionOrderCallbacks callbacks)`

**用途 / Purpose:** 为 「callbacks」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetCallbacks(callbacks);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnFinalize();
```

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM orderItem)`

**用途 / Purpose:** 在 「order executed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnOrderExecuted(orderItem);
```

### OnOrderLayoutTypeChanged
`public virtual void OnOrderLayoutTypeChanged()`

**用途 / Purpose:** 在 「order layout type changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnOrderLayoutTypeChanged();
```

### OpenToggleOrder
`public void OpenToggleOrder(bool fromHold, bool displayMessage = true)`

**用途 / Purpose:** 打开「toggle order」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OpenToggleOrder(false, false);
```

### TryCloseToggleOrder
`public bool TryCloseToggleOrder(bool applySelectedOrders = false)`

**用途 / Purpose:** 尝试获取 「close toggle order」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.TryCloseToggleOrder(false);
```

### SetActiveOrders
`public void SetActiveOrders()`

**用途 / Purpose:** 为 「active orders」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetActiveOrders();
```

### SetFocusedFormations
`public void SetFocusedFormations(MBReadOnlyList<Formation> focusedFormationsCache)`

**用途 / Purpose:** 为 「focused formations」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetFocusedFormations(focusedFormationsCache);
```

### AfterInitialize
`public void AfterInitialize()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.AfterInitialize();
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.Update();
```

### OnEscape
`public void OnEscape()`

**用途 / Purpose:** 在 「escape」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnEscape();
```

### ViewOrders
`public void ViewOrders()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.ViewOrders();
```

### GetOrderSetAtIndex
`public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「order set at index」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.GetOrderSetAtIndex(0);
```

### TrySelectOrderSet
`public bool TrySelectOrderSet(OrderSetVM orderSet)`

**用途 / Purpose:** 尝试获取 「select order set」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
var result = missionOrderVM.TrySelectOrderSet(orderSet);
```

### OnTroopFormationSelected
`public void OnTroopFormationSelected(int formationTroopIndex)`

**用途 / Purpose:** 在 「troop formation selected」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnTroopFormationSelected(0);
```

### OnTroopHighlightSelection
`public void OnTroopHighlightSelection(bool isDirectionLeft)`

**用途 / Purpose:** 在 「troop highlight selection」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnTroopHighlightSelection(false);
```

### ExecuteSelectHighlightedFormation
`public void ExecuteSelectHighlightedFormation()`

**用途 / Purpose:** 执行 「select highlighted formation」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.ExecuteSelectHighlightedFormation();
```

### ExecuteToggleHighlightedFormation
`public void ExecuteToggleHighlightedFormation()`

**用途 / Purpose:** 执行 「toggle highlighted formation」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.ExecuteToggleHighlightedFormation();
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**用途 / Purpose:** 在 「after deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnAfterDeploymentFinished();
```

### OnFiltersSet
`public void OnFiltersSet(List<FormationConfiguration> filterData)`

**用途 / Purpose:** 在 「filters set」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.OnFiltersSet(filterData);
```

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

**用途 / Purpose:** 重新计算并更新 「can use shortcuts」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.UpdateCanUseShortcuts(false);
```

### SetOrderIndexKey
`public void SetOrderIndexKey(int orderIndex, GameKey gameKey)`

**用途 / Purpose:** 为 「order index key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetOrderIndexKey(0, gameKey);
```

### SetReturnKey
`public void SetReturnKey(GameKey gameKey)`

**用途 / Purpose:** 为 「return key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetReturnKey(gameKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderVM 实例
MissionOrderVM missionOrderVM = ...;
missionOrderVM.SetCancelInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionOrderVM missionOrderVM = ...;
missionOrderVM.ClassConfiguration(0, formationClass);
```

## 参见

- [本区域目录](../)