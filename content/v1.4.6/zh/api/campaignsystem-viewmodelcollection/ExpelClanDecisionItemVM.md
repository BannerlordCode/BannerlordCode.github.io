---
title: "ExpelClanDecisionItemVM"
description: "ExpelClanDecisionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 DecisionItemBaseVM；公开成员 16 个（方法 1、属性 14、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs。"
---
# ExpelClanDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ExpelClanDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs`

## 概述

ExpelClanDecisionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs。它是一个 public 类，实现/继承 DecisionItemBaseVM，继承链为 ExpelClanDecisionItemVM → DecisionItemBaseVM → ViewModel。public/protected 成员共 16 个：1 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ExpelClanDecisionItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes），继承链 ExpelClanDecisionItemVM → DecisionItemBaseVM → ViewModel。成员构成以属性为主（属性 14/16，方法 1/16），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ExpelDecision` | `public ExpelClanFromKingdomDecision ExpelDecision` | 属性 |
| `Clan` | `public Clan Clan` | 属性 |
| `ExpelClanDecisionItemVM` | `public ExpelClanDecisionItemVM(ExpelClanFromKingdomDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | 构造函数 |
| `InitValues` | `protected override void InitValues()` | 方法 |
| `MBBindingList` | `public MBBindingList<HeroVM>Members` | 属性 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Fiefs` | 属性 |
| `Leader` | `public HeroVM Leader` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `MembersText` | `public string MembersText` | 属性 |
| `SettlementsText` | `public string SettlementsText` | 属性 |
| `InformationText` | `public string InformationText` | 属性 |
| `LeaderText` | `public string LeaderText` | 属性 |
| `ProsperityText` | `public string ProsperityText` | 属性 |
| `StrengthText` | `public string StrengthText` | 属性 |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint` | 属性 |
| `StrengthHint` | `public BasicTooltipViewModel StrengthHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 DecisionItemBaseVM](../DecisionItemBaseVM)
- [同命名空间 AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- [同命名空间 DecisionItemBaseVM](../DecisionItemBaseVM)
- [同命名空间 DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM)
- [同命名空间 KingdomPolicyDecisionItemVM](../KingdomPolicyDecisionItemVM)
