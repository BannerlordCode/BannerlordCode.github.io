<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SmeltingItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmeltingItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SmeltingItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentElement` | `public EquipmentElement EquipmentElement { get; }` |
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Yield` | `public MBBindingList<CraftingResourceItemVM> Yield { get; set; }` |
| `InputMaterials` | `public MBBindingList<CraftingResourceItemVM> InputMaterials { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NumOfItems` | `public int NumOfItems { get; set; }` |
| `HasMoreThanOneItem` | `public bool HasMoreThanOneItem { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSelection

```csharp
public void ExecuteSelection()
```

### ExecuteShowItemTooltip

```csharp
public void ExecuteShowItemTooltip()
```

### ExecuteHideItemTooltip

```csharp
public void ExecuteHideItemTooltip()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)