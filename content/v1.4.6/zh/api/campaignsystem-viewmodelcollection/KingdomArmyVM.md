---
title: "KingdomArmyVM"
description: "KingdomArmyVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 KingdomCategoryVM；公开成员 30 个（方法 3、属性 26、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs。"
---
# KingdomArmyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomArmyVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs`

## 概述

KingdomArmyVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs。它是一个 public 类，实现/继承 KingdomCategoryVM，继承链为 KingdomArmyVM → KingdomCategoryVM → ViewModel。public/protected 成员共 30 个：3 方法、26 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomArmyVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies），继承链 KingdomArmyVM → KingdomCategoryVM → ViewModel。成员构成以属性为主（属性 26/30，方法 3/30），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomArmyVM` | `public KingdomArmyVM(Action onManageArmy, Action refreshDecision, Action<Army>showArmyOnMap)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshArmyList` | `public void RefreshArmyList()` | 方法 |
| `SelectArmy` | `public void SelectArmy(Army army)` | 方法 |
| `ArmySortController` | `public KingdomArmySortControllerVM ArmySortController` | 属性 |
| `CreateArmyText` | `public string CreateArmyText` | 属性 |
| `DisbandActionExplanationText` | `public string DisbandActionExplanationText` | 属性 |
| `ManageActionExplanationText` | `public string ManageActionExplanationText` | 属性 |
| `CurrentSelectedArmy` | `public KingdomArmyItemVM CurrentSelectedArmy` | 属性 |
| `CreateArmyHint` | `public HintViewModel CreateArmyHint` | 属性 |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint` | 属性 |
| `PlayerHasArmy` | `public bool PlayerHasArmy` | 属性 |
| `CanCreateArmy` | `public bool CanCreateArmy` | 属性 |
| `LeaderText` | `public string LeaderText` | 属性 |
| `ShowOnMapText` | `public string ShowOnMapText` | 属性 |
| `ArmyNameText` | `public string ArmyNameText` | 属性 |
| `StrengthText` | `public string StrengthText` | 属性 |
| `PartiesText` | `public string PartiesText` | 属性 |
| `LocationText` | `public string LocationText` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomArmyItemVM>Armies` | 属性 |
| `CanDisbandCurrentArmy` | `public bool CanDisbandCurrentArmy` | 属性 |
| `CanManageCurrentArmy` | `public bool CanManageCurrentArmy` | 属性 |
| `CanChangeLeaderOfCurrentArmy` | `public bool CanChangeLeaderOfCurrentArmy` | 属性 |
| `CanShowLocationOfCurrentArmy` | `public bool CanShowLocationOfCurrentArmy` | 属性 |
| `DisbandText` | `public string DisbandText` | 属性 |
| `ManageText` | `public string ManageText` | 属性 |
| `DisbandCost` | `public int DisbandCost` | 属性 |
| `ChangeLeaderText` | `public string ChangeLeaderText` | 属性 |
| `ChangeLeaderCost` | `public int ChangeLeaderCost` | 属性 |
| `DisbandHint` | `public HintViewModel DisbandHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KingdomCategoryVM](../KingdomCategoryVM)
- [同命名空间 KingdomArmyItemVM](../KingdomArmyItemVM)
- [同命名空间 KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM)
- [同命名空间 KingdomArmySortControllerVM](../KingdomArmySortControllerVM)
- [同命名空间 KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM)
