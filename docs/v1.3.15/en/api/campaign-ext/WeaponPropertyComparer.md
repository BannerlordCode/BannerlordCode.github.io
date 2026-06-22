<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponPropertyComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponPropertyComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WeaponPropertyComparer` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TierFilters` | `public MBBindingList<TierFilterTypeVM> TierFilters { get; set; }` |
| `CurrentCraftedWeaponTemplateId` | `public string CurrentCraftedWeaponTemplateId { get; set; }` |
| `ChooseOrderText` | `public string ChooseOrderText { get; set; }` |
| `ChooseWeaponTypeText` | `public string ChooseWeaponTypeText { get; set; }` |
| `CurrentCraftedWeaponTypeText` | `public string CurrentCraftedWeaponTypeText { get; set; }` |
| `PieceLists` | `public MBBindingList<CraftingPieceListVM> PieceLists { get; set; }` |
| `SelectedPieceTypeIndex` | `public int SelectedPieceTypeIndex { get; set; }` |
| `ShowOnlyUnlockedPieces` | `public bool ShowOnlyUnlockedPieces { get; set; }` |
| `MissingPropertyWarningText` | `public string MissingPropertyWarningText { get; set; }` |
| `CraftingResultPopup` | `public WeaponDesignResultPopupVM CraftingResultPopup { get; set; }` |
| `IsOrderButtonActive` | `public bool IsOrderButtonActive { get; set; }` |
| `IsInOrderMode` | `public bool IsInOrderMode { get; set; }` |
| `IsInFreeMode` | `public bool IsInFreeMode { get; set; }` |
| `FreeModeButtonText` | `public string FreeModeButtonText { get; set; }` |
| `ActiveCraftingOrder` | `public CraftingOrderItemVM ActiveCraftingOrder { get; set; }` |
| `CraftingOrderPopup` | `public CraftingOrderPopupVM CraftingOrderPopup { get; set; }` |
| `WeaponClassSelectionPopup` | `public WeaponClassSelectionPopupVM WeaponClassSelectionPopup { get; set; }` |
| `PrimaryPropertyList` | `public MBBindingList<CraftingListPropertyItem> PrimaryPropertyList { get; set; }` |
| `DesignResultPropertyList` | `public MBBindingList<WeaponDesignResultPropertyItemVM> DesignResultPropertyList { get; set; }` |
| `SecondaryUsageSelector` | `public SelectorVM<CraftingSecondaryUsageItemVM> SecondaryUsageSelector { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetPieceNewlyUnlocked

```csharp
public void SetPieceNewlyUnlocked(CraftingPiece piece)
```

### SelectPrimaryWeaponClass

```csharp
public void SelectPrimaryWeaponClass(CraftingTemplate template)
```

### ExecuteOpenOrderPopup

```csharp
public void ExecuteOpenOrderPopup()
```

### ExecuteCloseOrderPopup

```csharp
public void ExecuteCloseOrderPopup()
```

### ExecuteOpenOrdersTab

```csharp
public void ExecuteOpenOrdersTab()
```

### ExecuteOpenWeaponClassSelectionPopup

```csharp
public void ExecuteOpenWeaponClassSelectionPopup()
```

### ExecuteOpenFreeBuildTab

```csharp
public void ExecuteOpenFreeBuildTab()
```

### CreateCraftingResultPopup

```csharp
public void CreateCraftingResultPopup()
```

### ExecuteToggleShowOnlyUnlockedPieces

```csharp
public void ExecuteToggleShowOnlyUnlockedPieces()
```

### ExecuteUndo

```csharp
public void ExecuteUndo()
```

### ExecuteRedo

```csharp
public void ExecuteRedo()
```

### ChangeModeIfHeroIsUnavailable

```csharp
public void ChangeModeIfHeroIsUnavailable()
```

### ExecuteBeginHeroHint

```csharp
public void ExecuteBeginHeroHint()
```

### ExecuteEndHeroHint

```csharp
public void ExecuteEndHeroHint()
```

### ExecuteRandomize

```csharp
public void ExecuteRandomize()
```

### ExecuteChangeScabbardVisibility

```csharp
public void ExecuteChangeScabbardVisibility()
```

### SelectWeapon

```csharp
public void SelectWeapon(ItemObject itemObject)
```

### CanCompleteOrder

```csharp
public bool CanCompleteOrder()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)