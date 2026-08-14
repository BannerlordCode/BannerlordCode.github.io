---
title: "KingSelectionDecisionItemVM"
description: "KingSelectionDecisionItemVM 的自动生成类参考。"
---
# KingSelectionDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingSelectionDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs`

## 概述

`KingSelectionDecisionItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetFaction` | `public IFaction TargetFaction { get; }` |
| `NameText` | `public string NameText { get; set; }` |
| `FactionName` | `public string FactionName { get; set; }` |
| `FactionBanner` | `public BannerImageIdentifierVM FactionBanner { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `SettlementsListText` | `public string SettlementsListText { get; set; }` |
| `CastlesText` | `public string CastlesText { get; set; }` |
| `CastlesListText` | `public string CastlesListText { get; set; }` |
| `TotalStrengthText` | `public string TotalStrengthText { get; set; }` |
| `TotalStrength` | `public int TotalStrength { get; set; }` |
| `ActivePoliciesText` | `public string ActivePoliciesText { get; set; }` |
| `ActivePoliciesListText` | `public string ActivePoliciesListText { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
KingSelectionDecisionItemVM instance = ...;
```

## 参见

- [本区域目录](../)