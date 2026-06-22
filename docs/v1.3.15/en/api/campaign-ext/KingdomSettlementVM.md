<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomSettlementVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomSettlementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomSettlementVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public override void RefreshValues()
```

### RefreshSettlementList

```csharp
public void RefreshSettlementList()
```

### SelectSettlement

```csharp
public void SelectSettlement(Settlement settlement)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)