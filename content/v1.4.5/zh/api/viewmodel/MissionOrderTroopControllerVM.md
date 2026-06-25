---
title: "MissionOrderTroopControllerVM"
description: "MissionOrderTroopControllerVM 的自动生成类参考。"
---
# MissionOrderTroopControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderTroopControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderTroopControllerVM.cs`

## 概述

`MissionOrderTroopControllerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopList` | `public MBList<OrderTroopItemVM> TroopList { get; }` |
| `IsTransferActive` | `public bool IsTransferActive { get; set; }` |
| `IsTransferValid` | `public bool IsTransferValid { get; set; }` |
| `TransferTargetList` | `public MBBindingList<OrderTroopItemVM> TransferTargetList { get; set; }` |
| `TransferMaxValue` | `public int TransferMaxValue { get; set; }` |
| `TransferValue` | `public int TransferValue { get; set; }` |
| `TransferTitleText` | `public string TransferTitleText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TroopItem0` | `public OrderTroopItemVM TroopItem0 { get; set; }` |
| `TroopItem1` | `public OrderTroopItemVM TroopItem1 { get; set; }` |
| `TroopItem2` | `public OrderTroopItemVM TroopItem2 { get; set; }` |
| `TroopItem3` | `public OrderTroopItemVM TroopItem3 { get; set; }` |
| `TroopItem4` | `public OrderTroopItemVM TroopItem4 { get; set; }` |
| `TroopItem5` | `public OrderTroopItemVM TroopItem5 { get; set; }` |
| `TroopItem6` | `public OrderTroopItemVM TroopItem6 { get; set; }` |
| `TroopItem7` | `public OrderTroopItemVM TroopItem7 { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |

## 主要方法

### Compare
`public int Compare(OrderTroopItemVM x, OrderTroopItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
var result = missionOrderTroopControllerVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnFinalize();
```

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**用途 / Purpose:** 执行 「select all」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteSelectAll();
```

### ExecuteSelectTransferTroop
`public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop)`

**用途 / Purpose:** 执行 「select transfer troop」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteSelectTransferTroop(targetTroop);
```

### ExecuteConfirmTransfer
`public void ExecuteConfirmTransfer()`

**用途 / Purpose:** 执行 「confirm transfer」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteConfirmTransfer();
```

### ExecuteCancelTransfer
`public void ExecuteCancelTransfer()`

**用途 / Purpose:** 执行 「cancel transfer」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteCancelTransfer();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 「reset」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.ExecuteReset();
```

### SetTroopActiveOrders
`public void SetTroopActiveOrders(OrderTroopItemVM item)`

**用途 / Purpose:** 为 「troop active orders」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetTroopActiveOrders(item);
```

### SelectAllFormations
`public virtual void SelectAllFormations(bool uiFeedback = true)`

**用途 / Purpose:** 处理与 「select all formations」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SelectAllFormations(false);
```

### AddSelectedFormation
`public virtual void AddSelectedFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 将 「selected formation」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.AddSelectedFormation(item);
```

### SetSelectedFormation
`public void SetSelectedFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 为 「selected formation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetSelectedFormation(item);
```

### OnDeselectFormation
`public void OnDeselectFormation(int index)`

**用途 / Purpose:** 在 「deselect formation」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnDeselectFormation(0);
```

### OnDeselectFormation
`public void OnDeselectFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 在 「deselect formation」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnDeselectFormation(item);
```

### OnSelectFormation
`public void OnSelectFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 在 「select formation」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnSelectFormation(item);
```

### UpdateTroops
`public void UpdateTroops()`

**用途 / Purpose:** 重新计算并更新 「troops」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.UpdateTroops();
```

### AddTroops
`public void AddTroops(Agent agent)`

**用途 / Purpose:** 将 「troops」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.AddTroops(agent);
```

### RemoveTroops
`public void RemoveTroops(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 「troops」。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.RemoveTroops(agent);
```

### OnTroopOrderIssued
`public void OnTroopOrderIssued(List<OrderTroopItemVM> selectedFormations, OrderItemVM orderItem)`

**用途 / Purpose:** 在 「troop order issued」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnTroopOrderIssued(selectedFormations, orderItem);
```

### IntervalUpdate
`public void IntervalUpdate()`

**用途 / Purpose:** 处理与 「interval update」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.IntervalUpdate();
```

### RefreshTroopFormationTargetVisuals
`public void RefreshTroopFormationTargetVisuals()`

**用途 / Purpose:** 使 「troop formation target visuals」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.RefreshTroopFormationTargetVisuals();
```

### OnSelectFormationWithIndex
`public void OnSelectFormationWithIndex(int formationTroopIndex)`

**用途 / Purpose:** 在 「select formation with index」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnSelectFormationWithIndex(0);
```

### SetCurrentActiveOrders
`public void SetCurrentActiveOrders()`

**用途 / Purpose:** 为 「current active orders」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetCurrentActiveOrders();
```

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**用途 / Purpose:** 在 「filters set」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnFiltersSet(filterData);
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**用途 / Purpose:** 在 「after deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.OnAfterDeploymentFinished();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetCancelInputKey(hotKey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「reset input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionOrderTroopControllerVM 实例
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.SetResetInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionOrderTroopControllerVM missionOrderTroopControllerVM = ...;
missionOrderTroopControllerVM.Compare(x, y);
```

## 参见

- [本区域目录](../)