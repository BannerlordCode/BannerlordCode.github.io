---
title: "PolicyDecisionItemVM"
description: "PolicyDecisionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 DecisionItemBaseVM；公开成员 7 个（方法 1、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs。"
---
# PolicyDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PolicyDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs`

## 概述

PolicyDecisionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs。它是一个 public 类，实现/继承 DecisionItemBaseVM，继承链为 PolicyDecisionItemVM → DecisionItemBaseVM → ViewModel。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PolicyDecisionItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes），继承链 PolicyDecisionItemVM → DecisionItemBaseVM → ViewModel。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PolicyDecision` | `public KingdomPolicyDecision PolicyDecision` | 属性 |
| `Policy` | `public PolicyObject Policy` | 属性 |
| `PolicyDecisionItemVM` | `public PolicyDecisionItemVM(KingdomPolicyDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | 构造函数 |
| `InitValues` | `protected override void InitValues()` | 方法 |
| `NameText` | `public string NameText` | 属性 |
| `PolicyDescriptionText` | `public string PolicyDescriptionText` | 属性 |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>PolicyEffectList` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 DecisionItemBaseVM](../DecisionItemBaseVM)
- [同命名空间 AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- [同命名空间 DecisionItemBaseVM](../DecisionItemBaseVM)
- [同命名空间 DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM)
- [同命名空间 ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM)
