<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaPageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaPageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Obj` | `public object Obj { get; }` |
| `IsLoadingOver` | `public bool IsLoadingOver { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |
| `BookmarkHint` | `public HintViewModel BookmarkHint { get; set; }` |
| `Items` | `public virtual MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `FilterGroups` | `public virtual MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |
| `SortController` | `public virtual EncyclopediaListSortControllerVM SortController { get; set; }` |


## Key Methods

### GetName

```csharp
public virtual string GetName()
```

### GetNavigationBarURL

```csharp
public virtual string GetNavigationBarURL()
```

### Refresh

```csharp
public virtual void Refresh()
```

### OnTick

```csharp
public virtual void OnTick()
```

### ExecuteSwitchBookmarkedState

```csharp
public virtual void ExecuteSwitchBookmarkedState()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)