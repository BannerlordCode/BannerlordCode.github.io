<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponClassSelectionPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponClassSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WeaponClassSelectionPopupVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PopupHeader` | `public string PopupHeader { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `WeaponClasses` | `public MBBindingList<WeaponClassVM> WeaponClasses { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateNewlyUnlockedPiecesCount

```csharp
public void UpdateNewlyUnlockedPiecesCount(List<CraftingPiece> newlyUnlockedPieces)
```

### ExecuteSelectWeaponClass

```csharp
public void ExecuteSelectWeaponClass(int index)
```

### ExecuteClosePopup

```csharp
public void ExecuteClosePopup()
```

### ExecuteOpenPopup

```csharp
public void ExecuteOpenPopup()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)