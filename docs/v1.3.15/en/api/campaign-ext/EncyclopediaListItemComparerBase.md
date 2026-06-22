<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItemComparerBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaListItemComparerBase` is a class in the `TaleWorlds.CampaignSystem.Encyclopedia` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; }` |


## Key Methods

### SetSortOrder

```csharp
public void SetSortOrder(bool isAscending)
```

### SwitchSortOrder

```csharp
public void SwitchSortOrder()
```

### SetDefaultSortOrder

```csharp
public void SetDefaultSortOrder()
```

### Compare

```csharp
public abstract int Compare(EncyclopediaListItem x, EncyclopediaListItem y)
```

### GetComparedValueText

```csharp
public abstract string GetComparedValueText(EncyclopediaListItem item)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)