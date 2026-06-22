<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartySortControllerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartySortControllerVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Party` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; set; }` |
| `IsCustomSort` | `public bool IsCustomSort { get; set; }` |
| `SortOptions` | `public SelectorVM<TroopSortSelectorItemVM> SortOptions { get; set; }` |


## Key Methods

### SelectSortType

```csharp
public void SelectSortType(PartyScreenLogic.TroopSortType sortType)
```

### SortWith

```csharp
public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)
```

### ExecuteToggleOrder

```csharp
public void ExecuteToggleOrder()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)