---
title: "OrderTroopItemVM"
description: "OrderTroopItemVM 的自动生成类参考。"
---
# OrderTroopItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemVM : OrderSubjectVM`
**Base:** `OrderSubjectVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderTroopItemVM.cs`

## 概述

`OrderTroopItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ContainsDeadTroop` | `public bool ContainsDeadTroop { get; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `FormationIndex` | `public int FormationIndex { get; set; }` |
| `CurrentMemberCount` | `public int CurrentMemberCount { get; set; }` |
| `Morale` | `public int Morale { get; set; }` |
| `AmmoPercentage` | `public float AmmoPercentage { get; set; }` |
| `IsAmmoAvailable` | `public bool IsAmmoAvailable { get; set; }` |
| `HaveTroops` | `public bool HaveTroops { get; set; }` |
| `HasTarget` | `public bool HasTarget { get; set; }` |
| `IsTargetRelevant` | `public bool IsTargetRelevant { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `CurrentOrderIconId` | `public string CurrentOrderIconId { get; set; }` |
| `CurrentTargetFormationType` | `public string CurrentTargetFormationType { get; set; }` |
| `FormationName` | `public string FormationName { get; set; }` |
| `CaptainImageIdentifier` | `public CharacterImageIdentifierVM CaptainImageIdentifier { get; set; }` |
| `ActiveFormationClasses` | `public MBBindingList<OrderTroopItemFormationClassVM> ActiveFormationClasses { get; set; }` |
| `ActiveFilters` | `public MBBindingList<OrderTroopItemFilterVM> ActiveFilters { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.OnFinalize();
```

### OnFormationAgentRemoved
`public void OnFormationAgentRemoved(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 formation agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.OnFormationAgentRemoved(agent);
```

### UpdateVisuals
`public virtual void UpdateVisuals()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 visuals 的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.UpdateVisuals();
```

### Update
`public virtual void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.Update();
```

### UpdateSelectionKeyInfo
`public void UpdateSelectionKeyInfo()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 selection key info 的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.UpdateSelectionKeyInfo();
```

### SetFormationClassFromFormation
`public bool SetFormationClassFromFormation(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 为 formation class from formation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
var result = orderTroopItemVM.SetFormationClassFromFormation(formation);
```

### UpdateFilterData
`public void UpdateFilterData(List<FormationFilterType> usedFilters)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 filter data 的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.UpdateFilterData(usedFilters);
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.ExecuteAction();
```

### RefreshTargetedOrderVisual
`public virtual void RefreshTargetedOrderVisual()`

**用途 / Purpose:** **用途 / Purpose:** 使 targeted order visual 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.RefreshTargetedOrderVisual();
```

### GetVisibleNameOfFormationForMessage
`public virtual TextObject GetVisibleNameOfFormationForMessage()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visible name of formation for message 的结果。

```csharp
// 先通过子系统 API 拿到 OrderTroopItemVM 实例
OrderTroopItemVM orderTroopItemVM = ...;
var result = orderTroopItemVM.GetVisibleNameOfFormationForMessage();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderTroopItemVM orderTroopItemVM = ...;
orderTroopItemVM.OnFinalize();
```

## 参见

- [本区域目录](../)