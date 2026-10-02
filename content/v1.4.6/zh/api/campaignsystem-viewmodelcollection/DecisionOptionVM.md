---
title: "DecisionOptionVM"
description: "DecisionOptionVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 29 个（方法 2、属性 26、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs。"
---
# DecisionOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class DecisionOptionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs`

## 概述

DecisionOptionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 DecisionOptionVM → ViewModel。public/protected 成员共 29 个：2 方法、26 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DecisionOptionVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions），继承链 DecisionOptionVM → ViewModel。成员构成以属性为主（属性 26/29，方法 2/29），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Option` | `public DecisionOutcome Option` | 属性 |
| `Decision` | `public KingdomDecision Decision` | 属性 |
| `DecisionOptionVM` | `public DecisionOptionVM(DecisionOutcome option, KingdomDecision decision, KingdomElection kingdomDecisionMaker, Action<DecisionOptionVM>onSelect, Action<DecisionOptionVM>onSupportStrengthChange)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `AfterKingChooseOutcome` | `public void AfterKingChooseOutcome()` | 方法 |
| `OptionHint` | `public HintViewModel OptionHint` | 属性 |
| `MBBindingList` | `public MBBindingList<DecisionSupporterVM>SupportersOfThisOption` | 属性 |
| `Sponsor` | `public HeroVM Sponsor` | 属性 |
| `Name` | `public string Name` | 属性 |
| `SponsorWeightImagePath` | `public string SponsorWeightImagePath` | 属性 |
| `CanBeChosen` | `public bool CanBeChosen` | 属性 |
| `IsKingsOutcome` | `public bool IsKingsOutcome` | 属性 |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | 属性 |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | 属性 |
| `WinPercentage` | `public int WinPercentage` | 属性 |
| `WinPercentageStr` | `public string WinPercentageStr` | 属性 |
| `Description` | `public string Description` | 属性 |
| `InitialPercentage` | `public int InitialPercentage` | 属性 |
| `InfluenceCost` | `public int InfluenceCost` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsOptionForAbstain` | `public bool IsOptionForAbstain` | 属性 |
| `CurrentSupportWeight` | `public Supporter.SupportWeights CurrentSupportWeight` | 属性 |
| `CurrentSupportWeightIndex` | `public int CurrentSupportWeightIndex` | 属性 |
| `SupportOption1Text` | `public string SupportOption1Text` | 属性 |
| `SupportOption2Text` | `public string SupportOption2Text` | 属性 |
| `SupportOption3Text` | `public string SupportOption3Text` | 属性 |
| `IsSupportOption1Enabled` | `public bool IsSupportOption1Enabled` | 属性 |
| `IsSupportOption2Enabled` | `public bool IsSupportOption2Enabled` | 属性 |
| `IsSupportOption3Enabled` | `public bool IsSupportOption3Enabled` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DecisionSupporterVM](../DecisionSupporterVM)
- [同命名空间 KingdomDecisionsVM](../KingdomDecisionsVM)
- [同命名空间 PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent)
