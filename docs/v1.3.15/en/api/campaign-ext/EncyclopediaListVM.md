<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaListVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `EmptyListText` | `public string EmptyListText { get; set; }` |
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `Items` | `public override MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `SortController` | `public override EncyclopediaListSortControllerVM SortController { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsFilterHighlightEnabled` | `public bool IsFilterHighlightEnabled { get; set; }` |
| `FilterGroups` | `public override MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### GetName

```csharp
public override string GetName()
```

### GetNavigationBarURL

```csharp
public override string GetNavigationBarURL()
```

### CopyFiltersFrom

```csharp
public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool> filters)
```

### Refresh

```csharp
public override void Refresh()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)