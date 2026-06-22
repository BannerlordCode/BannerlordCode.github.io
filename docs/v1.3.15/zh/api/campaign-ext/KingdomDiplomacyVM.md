<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDiplomacyVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDiplomacyVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomDiplomacyVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RefreshValues()
```

### RefreshDiplomacyList

```csharp
public void RefreshDiplomacyList()
```

### SelectKingdom

```csharp
public void SelectKingdom(Kingdom kingdom)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)