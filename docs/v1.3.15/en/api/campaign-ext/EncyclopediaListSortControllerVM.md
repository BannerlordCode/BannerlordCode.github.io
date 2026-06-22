<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListSortControllerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaListSortControllerVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SortSelection` | `public EncyclopediaListSelectorVM SortSelection { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `SortedValueLabelText` | `public string SortedValueLabelText { get; set; }` |
| `SortByLabel` | `public string SortByLabel { get; set; }` |
| `AlternativeSortState` | `public int AlternativeSortState { get; set; }` |
| `IsAlternativeSortVisible` | `public bool IsAlternativeSortVisible { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetSortSelection

```csharp
public void SetSortSelection(int index)
```

### ExecuteSwitchSortOrder

```csharp
public void ExecuteSwitchSortOrder()
```

### SetSortOrder

```csharp
public void SetSortOrder(bool isAscending)
```

### GetSortOrder

```csharp
public bool GetSortOrder()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)