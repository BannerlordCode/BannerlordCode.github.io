<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDiplomacyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDiplomacyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomDiplomacyVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)