---
title: "KingdomDiplomacyVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDiplomacyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDiplomacyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDiplomacyVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs`

## Overview

`KingdomDiplomacyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshDiplomacyList
`public void RefreshDiplomacyList()`

**Purpose:** Refreshes the display or cache of `diplomacy list`.

### SelectKingdom
`public void SelectKingdom(Kingdom kingdom)`

**Purpose:** Handles logic related to `select kingdom`.

## Usage Example

```csharp
var value = new KingdomDiplomacyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)