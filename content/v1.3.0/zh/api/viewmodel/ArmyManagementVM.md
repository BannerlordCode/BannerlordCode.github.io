---
title: "ArmyManagementVM"
description: "ArmyManagementVM 的自动生成类参考。"
---
# ArmyManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs`

## 概述

`ArmyManagementVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `SortControllerVM` | `public ArmyManagementSortControllerVM SortControllerVM { get; set; }` |
| `BoostTitleText` | `public string BoostTitleText { get; set; }` |
| `DisbandArmyText` | `public string DisbandArmyText { get; set; }` |
| `CohesionBoostAmountText` | `public string CohesionBoostAmountText { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `CostText` | `public string CostText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |
| `LordsText` | `public string LordsText { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `TotalStrength` | `public int TotalStrength { get; set; }` |
| `TotalCost` | `public int TotalCost { get; set; }` |
| `TotalLords` | `public string TotalLords { get; set; }` |
| `CanCreateArmy` | `public bool CanCreateArmy { get; set; }` |
| `CanBoostCohesion` | `public bool CanBoostCohesion { get; set; }` |
| `CanDisbandArmy` | `public bool CanDisbandArmy { get; set; }` |
| `CanAffordInfluenceCost` | `public bool CanAffordInfluenceCost { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `FocusedItem` | `public ArmyManagementItemVM FocusedItem { get; set; }` |
| `PartyList` | `public MBBindingList<ArmyManagementItemVM> PartyList { get; set; }` |
| `PartiesInCart` | `public MBBindingList<ArmyManagementItemVM> PartiesInCart { get; set; }` |
| `TotalStrengthText` | `public string TotalStrengthText { get; set; }` |
| `TotalCostText` | `public string TotalCostText { get; set; }` |
| `TotalCostNumbersText` | `public string TotalCostNumbersText { get; set; }` |
| `CohesionText` | `public string CohesionText { get; set; }` |
| `Cohesion` | `public int Cohesion { get; set; }` |
| `CohesionBoostCost` | `public int CohesionBoostCost { get; set; }` |
| `PlayerHasArmy` | `public bool PlayerHasArmy { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `FoodText` | `public string FoodText { get; set; }` |
| `NewCohesion` | `public int NewCohesion { get; set; }` |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint { get; set; }` |
| `MoraleHint` | `public HintViewModel MoraleHint { get; set; }` |
| `BoostCohesionHint` | `public HintViewModel BoostCohesionHint { get; set; }` |
| `DisbandArmyHint` | `public HintViewModel DisbandArmyHint { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `FoodHint` | `public HintViewModel FoodHint { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.RefreshValues();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** **用途 / Purpose:** 执行 done 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteCancel();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteReset();
```

### ExecuteDisbandArmy
`public void ExecuteDisbandArmy()`

**用途 / Purpose:** **用途 / Purpose:** 执行 disband army 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteDisbandArmy();
```

### ExecuteBoostCohesionManual
`public void ExecuteBoostCohesionManual()`

**用途 / Purpose:** **用途 / Purpose:** 执行 boost cohesion manual 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.ExecuteBoostCohesionManual();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.OnFinalize();
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 reset input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetResetInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetDoneInputKey(hotKey);
```

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 remove input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.SetRemoveInputKey(hotKey);
```

### Compare
`public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ArmyManagementVM 实例
ArmyManagementVM armyManagementVM = ...;
var result = armyManagementVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyManagementVM armyManagementVM = ...;
armyManagementVM.RefreshValues();
```

## 参见

- [本区域目录](../)