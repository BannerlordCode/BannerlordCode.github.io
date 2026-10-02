---
title: "KingdomDiplomacyItemVM"
description: "KingdomDiplomacyItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy 的 public 类，继承 KingdomItemVM；公开成员 21 个（方法 1、属性 19、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomDiplomacyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class KingdomDiplomacyItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomDiplomacyItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs。它是一个 public 类（abstract），实现/继承 KingdomItemVM，继承链为 KingdomDiplomacyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 21 个：1 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomDiplomacyItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，继承链 KingdomDiplomacyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 19/21，方法 1/21），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomDiplomacyItemVM` | `protected KingdomDiplomacyItemVM(IFaction faction1, IFaction faction2)` | 构造函数 |
| `UpdateDiplomacyProperties` | `protected virtual void UpdateDiplomacyProperties()` | 方法 |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction1OwnedClans` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OwnedClans` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OtherWars` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OtherTradeAgreements` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OtherAlliances` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomWarComparableStatVM>Stats` | 属性 |
| `Faction1Visual` | `public BannerImageIdentifierVM Faction1Visual` | 属性 |
| `Faction2Visual` | `public BannerImageIdentifierVM Faction2Visual` | 属性 |
| `Faction1Name` | `public string Faction1Name` | 属性 |
| `Faction2Name` | `public string Faction2Name` | 属性 |
| `Faction1TributeText` | `public string Faction1TributeText` | 属性 |
| `Faction2TributeText` | `public string Faction2TributeText` | 属性 |
| `Faction1TributeHint` | `public HintViewModel Faction1TributeHint` | 属性 |
| `Faction2TributeHint` | `public HintViewModel Faction2TributeHint` | 属性 |
| `IsFaction2OtherWarsVisible` | `public bool IsFaction2OtherWarsVisible` | 属性 |
| `IsFaction2OtherTradeAgreementsVisible` | `public bool IsFaction2OtherTradeAgreementsVisible` | 属性 |
| `IsFaction2OtherAlliancesVisible` | `public bool IsFaction2OtherAlliancesVisible` | 属性 |
| `Faction1Leader` | `public HeroVM Faction1Leader` | 属性 |
| `Faction2Leader` | `public HeroVM Faction2Leader` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 KingdomItemVM](../KingdomItemVM/)
- [同命名空间 KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/)
- [同命名空间 KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM/)
- [同命名空间 KingdomDiplomacyVM](../KingdomDiplomacyVM/)
- [同命名空间 KingdomTruceItemVM](../KingdomTruceItemVM/)
