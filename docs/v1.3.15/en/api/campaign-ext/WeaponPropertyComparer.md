<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponPropertyComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponPropertyComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>`
**Base:** `IComparer<CraftingListPropertyItem>`
**Area:** campaign-ext

## Overview

`WeaponPropertyComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetPieceNewlyUnlocked
`public void SetPieceNewlyUnlocked(CraftingPiece piece)`

**Purpose:** Sets the value or state of `piece newly unlocked`.

### SelectPrimaryWeaponClass
`public void SelectPrimaryWeaponClass(CraftingTemplate template)`

**Purpose:** Handles logic related to `select primary weapon class`.

### ExecuteOpenOrderPopup
`public void ExecuteOpenOrderPopup()`

**Purpose:** Executes the `open order popup` operation or workflow.

### ExecuteCloseOrderPopup
`public void ExecuteCloseOrderPopup()`

**Purpose:** Executes the `close order popup` operation or workflow.

### ExecuteOpenOrdersTab
`public void ExecuteOpenOrdersTab()`

**Purpose:** Executes the `open orders tab` operation or workflow.

### ExecuteOpenWeaponClassSelectionPopup
`public void ExecuteOpenWeaponClassSelectionPopup()`

**Purpose:** Executes the `open weapon class selection popup` operation or workflow.

### ExecuteOpenFreeBuildTab
`public void ExecuteOpenFreeBuildTab()`

**Purpose:** Executes the `open free build tab` operation or workflow.

### CreateCraftingResultPopup
`public void CreateCraftingResultPopup()`

**Purpose:** Creates a new `crafting result popup` instance or object.

### ExecuteToggleShowOnlyUnlockedPieces
`public void ExecuteToggleShowOnlyUnlockedPieces()`

**Purpose:** Executes the `toggle show only unlocked pieces` operation or workflow.

### ExecuteUndo
`public void ExecuteUndo()`

**Purpose:** Executes the `undo` operation or workflow.

### ExecuteRedo
`public void ExecuteRedo()`

**Purpose:** Executes the `redo` operation or workflow.

### ChangeModeIfHeroIsUnavailable
`public void ChangeModeIfHeroIsUnavailable()`

**Purpose:** Handles logic related to `change mode if hero is unavailable`.

### ExecuteBeginHeroHint
`public void ExecuteBeginHeroHint()`

**Purpose:** Executes the `begin hero hint` operation or workflow.

### ExecuteEndHeroHint
`public void ExecuteEndHeroHint()`

**Purpose:** Executes the `end hero hint` operation or workflow.

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Executes the `randomize` operation or workflow.

### ExecuteChangeScabbardVisibility
`public void ExecuteChangeScabbardVisibility()`

**Purpose:** Executes the `change scabbard visibility` operation or workflow.

### SelectWeapon
`public void SelectWeapon(ItemObject itemObject)`

**Purpose:** Handles logic related to `select weapon`.

### CanCompleteOrder
`public bool CanCompleteOrder()`

**Purpose:** Checks whether the current object can `complete order`.

## Usage Example

```csharp
// First obtain a WeaponPropertyComparer instance from game state, then call one of its public methods
var value = new WeaponPropertyComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
