<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyManagementVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementVM.cs`

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
| `CanConfirm` | `public bool CanConfirm { get; set; }` |
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

### Compare
`public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteDisbandArmy
`public void ExecuteDisbandArmy()`

**用途 / Purpose:** 执行 `disband army` 操作或流程。

### ExecuteBoostCohesionManual
`public void ExecuteBoostCohesionManual()`

**用途 / Purpose:** 执行 `boost cohesion manual` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `remove input key` 的值或状态。

## 使用示例

```csharp
var value = new ArmyManagementVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)