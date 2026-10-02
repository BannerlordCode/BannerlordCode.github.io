---
title: "SettlementDecisionItemVM"
description: "SettlementDecisionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes 的 public 类，继承 DecisionItemBaseVM；公开成员 34 个（方法 1、属性 32、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

SettlementDecisionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs。它是一个 public 类，实现/继承 DecisionItemBaseVM，继承链为 SettlementDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 34 个：1 方法、32 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementDecisionItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`，继承链 SettlementDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 32/34，方法 1/34），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Settlement` | `public Settlement Settlement` | 属性 |
| `SettlementDecisionItemVM` | `public SettlementDecisionItemVM(Settlement settlement, KingdomDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | 构造函数 |
| `InitValues` | `protected override void InitValues()` | 方法 |
| `HasBoundSettlement` | `public bool HasBoundSettlement` | 属性 |
| `SettlementCropPosition` | `public double SettlementCropPosition` | 属性 |
| `BoundSettlementText` | `public string BoundSettlementText` | 属性 |
| `DetailsText` | `public string DetailsText` | 属性 |
| `SettlementPath` | `public string SettlementPath` | 属性 |
| `SettlementName` | `public string SettlementName` | 属性 |
| `InformationText` | `public string InformationText` | 属性 |
| `Owner` | `public HeroVM Owner` | 属性 |
| `VillagesText` | `public string VillagesText` | 属性 |
| `SettlementImageID` | `public string SettlementImageID` | 属性 |
| `NotableCharactersText` | `public string NotableCharactersText` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>BoundVillages` | 属性 |
| `MBBindingList` | `public MBBindingList<HeroVM>NotableCharacters` | 属性 |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint` | 属性 |
| `FoodHint` | `public BasicTooltipViewModel FoodHint` | 属性 |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint` | 属性 |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint` | 属性 |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint` | 属性 |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint` | 属性 |
| `WallsHint` | `public BasicTooltipViewModel WallsHint` | 属性 |
| `MilitasText` | `public string MilitasText` | 属性 |
| `ProsperityText` | `public string ProsperityText` | 属性 |
| `LoyaltyText` | `public string LoyaltyText` | 属性 |
| `SecurityText` | `public string SecurityText` | 属性 |
| `WallsText` | `public string WallsText` | 属性 |
| `FoodText` | `public string FoodText` | 属性 |
| `GarrisonText` | `public string GarrisonText` | 属性 |
| `DescriptorText` | `public string DescriptorText` | 属性 |
| `OwnerText` | `public string OwnerText` | 属性 |
| `Governor` | `public HeroVM Governor` | 属性 |
| `HasNotables` | `public bool HasNotables` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 DecisionItemBaseVM](../DecisionItemBaseVM/)
- [同命名空间 AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM/)
- [同命名空间 DecisionItemBaseVM](../DecisionItemBaseVM/)
- [同命名空间 DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM/)
- [同命名空间 ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM/)
