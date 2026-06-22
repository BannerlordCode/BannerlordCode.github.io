<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomArmyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomArmyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomArmyVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshArmyList

```csharp
public void RefreshArmyList()
```

### SelectArmy

```csharp
public void SelectArmy(Army army)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)