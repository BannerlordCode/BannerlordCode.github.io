---
title: "KingdomDiplomacyVM"
description: "KingdomDiplomacyVM 的自动生成类参考。"
---
# KingdomDiplomacyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDiplomacyVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomDiplomacyVM.cs`

## 概述

`KingdomDiplomacyVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerWars` | `public MBBindingList<KingdomWarItemVM> PlayerWars { get; set; }` |
| `IsDisplayingWarLogs` | `public bool IsDisplayingWarLogs { get; set; }` |
| `IsDisplayingStatComparisons` | `public bool IsDisplayingStatComparisons { get; set; }` |
| `IsWar` | `public bool IsWar { get; set; }` |
| `BehaviorSelectionTitle` | `public string BehaviorSelectionTitle { get; set; }` |
| `PlayerTruces` | `public MBBindingList<KingdomTruceItemVM> PlayerTruces { get; set; }` |
| `CurrentSelectedDiplomacyItem` | `public KingdomDiplomacyItemVM CurrentSelectedDiplomacyItem { get; set; }` |
| `WarsSortController` | `public KingdomWarSortControllerVM WarsSortController { get; set; }` |
| `PlayerWarsText` | `public string PlayerWarsText { get; set; }` |
| `WarsText` | `public string WarsText { get; set; }` |
| `NumOfPlayerWarsText` | `public string NumOfPlayerWarsText { get; set; }` |
| `PlayerTrucesText` | `public string PlayerTrucesText { get; set; }` |
| `NumOfPlayerTrucesText` | `public string NumOfPlayerTrucesText { get; set; }` |
| `BehaviorSelection` | `public SelectorVM<SelectorItemVM> BehaviorSelection { get; set; }` |
| `ShowStatBarsHint` | `public HintViewModel ShowStatBarsHint { get; set; }` |
| `ShowWarLogsHint` | `public HintViewModel ShowWarLogsHint { get; set; }` |
| `Actions` | `public MBBindingList<KingdomDiplomacyProposalActionItemVM> Actions { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomDiplomacyVM 实例
KingdomDiplomacyVM kingdomDiplomacyVM = ...;
kingdomDiplomacyVM.RefreshValues();
```

### RefreshDiplomacyList
`public void RefreshDiplomacyList()`

**用途 / Purpose:** 使 「diplomacy list」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomDiplomacyVM 实例
KingdomDiplomacyVM kingdomDiplomacyVM = ...;
kingdomDiplomacyVM.RefreshDiplomacyList();
```

### SelectKingdom
`public void SelectKingdom(Kingdom kingdom)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 KingdomDiplomacyVM 实例
KingdomDiplomacyVM kingdomDiplomacyVM = ...;
kingdomDiplomacyVM.SelectKingdom(kingdom);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomDiplomacyVM kingdomDiplomacyVM = ...;
kingdomDiplomacyVM.RefreshValues();
```

## 参见

- [本区域目录](../)