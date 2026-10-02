---
title: "DecisionItemBaseVM"
description: "DecisionItemBaseVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 28 个（方法 9、属性 17、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs。"
---
# DecisionItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class DecisionItemBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs`

## 概述

DecisionItemBaseVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 DecisionItemBaseVM → ViewModel。public/protected 成员共 28 个：9 方法、17 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DecisionItemBaseVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes），继承链 DecisionItemBaseVM → ViewModel。成员构成以属性为主（属性 17/28，方法 9/28），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomDecisionMaker` | `public KingdomElection KingdomDecisionMaker` | 属性 |
| `DecisionItemBaseVM` | `public DecisionItemBaseVM(KingdomDecision decision, Action onDecisionOver)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `InitValues` | `protected virtual void InitValues()` | 方法 |
| `ExecuteLink` | `protected void ExecuteLink(string link)` | 方法 |
| `ExecuteShowStageTooltip` | `protected void ExecuteShowStageTooltip()` | 方法 |
| `ExecuteHideStageTooltip` | `protected void ExecuteHideStageTooltip()` | 方法 |
| `ExecuteFinalSelection` | `public void ExecuteFinalSelection()` | 方法 |
| `ExecuteDone` | `protected void ExecuteDone()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(InputKeyItemVM inputKeyItemVM)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `EndDecisionHint` | `public HintViewModel EndDecisionHint` | 属性 |
| `DecisionType` | `public int DecisionType` | 属性 |
| `TotalInfluenceText` | `public string TotalInfluenceText` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `CurrentStageIndex` | `public int CurrentStageIndex` | 属性 |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | 属性 |
| `CanEndDecision` | `public bool CanEndDecision` | 属性 |
| `IsKingsDecisionOver` | `public bool IsKingsDecisionOver` | 属性 |
| `RelationChangeText` | `public string RelationChangeText` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `InfluenceCostText` | `public string InfluenceCostText` | 属性 |
| `MBBindingList` | `public MBBindingList<DecisionOptionVM>DecisionOptionsList` | 属性 |
| `DecisionTypes` | `protected enum DecisionTypes` | 属性 |
| `DecisionTypes` | `protected enum DecisionTypes` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- [同命名空间 DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM)
- [同命名空间 ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM)
- [同命名空间 KingdomPolicyDecisionItemVM](../KingdomPolicyDecisionItemVM)
