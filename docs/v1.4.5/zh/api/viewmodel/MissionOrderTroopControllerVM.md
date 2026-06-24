<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOrderTroopControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionOrderTroopControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderTroopControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderTroopControllerVM.cs`

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

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**用途 / Purpose:** 执行 `select all` 操作或流程。

### ExecuteSelectTransferTroop
`public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop)`

**用途 / Purpose:** 执行 `select transfer troop` 操作或流程。

### ExecuteConfirmTransfer
`public void ExecuteConfirmTransfer()`

**用途 / Purpose:** 执行 `confirm transfer` 操作或流程。

### ExecuteCancelTransfer
`public void ExecuteCancelTransfer()`

**用途 / Purpose:** 执行 `cancel transfer` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### SetTroopActiveOrders
`public void SetTroopActiveOrders(OrderTroopItemVM item)`

**用途 / Purpose:** 设置 `troop active orders` 的值或状态。

### SelectAllFormations
`public virtual void SelectAllFormations(bool uiFeedback = true)`

**用途 / Purpose:** 处理 `select all formations` 相关逻辑。

### AddSelectedFormation
`public virtual void AddSelectedFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 向当前集合/状态中添加 `selected formation`。

### SetSelectedFormation
`public void SetSelectedFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 设置 `selected formation` 的值或状态。

### OnDeselectFormation
`public void OnDeselectFormation(int index)`

**用途 / Purpose:** 当 `deselect formation` 事件触发时调用此方法。

### OnDeselectFormation
`public void OnDeselectFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 当 `deselect formation` 事件触发时调用此方法。

### OnSelectFormation
`public void OnSelectFormation(OrderTroopItemVM item)`

**用途 / Purpose:** 当 `select formation` 事件触发时调用此方法。

### UpdateTroops
`public void UpdateTroops()`

**用途 / Purpose:** 更新 `troops` 的状态或数据。

### AddTroops
`public void AddTroops(Agent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `troops`。

### RemoveTroops
`public void RemoveTroops(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `troops`。

### OnTroopOrderIssued
`public void OnTroopOrderIssued(List<OrderTroopItemVM> selectedFormations, OrderItemVM orderItem)`

**用途 / Purpose:** 当 `troop order issued` 事件触发时调用此方法。

### IntervalUpdate
`public void IntervalUpdate()`

**用途 / Purpose:** 处理 `interval update` 相关逻辑。

### RefreshTroopFormationTargetVisuals
`public void RefreshTroopFormationTargetVisuals()`

**用途 / Purpose:** 刷新 `troop formation target visuals` 的显示或缓存。

### OnSelectFormationWithIndex
`public void OnSelectFormationWithIndex(int formationTroopIndex)`

**用途 / Purpose:** 当 `select formation with index` 事件触发时调用此方法。

### SetCurrentActiveOrders
`public void SetCurrentActiveOrders()`

**用途 / Purpose:** 设置 `current active orders` 的值或状态。

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**用途 / Purpose:** 当 `filters set` 事件触发时调用此方法。

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**用途 / Purpose:** 当 `after deployment finished` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

## 使用示例

```csharp
var value = new MissionOrderTroopControllerVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)