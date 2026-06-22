<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemLocationComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemLocationComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ItemLocationComparer` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSortByName

```csharp
public void ExecuteSortByName()
```

### ExecuteSortByLocation

```csharp
public void ExecuteSortByLocation()
```

### ResetAllStates

```csharp
public void ResetAllStates()
```

### SetSortMode

```csharp
public void SetSortMode(bool isAcending)
```

### Compare

```csharp
public abstract int Compare(ClanLordItemVM x, ClanLordItemVM y)
```

### Compare

```csharp
public override int Compare(ClanLordItemVM x, ClanLordItemVM y)
```

### Compare

```csharp
public override int Compare(ClanLordItemVM x, ClanLordItemVM y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)