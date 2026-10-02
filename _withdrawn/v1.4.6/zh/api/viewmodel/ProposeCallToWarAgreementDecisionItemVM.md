---
title: "ProposeCallToWarAgreementDecisionItemVM"
description: "ProposeCallToWarAgreementDecisionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes 的 public 类，继承 DecisionItemBaseVM；公开成员 13 个（方法 1、属性 11、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ProposeCallToWarAgreementDecisionItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ProposeCallToWarAgreementDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ProposeCallToWarAgreementDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ProposeCallToWarAgreementDecisionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ProposeCallToWarAgreementDecisionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ProposeCallToWarAgreementDecisionItemVM.cs。它是一个 public 类，实现/继承 DecisionItemBaseVM，继承链为 ProposeCallToWarAgreementDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：1 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ProposeCallToWarAgreementDecisionItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`，继承链 ProposeCallToWarAgreementDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/13，方法 1/13），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ProposeCallToWarAgreementDecisionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetFaction` | `public IFaction TargetFaction` | 属性 |
| `ProposeCallToWarAgreementDecisionItemVM` | `public ProposeCallToWarAgreementDecisionItemVM(ProposeCallToWarAgreementDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | 构造函数 |
| `InitValues` | `protected override void InitValues()` | 方法 |
| `NameText` | `public string NameText` | 属性 |
| `ProposeCallToWarAgreementDescriptionText` | `public string ProposeCallToWarAgreementDescriptionText` | 属性 |
| `SourceFactionBanner` | `public BannerImageIdentifierVM SourceFactionBanner` | 属性 |
| `TargetFactionBanner` | `public BannerImageIdentifierVM TargetFactionBanner` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomWarComparableStatVM>ComparedStats` | 属性 |
| `LeaderText` | `public string LeaderText` | 属性 |
| `SourceFactionLeader` | `public HeroVM SourceFactionLeader` | 属性 |
| `TargetFactionLeader` | `public HeroVM TargetFactionLeader` | 属性 |
| `IsTargetFactionOtherWarsVisible` | `public bool IsTargetFactionOtherWarsVisible` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>TargetFactionOtherWars` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 DecisionItemBaseVM](../DecisionItemBaseVM/)
- [同命名空间 AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM/)
- [同命名空间 DecisionItemBaseVM](../DecisionItemBaseVM/)
- [同命名空间 DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM/)
- [同命名空间 ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM/)
