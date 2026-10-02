---
title: "KingdomSettlementVM"
description: "KingdomSettlementVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements 的 public 类，继承 KingdomCategoryVM；公开成员 25 个（方法 4、属性 20、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomSettlementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomSettlementVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs。它是一个 public 类，实现/继承 KingdomCategoryVM，继承链为 KingdomSettlementVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 25 个：4 方法、20 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomSettlementVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`，继承链 KingdomSettlementVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 20/25，方法 4/25），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomSettlementVM` | `public KingdomSettlementVM(Action<KingdomDecision>forceDecision, Action<Settlement>onGrantFief)` | 构造函数 |
| `CreateSettlementItemVM` | `protected virtual KingdomSettlementItemVM CreateSettlementItemVM(Settlement settlement, Action<KingdomSettlementItemVM>onSelect)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshSettlementList` | `public void RefreshSettlementList()` | 方法 |
| `SelectSettlement` | `public void SelectSettlement(Settlement settlement)` | 方法 |
| `CurrentSelectedSettlement` | `public KingdomSettlementItemVM CurrentSelectedSettlement` | 属性 |
| `SettlementSortController` | `public KingdomSettlementSortControllerVM SettlementSortController` | 属性 |
| `AnnexHint` | `public HintViewModel AnnexHint` | 属性 |
| `ProposeText` | `public string ProposeText` | 属性 |
| `AnnexActionExplanationText` | `public string AnnexActionExplanationText` | 属性 |
| `ProsperityText` | `public string ProsperityText` | 属性 |
| `VillagesText` | `public string VillagesText` | 属性 |
| `OwnerText` | `public string OwnerText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `ClanText` | `public string ClanText` | 属性 |
| `FoodText` | `public string FoodText` | 属性 |
| `GarrisonText` | `public string GarrisonText` | 属性 |
| `MilitiaText` | `public string MilitiaText` | 属性 |
| `AnnexText` | `public string AnnexText` | 属性 |
| `TypeText` | `public string TypeText` | 属性 |
| `AnnexCost` | `public int AnnexCost` | 属性 |
| `DefendersText` | `public string DefendersText` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomSettlementItemVM>Settlements` | 属性 |
| `CanAnnexCurrentSettlement` | `public bool CanAnnexCurrentSettlement` | 属性 |
| `HasCost` | `public bool HasCost` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 KingdomCategoryVM](../KingdomCategoryVM/)
- [同命名空间 KingdomSettlementItemVM](../KingdomSettlementItemVM/)
- [同命名空间 KingdomSettlementSortControllerVM](../KingdomSettlementSortControllerVM/)
