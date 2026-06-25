---
title: "KingdomSettlementVM"
description: "KingdomSettlementVM 的自动生成类参考。"
---
# KingdomSettlementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs`

## 概述

`KingdomSettlementVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSelectedSettlement` | `public KingdomSettlementItemVM CurrentSelectedSettlement { get; set; }` |
| `SettlementSortController` | `public KingdomSettlementSortControllerVM SettlementSortController { get; set; }` |
| `AnnexHint` | `public HintViewModel AnnexHint { get; set; }` |
| `ProposeText` | `public string ProposeText { get; set; }` |
| `AnnexActionExplanationText` | `public string AnnexActionExplanationText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `FoodText` | `public string FoodText { get; set; }` |
| `GarrisonText` | `public string GarrisonText { get; set; }` |
| `MilitiaText` | `public string MilitiaText { get; set; }` |
| `AnnexText` | `public string AnnexText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `AnnexCost` | `public int AnnexCost { get; set; }` |
| `DefendersText` | `public string DefendersText { get; set; }` |
| `Settlements` | `public MBBindingList<KingdomSettlementItemVM> Settlements { get; set; }` |
| `CanAnnexCurrentSettlement` | `public bool CanAnnexCurrentSettlement { get; set; }` |
| `HasCost` | `public bool HasCost { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomSettlementVM 实例
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.RefreshValues();
```

### RefreshSettlementList
`public void RefreshSettlementList()`

**用途 / Purpose:** 使 「settlement list」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomSettlementVM 实例
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.RefreshSettlementList();
```

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**用途 / Purpose:** 处理与 「select settlement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 KingdomSettlementVM 实例
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.SelectSettlement(settlement);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.RefreshValues();
```

## 参见

- [本区域目录](../)