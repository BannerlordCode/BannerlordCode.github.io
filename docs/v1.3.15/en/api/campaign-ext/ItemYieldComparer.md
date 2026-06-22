<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemYieldComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemYieldComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ItemYieldComparer` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `YieldState` | `public int YieldState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsYieldSelected` | `public bool IsYieldSelected { get; set; }` |
| `SortTypeText` | `public string SortTypeText { get; set; }` |
| `SortNameText` | `public string SortNameText { get; set; }` |
| `SortYieldText` | `public string SortYieldText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetListToControl

```csharp
public void SetListToControl(MBBindingList<SmeltingItemVM> listToControl)
```

### SortByCurrentState

```csharp
public void SortByCurrentState()
```

### ExecuteSortByName

```csharp
public void ExecuteSortByName()
```

### ExecuteSortByYield

```csharp
public void ExecuteSortByYield()
```

### ExecuteSortByType

```csharp
public void ExecuteSortByType()
```

### SetSortMode

```csharp
public void SetSortMode(bool isAscending)
```

### Compare

```csharp
public abstract int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

### Compare

```csharp
public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

### Compare

```csharp
public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

### Compare

```csharp
public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)