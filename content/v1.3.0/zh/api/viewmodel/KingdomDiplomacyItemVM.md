---
title: "KingdomDiplomacyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDiplomacyItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDiplomacyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDiplomacyItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs`

## 概述

`KingdomDiplomacyItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Faction1OwnedClans` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction1OwnedClans { get; set; }` |
| `Faction2OwnedClans` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction2OwnedClans { get; set; }` |
| `Faction2OtherWars` | `public MBBindingList<KingdomDiplomacyFactionItemVM> Faction2OtherWars { get; set; }` |
| `Stats` | `public MBBindingList<KingdomWarComparableStatVM> Stats { get; set; }` |
| `Faction1Visual` | `public BannerImageIdentifierVM Faction1Visual { get; set; }` |
| `Faction2Visual` | `public BannerImageIdentifierVM Faction2Visual { get; set; }` |
| `Faction1Name` | `public string Faction1Name { get; set; }` |
| `Faction2Name` | `public string Faction2Name { get; set; }` |
| `Faction1TributeText` | `public string Faction1TributeText { get; set; }` |
| `Faction2TributeText` | `public string Faction2TributeText { get; set; }` |
| `Faction1TributeHint` | `public HintViewModel Faction1TributeHint { get; set; }` |
| `Faction2TributeHint` | `public HintViewModel Faction2TributeHint { get; set; }` |
| `IsFaction2OtherWarsVisible` | `public bool IsFaction2OtherWarsVisible { get; set; }` |
| `Faction1Leader` | `public HeroVM Faction1Leader { get; set; }` |
| `Faction2Leader` | `public HeroVM Faction2Leader { get; set; }` |

## 使用示例

```csharp
var implementation = new CustomKingdomDiplomacyItemVM();
```

## 参见

- [完整类目录](../catalog)