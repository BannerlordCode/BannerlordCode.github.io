<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomArmyVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomArmyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmyVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs`

## Overview

`KingdomArmyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArmySortController` | `public KingdomArmySortControllerVM ArmySortController { get; set; }` |
| `CreateArmyText` | `public string CreateArmyText { get; set; }` |
| `DisbandActionExplanationText` | `public string DisbandActionExplanationText { get; set; }` |
| `ManageActionExplanationText` | `public string ManageActionExplanationText { get; set; }` |
| `CurrentSelectedArmy` | `public KingdomArmyItemVM CurrentSelectedArmy { get; set; }` |
| `CreateArmyHint` | `public HintViewModel CreateArmyHint { get; set; }` |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` |
| `PlayerHasArmy` | `public bool PlayerHasArmy { get; set; }` |
| `CanCreateArmy` | `public bool CanCreateArmy { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ShowOnMapText` | `public string ShowOnMapText { get; set; }` |
| `ArmyNameText` | `public string ArmyNameText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `Armies` | `public MBBindingList<KingdomArmyItemVM> Armies { get; set; }` |
| `CanDisbandCurrentArmy` | `public bool CanDisbandCurrentArmy { get; set; }` |
| `CanManageCurrentArmy` | `public bool CanManageCurrentArmy { get; set; }` |
| `CanChangeLeaderOfCurrentArmy` | `public bool CanChangeLeaderOfCurrentArmy { get; set; }` |
| `CanShowLocationOfCurrentArmy` | `public bool CanShowLocationOfCurrentArmy { get; set; }` |
| `DisbandText` | `public string DisbandText { get; set; }` |
| `ManageText` | `public string ManageText { get; set; }` |
| `DisbandCost` | `public int DisbandCost { get; set; }` |
| `ChangeLeaderText` | `public string ChangeLeaderText { get; set; }` |
| `ChangeLeaderCost` | `public int ChangeLeaderCost { get; set; }` |
| `DisbandHint` | `public HintViewModel DisbandHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshArmyList
`public void RefreshArmyList()`

**Purpose:** Refreshes the display or cache of `army list`.

### SelectArmy
`public void SelectArmy(Army army)`

**Purpose:** Handles logic related to `select army`.

## Usage Example

```csharp
var value = new KingdomArmyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)