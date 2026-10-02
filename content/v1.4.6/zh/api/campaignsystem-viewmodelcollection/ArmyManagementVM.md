---
title: "ArmyManagementVM"
description: "ArmyManagementVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 62 个（方法 11、属性 49、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs。"
---
# ArmyManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs`

## 概述

ArmyManagementVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ArmyManagementVM → ViewModel。public/protected 成员共 62 个：11 方法、49 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyManagementVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement），继承链 ArmyManagementVM → ViewModel。成员构成以属性为主（属性 49/62，方法 11/62），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyManagementVM` | `public ArmyManagementVM(Action onClose)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `ExecuteDisbandArmy` | `public void ExecuteDisbandArmy()` | 方法 |
| `ExecuteBoostCohesionManual` | `public void ExecuteBoostCohesionManual()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | 属性 |
| `SortControllerVM` | `public ArmyManagementSortControllerVM SortControllerVM` | 属性 |
| `BoostTitleText` | `public string BoostTitleText` | 属性 |
| `DisbandArmyText` | `public string DisbandArmyText` | 属性 |
| `CohesionBoostAmountText` | `public string CohesionBoostAmountText` | 属性 |
| `DistanceText` | `public string DistanceText` | 属性 |
| `CostText` | `public string CostText` | 属性 |
| `OwnerText` | `public string OwnerText` | 属性 |
| `StrengthText` | `public string StrengthText` | 属性 |
| `ShipCountText` | `public string ShipCountText` | 属性 |
| `LordsText` | `public string LordsText` | 属性 |
| `TotalInfluence` | `public string TotalInfluence` | 属性 |
| `TotalStrength` | `public int TotalStrength` | 属性 |
| `TotalCost` | `public int TotalCost` | 属性 |
| `TotalLords` | `public string TotalLords` | 属性 |
| `CanCreateArmy` | `public bool CanCreateArmy` | 属性 |
| `CanBoostCohesion` | `public bool CanBoostCohesion` | 属性 |
| `CanDisbandArmy` | `public bool CanDisbandArmy` | 属性 |
| `CanConfirm` | `public bool CanConfirm` | 属性 |
| `CanAffordInfluenceCost` | `public bool CanAffordInfluenceCost` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `ClanText` | `public string ClanText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `FocusedItem` | `public ArmyManagementItemVM FocusedItem` | 属性 |
| `MBBindingList` | `public MBBindingList<ArmyManagementItemVM>PartyList` | 属性 |
| `MBBindingList` | `public MBBindingList<ArmyManagementItemVM>PartiesInCart` | 属性 |
| `TotalStrengthText` | `public string TotalStrengthText` | 属性 |
| `TotalCostText` | `public string TotalCostText` | 属性 |
| `TotalCostNumbersText` | `public string TotalCostNumbersText` | 属性 |
| `CohesionText` | `public string CohesionText` | 属性 |
| `Cohesion` | `public int Cohesion` | 属性 |
| `CohesionBoostCost` | `public int CohesionBoostCost` | 属性 |
| `PlayerHasArmy` | `public bool PlayerHasArmy` | 属性 |
| `MoraleText` | `public string MoraleText` | 属性 |
| `FoodText` | `public string FoodText` | 属性 |
| `NewCohesion` | `public int NewCohesion` | 属性 |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint` | 属性 |
| `MoraleHint` | `public HintViewModel MoraleHint` | 属性 |
| `BoostCohesionHint` | `public HintViewModel BoostCohesionHint` | 属性 |
| `DisbandArmyHint` | `public HintViewModel DisbandArmyHint` | 属性 |
| `DoneHint` | `public HintViewModel DoneHint` | 属性 |
| `FoodHint` | `public HintViewModel FoodHint` | 属性 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetRemoveInputKey` | `public void SetRemoveInputKey(HotKey hotKey)` | 方法 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | 属性 |
| `IComparer` | `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>` | 属性 |
| `IComparer` | `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- [同命名空间 ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)
- [同命名空间 ArmyManagementItemVM](../ArmyManagementItemVM)
- [同命名空间 ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)
