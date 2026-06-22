<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaListItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Object` | `public object Object { get; }` |
| `ListItem` | `public EncyclopediaListItem ListItem { get; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `PlayerCanSeeValues` | `public bool PlayerCanSeeValues { get; set; }` |
| `Id` | `public string Id { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ComparedValue` | `public string ComparedValue { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### Execute

```csharp
public void Execute()
```

### SetComparedValue

```csharp
public void SetComparedValue(EncyclopediaListItemComparerBase comparer)
```

### ExecuteBeginTooltip

```csharp
public void ExecuteBeginTooltip()
```

### ExecuteEndTooltip

```csharp
public void ExecuteEndTooltip()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)