<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RefinementVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RefinementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `RefinementVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSelectedAction` | `public RefinementActionItemVM CurrentSelectedAction { get; set; }` |
| `IsValidRefinementActionSelected` | `public bool IsValidRefinementActionSelected { get; set; }` |
| `AvailableRefinementActions` | `public MBBindingList<RefinementActionItemVM> AvailableRefinementActions { get; set; }` |
| `RefinementText` | `public string RefinementText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSelectedRefinement

```csharp
public void ExecuteSelectedRefinement(Hero currentCraftingHero)
```

### RefreshRefinementActionsList

```csharp
public void RefreshRefinementActionsList(Hero craftingHero)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)