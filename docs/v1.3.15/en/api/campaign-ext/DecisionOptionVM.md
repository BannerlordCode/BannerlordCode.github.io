<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DecisionOptionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `DecisionOptionVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Option` | `public DecisionOutcome Option { get; }` |
| `Decision` | `public KingdomDecision Decision { get; }` |
| `OptionHint` | `public HintViewModel OptionHint { get; set; }` |
| `SupportersOfThisOption` | `public MBBindingList<DecisionSupporterVM> SupportersOfThisOption { get; set; }` |
| `Sponsor` | `public HeroVM Sponsor { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `SponsorWeightImagePath` | `public string SponsorWeightImagePath { get; set; }` |
| `CanBeChosen` | `public bool CanBeChosen { get; set; }` |
| `IsKingsOutcome` | `public bool IsKingsOutcome { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `WinPercentage` | `public int WinPercentage { get; set; }` |
| `WinPercentageStr` | `public string WinPercentageStr { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `InitialPercentage` | `public int InitialPercentage { get; set; }` |
| `InfluenceCost` | `public int InfluenceCost { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsOptionForAbstain` | `public bool IsOptionForAbstain { get; set; }` |
| `CurrentSupportWeight` | `public Supporter.SupportWeights CurrentSupportWeight { get; set; }` |
| `CurrentSupportWeightIndex` | `public int CurrentSupportWeightIndex { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### AfterKingChooseOutcome

```csharp
public void AfterKingChooseOutcome()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)