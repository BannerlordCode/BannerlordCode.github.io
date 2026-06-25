---
title: "WeaponDesignVM"
description: "Auto-generated class reference for WeaponDesignVM."
---
# WeaponDesignVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## Overview

`WeaponDesignVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
| `CraftedItemVisual` | `public ItemCollectionElementViewModel CraftedItemVisual { get; set; }` |
| `IsInFinalCraftingStage` | `public bool IsInFinalCraftingStage { get; set; }` |
| `ItemName` | `public string ItemName { get; set; }` |
| `IsScabbardVisible` | `public bool IsScabbardVisible { get; set; }` |
| `CurrentWeaponHasScabbard` | `public bool CurrentWeaponHasScabbard { get; set; }` |
| `CurrentDifficulty` | `public int CurrentDifficulty { get; set; }` |
| `CurrentOrderDifficulty` | `public int CurrentOrderDifficulty { get; set; }` |
| `MaxDifficulty` | `public int MaxDifficulty { get; set; }` |
| `IsCurrentHeroAtMaxCraftingSkill` | `public bool IsCurrentHeroAtMaxCraftingSkill { get; set; }` |
| `CurrentHeroCraftingSkill` | `public int CurrentHeroCraftingSkill { get; set; }` |
| `CurrentDifficultyText` | `public string CurrentDifficultyText { get; set; }` |
| `CurrentOrderDifficultyText` | `public string CurrentOrderDifficultyText { get; set; }` |
| `CurrentCraftingSkillValueText` | `public string CurrentCraftingSkillValueText { get; set; }` |
| `DifficultyText` | `public string DifficultyText { get; set; }` |
| `DefaultUsageText` | `public string DefaultUsageText { get; set; }` |
| `AlternativeUsageText` | `public string AlternativeUsageText { get; set; }` |
| `OrderDisabledReasonHint` | `public BasicTooltipViewModel OrderDisabledReasonHint { get; set; }` |
| `ShowOnlyUnlockedPiecesHint` | `public HintViewModel ShowOnlyUnlockedPiecesHint { get; set; }` |
| `BladePieceList` | `public CraftingPieceListVM BladePieceList { get; set; }` |
| `GuardPieceList` | `public CraftingPieceListVM GuardPieceList { get; set; }` |
| `HandlePieceList` | `public CraftingPieceListVM HandlePieceList { get; set; }` |
| `PommelPieceList` | `public CraftingPieceListVM PommelPieceList { get; set; }` |
| `SelectedBladePiece` | `public CraftingPieceVM SelectedBladePiece { get; set; }` |
| `SelectedGuardPiece` | `public CraftingPieceVM SelectedGuardPiece { get; set; }` |
| `SelectedHandlePiece` | `public CraftingPieceVM SelectedHandlePiece { get; set; }` |
| `SelectedPommelPiece` | `public CraftingPieceVM SelectedPommelPiece { get; set; }` |
| `BladeSize` | `public int BladeSize { get; set; }` |
| `GuardSize` | `public int GuardSize { get; set; }` |
| `HandleSize` | `public int HandleSize { get; set; }` |
| `PommelSize` | `public int PommelSize { get; set; }` |
| `ComponentSizeLbl` | `public string ComponentSizeLbl { get; set; }` |
| `IsWeaponCivilian` | `public bool IsWeaponCivilian { get; set; }` |
| `ScabbardHint` | `public HintViewModel ScabbardHint { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `WeaponFlagIconsList` | `public MBBindingList<ItemFlagVM> WeaponFlagIconsList { get; set; }` |
| `CraftingHistory` | `public CraftingHistoryVM CraftingHistory { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.OnFinalize();
```

### SetPieceNewlyUnlocked
`public void SetPieceNewlyUnlocked(CraftingPiece piece)`

**Purpose:** Assigns a new value to piece newly unlocked and updates the object's internal state.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.SetPieceNewlyUnlocked(piece);
```

### SelectPrimaryWeaponClass
`public void SelectPrimaryWeaponClass(CraftingTemplate template)`

**Purpose:** Executes the SelectPrimaryWeaponClass logic.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.SelectPrimaryWeaponClass(template);
```

### ExecuteOpenOrderPopup
`public void ExecuteOpenOrderPopup()`

**Purpose:** Runs the operation or workflow associated with open order popup.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteOpenOrderPopup();
```

### ExecuteCloseOrderPopup
`public void ExecuteCloseOrderPopup()`

**Purpose:** Runs the operation or workflow associated with close order popup.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteCloseOrderPopup();
```

### ExecuteOpenOrdersTab
`public void ExecuteOpenOrdersTab()`

**Purpose:** Runs the operation or workflow associated with open orders tab.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteOpenOrdersTab();
```

### ExecuteOpenWeaponClassSelectionPopup
`public void ExecuteOpenWeaponClassSelectionPopup()`

**Purpose:** Runs the operation or workflow associated with open weapon class selection popup.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteOpenWeaponClassSelectionPopup();
```

### ExecuteOpenFreeBuildTab
`public void ExecuteOpenFreeBuildTab()`

**Purpose:** Runs the operation or workflow associated with open free build tab.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteOpenFreeBuildTab();
```

### CreateCraftingResultPopup
`public void CreateCraftingResultPopup()`

**Purpose:** Constructs a new crafting result popup entity and returns it to the caller.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.CreateCraftingResultPopup();
```

### ExecuteToggleShowOnlyUnlockedPieces
`public void ExecuteToggleShowOnlyUnlockedPieces()`

**Purpose:** Runs the operation or workflow associated with toggle show only unlocked pieces.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteToggleShowOnlyUnlockedPieces();
```

### ExecuteUndo
`public void ExecuteUndo()`

**Purpose:** Runs the operation or workflow associated with undo.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteUndo();
```

### ExecuteRedo
`public void ExecuteRedo()`

**Purpose:** Runs the operation or workflow associated with redo.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteRedo();
```

### ChangeModeIfHeroIsUnavailable
`public void ChangeModeIfHeroIsUnavailable()`

**Purpose:** Executes the ChangeModeIfHeroIsUnavailable logic.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ChangeModeIfHeroIsUnavailable();
```

### ExecuteBeginHeroHint
`public void ExecuteBeginHeroHint()`

**Purpose:** Runs the operation or workflow associated with begin hero hint.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteBeginHeroHint();
```

### ExecuteEndHeroHint
`public void ExecuteEndHeroHint()`

**Purpose:** Runs the operation or workflow associated with end hero hint.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteEndHeroHint();
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Runs the operation or workflow associated with randomize.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteRandomize();
```

### ExecuteChangeScabbardVisibility
`public void ExecuteChangeScabbardVisibility()`

**Purpose:** Runs the operation or workflow associated with change scabbard visibility.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteChangeScabbardVisibility();
```

### SelectWeapon
`public void SelectWeapon(ItemObject itemObject)`

**Purpose:** Executes the SelectWeapon logic.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.SelectWeapon(itemObject);
```

### CanCompleteOrder
`public bool CanCompleteOrder()`

**Purpose:** Checks whether the this instance meets the preconditions for complete order.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
var result = weaponDesignVM.CanCompleteOrder();
```

### ExecuteFinalizeCrafting
`public void ExecuteFinalizeCrafting()`

**Purpose:** Runs the operation or workflow associated with finalize crafting.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.ExecuteFinalizeCrafting();
```

### RefreshItem
`public void RefreshItem()`

**Purpose:** Keeps the display or cache of item in sync with the underlying state.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.RefreshItem();
```

### HaveUnlockedAllSelectedPieces
`public bool HaveUnlockedAllSelectedPieces()`

**Purpose:** Executes the HaveUnlockedAllSelectedPieces logic.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
var result = weaponDesignVM.HaveUnlockedAllSelectedPieces();
```

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement usedPiece)`

**Purpose:** Executes the SwitchToPiece logic.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.SwitchToPiece(usedPiece);
```

### Compare
`public int Compare(CraftingPieceVM x, CraftingPieceVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
var result = weaponDesignVM.Compare(x, y);
```

### Compare
`public int Compare(CraftingTemplate x, CraftingTemplate y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
var result = weaponDesignVM.Compare(x, y);
```

### Compare
`public int Compare(CraftingListPropertyItem x, CraftingListPropertyItem y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of WeaponDesignVM from the subsystem API first
WeaponDesignVM weaponDesignVM = ...;
var result = weaponDesignVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponDesignVM weaponDesignVM = ...;
weaponDesignVM.RefreshValues();
```

## See Also

- [Area Index](../)