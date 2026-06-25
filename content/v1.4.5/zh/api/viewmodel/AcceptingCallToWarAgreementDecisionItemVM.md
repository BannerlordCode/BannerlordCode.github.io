---
title: "AcceptingCallToWarAgreementDecisionItemVM"
description: "AcceptingCallToWarAgreementDecisionItemVM 的自动生成类参考。"
---
# AcceptingCallToWarAgreementDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AcceptingCallToWarAgreementDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/AcceptingCallToWarAgreementDecisionItemVM.cs`

## 概述

`AcceptingCallToWarAgreementDecisionItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `AcceptCallToWarAgreementDescriptionText` | `public string AcceptCallToWarAgreementDescriptionText { get; set; }` |
| `SourceFactionBanner` | `public BannerImageIdentifierVM SourceFactionBanner { get; set; }` |
| `TargetFactionBanner` | `public BannerImageIdentifierVM TargetFactionBanner { get; set; }` |
| `ComparedStats` | `public MBBindingList<KingdomWarComparableStatVM> ComparedStats { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `SourceFactionLeader` | `public HeroVM SourceFactionLeader { get; set; }` |
| `TargetFactionLeader` | `public HeroVM TargetFactionLeader { get; set; }` |
| `IsTargetFactionOtherWarsVisible` | `public bool IsTargetFactionOtherWarsVisible { get; set; }` |
| `TargetFactionOtherWars` | `public MBBindingList<KingdomDiplomacyFactionItemVM> TargetFactionOtherWars { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
AcceptingCallToWarAgreementDecisionItemVM instance = ...;
```

## 参见

- [本区域目录](../)