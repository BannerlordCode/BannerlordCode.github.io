<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomSettlementVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomSettlementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs`

## Overview

`KingdomSettlementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshSettlementList
`public void RefreshSettlementList()`

**Purpose:** Refreshes the display or cache of `settlement list`.

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `select settlement`.

## Usage Example

```csharp
var value = new KingdomSettlementVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)