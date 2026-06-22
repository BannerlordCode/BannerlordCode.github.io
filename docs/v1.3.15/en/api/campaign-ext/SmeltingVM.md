<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SmeltingVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmeltingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SmeltingVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponTypeName` | `public string WeaponTypeName { get; set; }` |
| `WeaponTypeCode` | `public string WeaponTypeCode { get; set; }` |
| `CurrentSelectedItem` | `public SmeltingItemVM CurrentSelectedItem { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `SmeltableItemList` | `public MBBindingList<SmeltingItemVM> SmeltableItemList { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `SortController` | `public SmeltingSortControllerVM SortController { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshList

```csharp
public void RefreshList()
```

### TrySmeltingSelectedItems

```csharp
public void TrySmeltingSelectedItems(Hero currentCraftingHero)
```

### SaveItemLockStates

```csharp
public void SaveItemLockStates()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)